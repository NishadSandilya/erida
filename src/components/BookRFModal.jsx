//Functional component here
import React from 'react'
import reactDom from 'react-dom'
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import remoteFixAsset4 from "../cdn/images/remoteFixAsset4.png"
import closeBtn from "../cdn/images/closeBtn.png"
import rfFormAsset1 from "../cdn/images/rfFormAsset1.png"
import { Typography, makeStyles, TextField, InputAdornment, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';

const phoneRegExp = /\b\d{10}\b/;
const codeExp = /\b\d{9}\b/;
const useStyles = makeStyles({
    signup__title__root: {
        marginTop: "5vh",
        overflow: "hidden"
    },
    signup__form__textFields__root: {
        marginTop: "1vh",
        width: "70%",
        overflow: "hidden"
        
    },
    signup__form__textFields__input: {
        color: "#000000",
        fontSize: "14px",
        overflow: "hidden"

    },
    signup__form__textFields__label: {
        color: "#707070",
        fontSize: "14px",
        overflow: "hidden"

    },
    signup__form__textFields__input__root: {
        "&:hover $signup__form__textFields__notchedOutline": {
            borderColor: "#e9e0cf"
        }
    },
    signup__form__textFields__input__adornment: {
        cursor: "default"
    },
    signup__form__button__root: {
        color: "white",
        marginTop: "5vw",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#000000"
    }
})

//Yup
const validationSchema = yup.object().shape({
    name: yup.string().min(3, "Please enter your full name").matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please enter your name"),
    phone: yup.string().matches(phoneRegExp, "Please enter a valid 10-digit phone number").required("Please enter your phone number"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email-ID"),
    code: yup.string().matches(codeExp, "Please enter a valid AnyDesk 9-Digit Code").required("Please enter your AnyDesk Code")
})

const BookRFModal = ({ closeRfModal }) => {
    const classes = useStyles();
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    })
    const onFormSubmit = async data => {
        closeRfModal();
        try {
            const returnedData = await axios({
                method: "post",
                url: "https://0f61-223-236-239-212.ngrok.io/v1/anydesk/new-order",
                data
            })
        }
        catch (err) {

        }

    }
    return reactDom.createPortal((
        <div className="rFModal">
            <div className="rFModal__form">
                <div className="rFModal__form__content">
                    <img src={rfFormAsset1} alt="Background" />

                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                    >
                        <Typography
                            children="Fill Details"
                            variant="h4"
                            color="primary"
                            classes={{
                                root: classes.signup__title__root,
                            }}
                        />
                        <Text
                            content="This window will close immediately after a successful Order Place and the details will be sent to your phone.
                "
                            fontSize="10px"
                            width="50vw"
                            margin="1vh auto 0 auto"
                            lineHeight="14px"
                            color="#707070"
                            textAlign="left"
                        />
                        <Controller
                            name="name"
                            defaultValue=""
                            control={control}
                            // rules = {}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    type="text"
                                    label="Full name"
                                    color="primary"
                                    size="small"
                                    error={Boolean(error)}
                                    helperText={error ? error.message : ""}
                                    value={value}
                                    onChange={onChange}
                                    autoFocus
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__label
                                        }
                                    }}
                                    classes={{
                                        root: classes.signup__form__textFields__root,
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__input__root,
                                            input: classes.signup__form__textFields__input
                                        }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="phone"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    type="tel"
                                    label="Phone number"
                                    color="primary"
                                    size="small"
                                    value={value}
                                    onChange={onChange}
                                    error={Boolean(error)}
                                    helperText={error ? error.message : ""}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__label
                                        }
                                    }}
                                    classes={{
                                        root: classes.signup__form__textFields__root,
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__input__root,
                                            input: classes.signup__form__textFields__input
                                        }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    error={Boolean(error)}
                                    helperText={error ? error.message : ""}
                                    type="email"
                                    label="Email ID"
                                    color="primary"
                                    size="small"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__label
                                        }
                                    }}
                                    classes={{
                                        root: classes.signup__form__textFields__root,
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__input__root,
                                            input: classes.signup__form__textFields__input
                                        }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="code"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    error={Boolean(error)}
                                    helperText={error ? error.message : ""}
                                    type="text"
                                    label="AnyDesk Code"
                                    color="primary"
                                    size="small"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__label
                                        }
                                    }}
                                    classes={{
                                        root: classes.signup__form__textFields__root,
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.signup__form__textFields__input__root,
                                            input: classes.signup__form__textFields__input
                                        }
                                    }}
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            children="Place order"
                            size="small"
                            classes={{
                                root: classes.signup__form__button__root,
                            }}
                        />
                        
                    </form>
                </div>
                <div onClick={closeRfModal} className="rFModal__form__close-button">
                    <img src={closeBtn} alt="Close Button" width="36" />
                </div>
            </div>

        </div>
    ), document.getElementById('portal'))
}

export default BookRFModal