import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import ImageWrapper from "./ImageWrapper"
import { Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { reloadWindow } from './windowReload';
import Text from "./Text";
import ButtonRound from "./ButtonRound";
import { removeDepreciatedSST } from "./pingServer";
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Data'
import axios from 'axios'
import createOrderBackground from "../cdn/images/createOrderBackground.png"
import ButtonSquared from "./ButtonSquared";

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
        marginBottom: "50vh",
        marginTop: "3vh",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#000000"
    }
})

const phoneRegExp = /\b\d{10}\b/;

//Create a validation schema with yup
const validationSchema = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    numbers: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Please enter a valid 10-digit phone number"),
    address: yup.string(),
    email: yup.string().email("Please enter a valid email address"),orderType: yup.string().oneOf(["Onsite Service", "Remote Assist", "Gaming Session", "Custom Order"])
})

const AdminCreateOrder = ({ closeModal }) => {

    const [fields, setFields] = useState([{
        item: "",
        quantity: "",
        value: ""
    }])

    function handleChangeInput(i, event) {
        const values = [...fields];
        const { name, value } = event.target;
        values[i][name] = value;
        setFields(values);
    }

    function handleAddInput() {
        const values = [...fields];
        values.push({
            item: '',
            quantity: '',
            value: '',
        });
        setFields(values);
    }

    function handleRemoveInput(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    const classes = useStyles();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const [{ infoDisplayControls }, , { hocDisplayControls }] = useContext(AppContext)

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
        }
        catch (error) {
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            closeModal()
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
    }, [])

    const onFormSubmit = async data => {
        data = {
            ...data,
            items: fields
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
            if (error?.response?.status === 499) removeDepreciatedSST()
        }
    }
    return (
        <div className="co-modal">
            <div onClick={closeModal} className="co-modal__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <div className="co-modal__wrapper">
                <form >
                    {fields.length ? <Typography
                        style={{
                            marginTop: "10vh"
                        }}
                        children="Add Items"
                        variant="h5"
                        classes={{
                            root: classes.form__title__root,
                        }}
                    /> : ""}
                    {fields.map((field, idx) => {
                        return (<div key={`${field} - ${idx}`} className='maindiv'>
                            <TextField
                                name = 'item'
                                variant="outlined"
                                type="text"
                                label="Item"
                                color="primary"
                                value={field.item}
                                onChange={e => handleChangeInput(idx, e)}
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
                            <TextField
                                name = 'quantity'
                                variant="outlined"
                                type="number"
                                label="Quantity"
                                color="primary"
                                value={field.quantity}
                                onChange={e => handleChangeInput(idx, e)}
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
                            <TextField
                                name = 'value'
                                variant="outlined"
                                type="number"
                                label="Value"
                                color="primary"
                                value={field.value}
                                onChange={e => handleChangeInput(idx, e)}
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
                            <div className='btn-group'>
                                <ButtonSquared
                                    content="Add Items"
                                    backgroundColor="black"
                                    fontSize="12px"
                                    fontWeight="600"
                                    lineHeight="16px"
                                    color="#ffffff"
                                    padding="3vw"
                                    margin="3vh auto"
                                    width="fit-content"
                                    onClick={() => handleAddInput()}
                                />
                                <ButtonSquared
                                    content="Remove Item"
                                    backgroundColor="black"
                                    fontSize="12px"
                                    fontWeight="600"
                                    lineHeight="16px"
                                    color="#ffffff"
                                    padding="3vw"
                                    margin="3vh auto"
                                    width="fit-content"
                                    onClick={() => handleRemoveInput(idx)}
                                />
                            </div>
                        </div>

                        )

                    })}
                </form>
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <Typography
                        style={{
                            marginTop: "10vh"
                        }}
                        children="Primary Details"
                        variant="h5"
                        classes={{
                            root: classes.form__title__root,
                        }}
                    />
                    <Controller
                        name="orderType"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="text"
                                label="Order Type"
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
                        name="firstname"
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                type="tel"
                                label="Phone number"
                                color="primary"
                                value={value}
                                autoFocus
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
                        disabled={fields.length ? false : true}
                        type="submit"
                        variant="contained"
                        children="Create Order"
                        size="medium"
                        classes={{
                            root: classes.form__button__root,
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default AdminCreateOrder