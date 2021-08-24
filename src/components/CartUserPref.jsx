//Imports

import { makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles({
    textField_label: {
        fontSize: "14px",
        lineHeight: "18px",
    },
    textField: {
        "& input::placeholder": {
            fontSize: "14px",
            lineHeight: "18px"
        }
    },
    textField_text: {
        fontSize: "14px",
        lineHeight: "18px",
    }
})

const CartUserPref = ({fields, btnControl}) => {
    const classes = useStyles()
    return (
        <div className = "App__productCardWrapper__preferenceBox">
            <p className = "App__productCardWrapper__heading">We need this information before proceeding</p>
            <form className = "App__productCardWrapper__preferenceBox__form">
                {fields.map(element => {
                    return (<TextField 
                        type="text"
                        label={element.label}
                        placeholder={element.placeholder}
                        color="primary"
                        size="small"
                        margin="none"
                        InputLabelProps={{
                            classes:{
                                root: classes.textField_label
                            }
                        }}
                        classes={{
                            root: classes.textField
                        }}
                        InputProps={{
                            classes: {
                                root: classes.textField_text
                            }
                        }}
                    />)
                })}
            </form>
            <p className = "App__productCardWrapper__preferenceBox__additionalInfo">Don't know <br/> what this is?</p>
            <div className = "App__productCardWrapper__preferenceBox__vector">
                <img src="https://b80d-2405-201-a803-6043-fd28-2276-c2a3-6b.ngrok.io/cdn/vector.png" alt="Illustration" width = "300px" crossOrigin = "https://nishadsandilya.github.io"/>
            </div>
            <div className = "App__productCardWrapper__preferenceBox__ctaBox">
                <div onClick = {btnControl} className = "App__productCardWrapper__preferenceBox__ctaBox__backImg">
                    <img src="https://b80d-2405-201-a803-6043-fd28-2276-c2a3-6b.ngrok.io/cdn/back.png" alt="Back Arrow" crossOrigin = "https://nishadsandilya.github.io"/>
                </div>
                <button className = "App__productCardWrapper__preferenceBox__ctaBox__cta">FINALIZE</button>
            </div>
        </div>
    )
}

//Default exports
export default CartUserPref