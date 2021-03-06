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
import { Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import OrderAdminCard from './OrderAdminCard'

//Create custom material ui styles
const useStyles = makeStyles({
    form__title__root: {
        color: "#707070",
        marginTop: "5vh"
    },
    form__button__root: {
        color: "white",
        marginTop: "5vw",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#000000"
    }
})

//The primary functional component here
const ShowAllOrders = () => {

    const classes = useStyles();

    const [{ infoDisplayControls }, , { hocDisplayControls }] = useContext(AppContext)

    const [dataHere, setDataHere] = useState([])

    const [displayContent, setDisplayContent] = useState(false)

    const serverREQ = async () => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            await axios({
                method: 'get',
                withCredentials: true,
                url: 'https://erida.herokuapp.com/v1/admin'
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            setDisplayContent(() => true)
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
    const loadOrders = async () => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: "get",
                withCredentials: true,
                url: "https://erida.herokuapp.com/v1/admin/all-orders",
            })
            setDataHere(() => serverResponse?.data?.payload)
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: serverResponse?.data?.message,
                    color: "#2B981Bbb"
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
            if (error?.response?.status === 498) reloadWindow()
            if(error?.response?.status === 499) removeDepreciatedSST()
        }
    }
    useEffect(() => {
        serverREQ()
        loadOrders()
    }, [])

    return (
        <div className="admin">
            {displayContent ? <div className="admin__content">
                <div style={{ marginBottom: "5vh" }}></div>
                {dataHere.length ? "" : <Text
                content="There are no orders to be shown"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 3vh 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />}
            {dataHere.map(order => {
                return <OrderAdminCard key={order.orderId} orderDetails={order} />
            })}
            <div style={{ marginBottom: "10vh" }}></div>
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
export default ShowAllOrders