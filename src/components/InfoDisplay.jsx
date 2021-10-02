//This component will be used to display an error to the user
import { useContext } from 'react'
import Text from './Text'

//Functional component here
const InfoDisplay = ( {message, color} ) => {
    return (
        <div className="errorDisplay" style = {{
            backgroundColor: color
        }}>
            <Text
                content= {message}
                fontSize="18px"
                margin="0 0 0 0"
                lineHeight="28px"
                color="#ffffff"
                textAlign="center"
                fontWeight="500"
            />
        </div>
    )
}

//Export default
export default InfoDisplay