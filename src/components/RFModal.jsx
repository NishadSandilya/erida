import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import ImageWrapper from "./ImageWrapper"

import { Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './Data';
import { reloadWindow } from './windowReload';
import Text from "./Text";
import { useHistory } from "react-router-dom";
import { removeDepreciatedSST } from "./pingServer";
//Form config

//Create custom material ui styles
const useStyles = makeStyles({
    form__title__root: {
        color: "#707070"
    },
    form__textFields__root: {
        marginTop: "3vh",
        width: "60%"
    },
    form__textFields__input: {
        color: "#000000",
        fontSize: "14px",
    },
    form__textFields__label: {
        color: "#707070",
        fontSize: "14px",
    },
    form__textFields__notchedOutline: {
        // borderColor: "#707070"
    },
    form__textFields__input__root: {
        "&:hover $form__textFields__notchedOutline": {
            // borderColor: "#707070"
        }
    },
    form__button__root: {
        color: "white",
        marginTop: "5vw",
        marginBottom: "50vh",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#000000"
    }
})

const alphaRegex = /^[A-Za-z]+$/
const phoneRegExp = /\b\d{10}\b/;

//Create a validation schema with yup
const validationSchema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name").matches(alphaRegex, "First name should contain only alphabets"),
    lastname: yup.string().required("Please enter your last name").matches(alphaRegex, "Last name should contain only alphabets"),
    numbers: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Please enter a valid 10-digit phone number"),
    issue: yup.string().required("Please mention your computer issue briefly"),
    address: yup.string().required("Please mention your full address"),
    email: yup.string().email("Please enter a valid email address").required("Please mention your email"),    
})
const RFModal = ({ closeModal }) => {

    const history = useHistory()

    const [{ infoDisplayControls }, , {hocDisplayControls}] = useContext(AppContext)

    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const [dataHere, setDataHere] = useState({
        firstname: "",
        lastname: "",
        phone: ""
    })

    const [dataLoaded, setDataLoaded] = useState(false)

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
            setDataHere(previous => {
                setDataLoaded(() => true)
                return {
                    ...previous,
                    firstname: serverResponse?.data?.payload?.firstname,
                    lastname: serverResponse?.data?.payload?.lastname,
                    phone: serverResponse?.data?.payload?.phone
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

    //Initial data call
    useEffect(() => {
        serverREQ()
    }, [])

    const onFormSubmit = async data => {
        //Modify the data to the order now

        data = {
            ...data,
            itemSKU: "ERIREMSERFEE",
            orderType: "Remote Assist"
        }

        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: "post",
                withCredentials: true,
                url: "https://erida.herokuapp.com/v1/orders/new-order",
                data,
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            // reset()
            closeModal()
            history.push('/orders')
            //Route to user orders
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
    
    return (
        <div className="rf-modal">
            <div onClick={closeModal} className="rf-modal__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <div className="rf-modal__wrapper">
                {dataLoaded ? <form
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <Typography
                        style={{
                            marginTop: "10vh"
                        }}
                        children="Mention Details"
                        variant="h5"
                        classes={{
                            root: classes.form__title__root,
                        }}
                    />
                    <Text
                        content="All your orders can be found in the user console. You can pay, download receipt and view status of your orders there"
                        fontSize="12px"
                        width="70vw"
                        margin="1vh 0 0 0"
                        lineHeight="22px"
                        color="#707070"
                        textAlign="left"
                        fontWeight="500"
                    />
                    <Controller
                        name="firstname"
                        defaultValue={dataHere?.firstname === undefined ? "" : dataHere.firstname}
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="text"
                                label="First Name"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                autoFocus
                                helperText={error ? error.message : ""}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.form__textFields__label
                                    }
                                }}
                                classes={{
                                    root: classes.form__textFields__root,
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.form__textFields__input__root,
                                        input: classes.form__textFields__input,
                                        notchedOutline: classes.form__textFields__notchedOutline
                                    }
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="lastname"
                        defaultValue={dataHere?.lastname === undefined ? "" : dataHere.lastname}
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="text"
                                label="Last Name"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                helperText={error ? error.message : ""}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.form__textFields__label
                                    }
                                }}
                                classes={{
                                    root: classes.form__textFields__root,
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.form__textFields__input__root,
                                        input: classes.form__textFields__input,
                                        notchedOutline: classes.form__textFields__notchedOutline
                                    }
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="numbers"
                        defaultValue={dataHere?.phone}
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="tel"
                                label="Phone number"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                helperText={error ? error.message : ""}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.form__textFields__label
                                    }
                                }}
                                classes={{
                                    root: classes.form__textFields__root,
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.form__textFields__input__root,
                                        input: classes.form__textFields__input,
                                        notchedOutline: classes.form__textFields__notchedOutline
                                    }
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="issue"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="text"
                                label="Describe issue"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                helperText={error ? error.message : ""}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.form__textFields__label
                                    }
                                }}
                                classes={{
                                    root: classes.form__textFields__root,
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.form__textFields__input__root,
                                        input: classes.form__textFields__input,
                                        notchedOutline: classes.form__textFields__notchedOutline
                                    }
                                }}
                            />
                        )}
                    />
                    <Typography
                        style={{
                            marginTop: "10vh"
                        }}
                        children="Get Receipt"
                        variant="h5"
                        classes={{
                            root: classes.form__title__root,
                        }}
                    />
                    <Text
                        content="After a successful payment on order completion through Razorpay, your payment receipt will be sent to this email address"
                        fontSize="12px"
                        width="70vw"
                        margin="1vh 0 0 0"
                        lineHeight="22px"
                        color="#707070"
                        textAlign="left"
                        fontWeight="500"
                    />
                    <Controller
                        name="email"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="text"
                                label="Email"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                helperText={error ? error.message : ""}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.form__textFields__label
                                    }
                                }}
                                classes={{
                                    root: classes.form__textFields__root,
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.form__textFields__input__root,
                                        input: classes.form__textFields__input,
                                        notchedOutline: classes.form__textFields__notchedOutline
                                    }
                                }}
                            />
                        )}
                    />
                    <Typography
                        style={{
                            marginTop: "10vh"
                        }}
                        children="Billing Address"
                        variant="h5"
                        classes={{
                            root: classes.form__title__root,
                        }}
                    />
                    <Text
                        content="Please enter your billing address below. Note that, we, currently provide remote services all over Assam"
                        fontSize="12px"
                        width="70vw"
                        margin="1vh 0 0 0"
                        lineHeight="22px"
                        color="#707070"
                        textAlign="left"
                        fontWeight="500"
                    />
                    <Controller
                        name="address"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="text"
                                label="Full Address"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                helperText={error ? error.message : ""}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.form__textFields__label
                                    }
                                }}
                                classes={{
                                    root: classes.form__textFields__root,
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.form__textFields__input__root,
                                        input: classes.form__textFields__input,
                                        notchedOutline: classes.form__textFields__notchedOutline
                                    }
                                }}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        children="Place Order"
                        size="medium"
                        classes={{
                            root: classes.form__button__root,
                        }}
                    />
                </form> : ""}
            </div>
        </div>
    )
}

export default RFModal