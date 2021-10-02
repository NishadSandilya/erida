//This is the user component (Dynamic react)

import { useContext, useEffect, useState } from "react"
import { AppContext } from "./Data"
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonRound from "./ButtonRound"
import userLoggedInAsset1 from "../cdn/images/userLoggedInAsset1.png"
import axios from 'axios'
import UserLI from "./UserLI"
import UserLO from "./UserLO"
import { pingServer } from "./pingServer"
//Primary functional component here
const User = () => {

    const [{infoDisplayControls} ,{ loginModalControls }, {hocDisplayControls}] = useContext(AppContext)

    const [userLoginStatus, setUserLoginStatus] = useState(false)

    useEffect(async () => {
        hocDisplayControls[1](() => {
            return {
                visibility: true
            }
        })
        const serverResponse = await pingServer()
        hocDisplayControls[1](() => {
            return {
                visibility: false
            }
        })
        setUserLoginStatus(() => serverResponse)
    }, [])

    return (
        <div className="user">
            {userLoginStatus ? <UserLI/> : <UserLO/>}
        </div>
    )
}

//Default export
export default User