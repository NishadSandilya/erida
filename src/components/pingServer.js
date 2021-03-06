import axios from 'axios'
import { reloadWindow } from './windowReload'

export const removeDepreciatedSST = async () => {
    await axios({
        method: "get",
        url: "https://erida.herokuapp.com/v1/users/me/log-out",
        withCredentials: true
    })
    reloadWindow()
}

export const pingServer = async () => {
    try {
        await axios({
            method: "get",
            url: "https://erida.herokuapp.com/v1",
            withCredentials: true
        })
        return true
    }
    catch (error) {
        if(error?.response?.status === 499) removeDepreciatedSST()
        return false
    }
}