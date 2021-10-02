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
import ButtonRound from "./ButtonRound";
import { useHistory } from "react-router";
import { pingServer } from "./pingServer";
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
        marginBottom: "50vh",
        marginTop: "3vh",
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
    email: yup.string().email("Please enter a valid email address").required("Please mention your email")
})
const HAModal = ({ closeModal }) => {

    const history = useHistory()

    const [{ infoDisplayControls } , , {hocDisplayControls}] = useContext(AppContext)

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

    const [coordinates, setCoordinates] = useState("")

    const [distAchievable, setDistAchievable] = useState("")

    const [dist, setDist] = useState("")
    //Get distance function
    const getDistance = (lat1, lon1, lat2, lon2) => {
        return new Promise((resolve, reject) => {
            const radlat1 = Math.PI * lat1 / 180
            const radlat2 = Math.PI * lat2 / 180
            const radlon1 = Math.PI * lon1 / 180
            const radlon2 = Math.PI * lon2 / 180
            const theta = lon1 - lon2
            const radtheta = Math.PI * theta / 180
            let distHere = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            distHere = Math.acos(distHere)
            distHere = distHere * 180 / Math.PI
            distHere = distHere * 60 * 1.1515
            const finalDistance = distHere * 1.609344
            if (finalDistance) resolve(finalDistance)
            else reject("Error Calculating distance. Please try again")

        })
    }

    const getLocation = async () => {
        //Throw error if location services not supported by the user's browser
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                try {
                    const resultDist = await getDistance(26.357430025018502, 92.69125846867405, pos.coords.latitude, pos.coords.longitude)
                    setDist(() => resultDist)
                    setCoordinates(() => [pos.coords.longitude, pos.coords.latitude])
                    // console.log(resultDist)
                    if (resultDist > 10) {
                        setDistAchievable(() => false)
                        infoDisplayControls[1](() => {
                            return {
                                visibility: true,
                                message: "Sorry! our service is not available in your area yet",
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
                    else {
                        setDistAchievable(() => true)
                        infoDisplayControls[1](() => {
                            return {
                                visibility: true,
                                message: "Location accessed, service available",
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
                }
                catch (error) {
                    infoDisplayControls[1](() => {
                        return {
                            visibility: true,
                            message: { error },
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

            }, () => {
                infoDisplayControls[1](() => {
                    return {
                        visibility: true,
                        message: "Did you click Deny on the location prompt previously? Please reset site's location access in your browser",
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
            })
        }
        else {
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: "Location not supported by browser. Please try with a different browser",
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

            if (error?.response?.status === 499) removeDepreciatedSST()

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
        data = {
            ...data,
            itemSKU: `${dist <= 5 ? "ERIOSSERFEE5" : "ERIOSSERFEE10"}`,
            orderType: "Onsite Service",
            location: coordinates
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
                url: "http://localhost:8000/v1/orders/new-order",
                data,
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            // setDataHere(previous => {
            //     return {
            //         ...previous,
            //         firstname: "",
            //         lastname: "",
            //         phone: ""
            //     }
            // })
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
        <div className="ha-modal">
            <div onClick={closeModal} className="ha-modal__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <div className="ha-modal__wrapper">
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
                        children="Service Address"
                        variant="h5"
                        classes={{
                            root: classes.form__title__root,
                        }}
                    />
                    <Text
                        content="Your Billing Address will be the same as the Service Address. Services are available only within Nagaon, Assam"
                        fontSize="12px"
                        width="70vw"
                        margin="1vh 0 3vh 0"
                        lineHeight="22px"
                        color="#707070"
                        textAlign="left"
                        fontWeight="500"
                    />
                    <ButtonRound
                        onClick={getLocation}
                        content="Check Service Availability"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        width="auto"
                        height="auto"
                        padding="10px 15px"
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
                        disabled={distAchievable ? false : true}
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

export default HAModal