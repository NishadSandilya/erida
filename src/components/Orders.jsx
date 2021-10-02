import OrdersLI from "./OrdersLI"
import OrdersLO from "./OrdersLO"
import { pingServer } from "./pingServer"
import { useState, useEffect, useContext } from "react"
import { AppContext } from "./Data"

const Orders = () => {
    const [userLoginStatus, setUserLoginStatus] = useState(false)

    const [, , {hocDisplayControls}] = useContext(AppContext)

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
        <div className="orders">
            {userLoginStatus ? <OrdersLI /> : <OrdersLO />}
        </div>
    )
}

export default Orders