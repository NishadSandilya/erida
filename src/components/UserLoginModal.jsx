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
const UserLoginModal = () => {

    const [{ infoDisplayControls }, {loginDisplayControls}, {hocDisplayControls}] = useContext(AppContext)

    const [otpStatus, setOtpStatus] = useState(false)

    const [dim, setDim] = useState({ height: window.innerHeight, width: window.innerWidth })

    const updateWidthAndHeight = () => {
        setDim(() => {
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const classes = useStyles();
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    })

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
                url: "https://www.erida.herokuapp.com/v1/users/phone/send-OTP",
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

    const loginWithPhoneAndOtp = async data => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            await axios({
                method: "post",
                url: "https://www.erida.herokuapp.com/v1/users/phone/login-with-phone-and-otp",
                data,
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

    const onFormSubmit = otpStatus ? loginWithPhoneAndOtp : sendOTP
    return (
        <div className="login-modal">
            <div onClick = {() => {
                loginDisplayControls[1](previous => {
                    return{
                        ...previous,
                        loginModalVisibility: false,
                        loginPromptVisibility: false
                    }
                })
            }} className="login-modal__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <ImageWrapper
                imageSource={userAsset2}
                margin="15vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth={dim.height <= 500 ? "0" : "350px"}
            />
            <form
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <Typography
                    style={{
                        marginTop: otpStatus ? "1vh" : "10vh"
                    }}
                    children="Login/Signup"
                    variant="h5"
                    classes={{
                        root: classes.form__title__root,
                    }}
                />
                <Controller
                    name="numbers"
                    defaultValue=""
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
                    children={otpStatus ? "Login" : "Send OTP"}
                    size="medium"
                    classes={{
                        root: classes.form__button__root,
                    }}
                />
            </form>
        </div>
    )
}

//Default exports
export default UserLoginModal
