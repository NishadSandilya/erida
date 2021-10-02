//The is the user login popup screen
import { Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './Data';
import { reloadWindow } from './windowReload';
import { removeDepreciatedSST } from './pingServer';
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
        textTransform: "none",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#000000"
    }
})

const alphaRegex = /^[A-Za-z]+$/

//Create a validation schema with yup
const validationSchema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name").matches(alphaRegex, "First name should contain only alphabets"),
    lastname: yup.string().required("Please enter your last name").matches(alphaRegex, "Last name should contain only alphabets")
})

//Primary functional component here
const NameUpdate = ({closeModal}) => {

    const [{ infoDisplayControls }, , {hocDisplayControls}] = useContext(AppContext)

    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const [dataHere, setDataHere] = useState({
        firstname: "",
        lastname: ""
    })

    const [dataLoaded, setDataLoaded] = useState(false)

    // const [refresh, setRefresh] = useState(false)

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
                url: 'http://localhost:8000/v1/users/me'
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
                    lastname: serverResponse?.data?.payload?.lastname
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
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: "patch",
                withCredentials: true,
                url: "http://localhost:8000/v1/users/me/update-name",
                data,
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
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
        <div>
            {dataLoaded ? <form
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <Typography
                    style={{
                        marginTop: "10vh"
                    }}
                    children="Update name"
                    variant="h5"
                    classes={{
                        root: classes.form__title__root,
                    }}
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
                <Button
                    type="submit"
                    variant="contained"
                    children="Save Changes"
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
export default NameUpdate
