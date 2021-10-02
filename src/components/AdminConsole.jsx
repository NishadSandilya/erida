//This is the console for the founder of erida. Currently (v1)

//Required modules here
import adminAsset from '../cdn/images/adminAsset.png'
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Data'
import axios from 'axios'
import { reloadWindow } from './windowReload'
import { removeDepreciatedSST } from './pingServer'
import ButtonSquared from './ButtonSquared'
import wrongPage from "../cdn/images/wrongPage.png"
import ButtonRound from './ButtonRound'
import AdminCreateOrder from './AdminCreateOrder'
import { Link } from 'react-router-dom'

//The primary functional component here
const AdminConsole = () => {
    const [{ infoDisplayControls }, , { hocDisplayControls }] = useContext(AppContext)

    const [dataHere, setDataHere] = useState({
        userName: ""
    })

    const [refresh, setRefresh] = useState(false)

    const [createOrderModal, setCreateOrderModal] = useState(false)

    const [displayContent, setDisplayContent] = useState(false)

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
                url: 'https://www.erida.herokuapp.com/v1/admin'
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            setDisplayContent(() => true)
            setDataHere(previous => {
                return {
                    ...previous,
                    userName: `${serverResponse.data.payload.firstname} ${serverResponse.data.payload.lastname}`
                }
            })
        }
        catch (error) {
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            // if (error.response.status === 498) return reloadWindow()

            // if(error?.response?.status === 499) removeDepreciatedSST()

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
        <div className="admin">
            {createOrderModal ? <AdminCreateOrder closeModal={() => {
                setCreateOrderModal(() => false)
                setRefresh(n => !n)
            }} /> : ""}
            {displayContent ? <div className="admin__content">
            <ImageWrapper
                imageSource={adminAsset}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
                <Text
                    content={`Hi ${dataHere?.userName !== "undefined undefined" ? dataHere?.userName.split(' ')[0] + "!" : "there!"}`}
                    fontSize="22px"
                    width="50vw"
                    margin="5vh 0 0 0"
                    lineHeight="32px"
                    color="#707070"
                    textAlign="center"
                    fontWeight="500"
                />
                <Text
                    content="Hello there, operator! Below are your exclusive access to erida's features"
                    fontSize="16px"
                    width="70vw"
                    margin="3vh 0 0 0"
                    lineHeight="22px"
                    color="#707070"
                    textAlign="center"
                    fontWeight="400"
                />

                <ButtonSquared
                    onClick={() => setCreateOrderModal(() => true)}
                    content="Create a New Order"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    width="180px"
                    padding="3vw 4vw"
                    margin="3vh 0 0 0"
                />
                <Link to='/restricted/admin/console/search-orders-by-phone'>
                    <ButtonSquared
                        content="Search Orders by Phone"
                        backgroundColor="black"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        color="white"
                        width="180px"
                        padding="3vw 4vw"
                        margin="3vh 0 0 0"
                    />
                </Link>
                <Link to ='/restricted/admin/console/search-orders-by-ID'>
                    <ButtonSquared
                        content="Search Order by ID"
                        backgroundColor="black"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        color="white"
                        width="180px"
                        padding="3vw 4vw"
                        margin="3vh 0 15vh 0"
                    />
                </Link>
            </div> : ""}
            {displayContent ? "" : <div className="admin__noContent">
                <ImageWrapper
                    imageSource={wrongPage}
                    margin="15vh 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="250px"
                />
                <Text
                    content="Restricted Route"
                    fontSize="22px"
                    width="50vw"
                    margin="3vh 0 0 0"
                    lineHeight="32px"
                    color="#707070"
                    textAlign="center"
                    fontWeight="500"
                />
                <Text
                    content="Seems like you landed on a restricted route. This route is only for our operators. If you want to work with us, please refer to the jobs section in the about us page"
                    fontSize="16px"
                    width="70vw"
                    margin="3vh 0 0 0"
                    lineHeight="22px"
                    color="#707070"
                    textAlign="center"
                    fontWeight="400"
                />
            </div>}
        </div>
    )
}


//Default export here
export default AdminConsole