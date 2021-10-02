//The is the user login popup screen
import { Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import ImageWrapper from "./ImageWrapper"
import userAsset2 from "../cdn/images/userAsset2.png"
import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import { useContext, useEffect,  useState } from 'react';
import { AppContext } from './Data';
import { reloadWindow } from './windowReload'
import Text from './Text';
import { removeDepreciatedSST } from './pingServer';
//Form config

//Validation schema's regexes
const phoneRegExp = /\b\d{10}\b/;

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
        textTransform: "none",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#000000"
    }
})

//Create a validation schema with yup
const validationSchema = yup.object().shape({
    numbers: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Please enter a valid 10-digit phone number")
})

//Primary functional component here
const PhoneUpdate = ({logOut, closeModal}) => {

    const [{ infoDisplayControls }, , {hocDisplayControls}] = useContext(AppContext)

    const [otpStatus, setOtpStatus] = useState(false)

    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const [dataHere, setDataHere] = useState({
        phoneNumber: ""
    })

    const [dataLoaded, setDataLoaded] = useState(false)

    // const [refresh, setRefresh] = useState(false)

    //Set initial data call function
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
                    phoneNumber: serverResponse?.data?.payload?.phone
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

    //Define initial mobile submit request
    const sendOTP = async data => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: "post",
                withCredentials: true,
                url: "https://erida.herokuapp.com/v1/users/phone/send-OTP-update-number",
                data
            })
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
            setOtpStatus(() => true)
        }
        catch (error) {
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            if(error?.response?.status === 498) reloadWindow()
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
            if(error?.response?.status === 498) reloadWindow()
            if(error?.response?.status === 499) removeDepreciatedSST()
        }
    }

    const updatePhoneUser = async data => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: "patch",
                withCredentials: true,
                url: "https://erida.herokuapp.com/v1/users/phone/update-phone",
                data
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            // setDataHere(previous => {
            //     return {
            //         ...previous,
            //         phoneNumber:""
            //     }
            // })
            // setDataLoaded(false)
            // reset()
            // setOtpStatus(() => false)
            // setRefresh(n=>!n)
            closeModal()
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
            if(error?.response?.status === 498) reloadWindow()
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

    const onFormSubmit = otpStatus ? updatePhoneUser : sendOTP
    return (
        <div>
            {dataLoaded ? <form
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <Typography
                    style={{
                        marginTop: otpStatus ? "5vh" : "10vh"
                    }}
                    children="Update phone"
                    variant="h5"
                    classes={{
                        root: classes.form__title__root,
                    }}
                />
                <Text
                content="You will be logged out immediately of all your devices after a phone number change"
                fontSize="12px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
                fontWeight="500"
            />
                <Controller
                    name="numbers"
                    defaultValue={dataHere?.phoneNumber}
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
                {otpStatus ? <Controller
                    name="otp"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            variant="outlined"
                            type="tel"
                            label="Enter OTP"
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
                /> : ""}
                <Button
                    type="submit"
                    variant="contained"
                    children={otpStatus ? "Verify and Save" : "Send OTP"}
                    size="medium"
                    classes={{
                        root: classes.form__button__root,
                    }}
                />
            </form> : ""}
        </div>
    )
}

//Default exports
export default PhoneUpdate
