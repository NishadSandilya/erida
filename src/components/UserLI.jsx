import { useContext, useEffect, useState } from "react"
import { AppContext } from "./Data"
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonRound from "./ButtonRound"
import userLoggedInAsset1 from "../cdn/images/userLoggedInAsset1.png"
import axios from 'axios'
import { reloadWindow } from "./windowReload"
import EditAccountModal from "./EditAccountModal"
import { Link } from "react-router-dom"
import { removeDepreciatedSST } from "./pingServer"

const UserLI = () => {
    const [{ infoDisplayControls }, , {hocDisplayControls}] = useContext(AppContext)

    const [editModalVisibile, setEditModalVisibility] = useState(false)

    const [refresh, setRefresh] = useState(true)

    const [isAdmin, setIsAdmin] = useState(false)
    // console.log(refresh)

    //Current window states
    const [dataHere, setDataHere] = useState({
        userName: "undefined undefined",
        userPhone: "undefined",
        userAvatar: "undefined"
    })
    // console.log(dataHere)
    //Logout
    const logOut = async () => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            await axios({
                method: "get",
                url: "https://erida.herokuapp.com/v1/users/me/log-out",
                withCredentials: true
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            reloadWindow()
        }
        catch (error) {
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: error?.response?.data?.error,
                    color: "#ff5757bb"
                }
            })
            setTimeout(() => {
                infoDisplayControls[1](previous => {
                    return {
                        ...previous,
                        visibility: false,
                    }
                })
            }, 2000)
        }
    }

    const serverREQ = async () => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: 'get',
                withCredentials: true,
                url: 'https://erida.herokuapp.com/v1/users/me'
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            if(serverResponse?.data?.payload?.userType === 'admin') setIsAdmin(() => true)
            setDataHere(previous => {
                return {
                    ...previous,
                    userName: `${serverResponse.data.payload.firstname} ${serverResponse.data.payload.lastname}`,
                    userPhone: serverResponse.data.payload.phone,
                    userAvatar: serverResponse.data.payload.avatar
                }
            })
        }
        catch (error) {
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            if (error.response.status === 498) return reloadWindow()

            if(error?.response?.status === 499) removeDepreciatedSST()

            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: error?.response?.data?.error,
                    color: "#ff5757bb"
                }
            })
            setTimeout(() => {
                infoDisplayControls[1](previous => {
                    return {
                        ...previous,
                        visibility: false,
                    }
                })
            }, 2000)
        }
    }

    useEffect(() => {
        serverREQ()
    }, [refresh])

    return (
        <div className="userLi">
            {editModalVisibile ? <EditAccountModal logOut={logOut} closeModal={
                () => {
                    setEditModalVisibility(() => false)
                    setRefresh(n => !n)
                }
            } /> : ""}
            <div className="userLi__greeterGirl">
                <img src={userLoggedInAsset1} alt="Greetings" width="250" />
            </div>
            <div className="userLi__avatar">
                <img src={dataHere?.userAvatar} alt="" />
            </div>

            <Text
                content={`Hi ${dataHere?.userName !== "undefined undefined" ? dataHere?.userName.split(' ')[0] + "!" : "there!"}`}
                fontSize="22px"
                width="50vw"
                margin="3vh 0 0 0"
                lineHeight="32px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Account Details"
                fontSize="16px"
                width="70vw"
                margin="15vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
                fontWeight="600"
            />
            <Text
                content={`Name: ${dataHere?.userName !== "undefined undefined" ? dataHere?.userName : "Name not set"}`}
                fontSize="16px"
                width="70vw"
                margin="2vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content={`Phone: ${dataHere?.userPhone}`}
                fontSize="16px"
                width="70vw"
                margin="0 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />

            <div className="userLi__quickBtnsGroup">
                {isAdmin ? <Link to = '/restricted/admin/console'>
                    <ButtonRound
                        content="Admin Panel"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        width="100px"
                        height="30px"
                    />
                </Link> : ""}
                <Link to = '/orders'>
                    <ButtonRound
                        content="Your Orders"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        width="100px"
                        height="30px"
                    />
                </Link>
                <ButtonRound
                    onClick={() => {
                        setEditModalVisibility(() => true)
                    }}
                    content="Edit Details"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    width="100px"
                    height="30px"
                />
                <ButtonRound
                    onClick={() => logOut()}
                    content="Log Out"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    width="100px"
                    height="30px"
                />
            </div>
        </div>
    )
}

export default UserLI