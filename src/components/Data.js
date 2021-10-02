//This is the data context for the context API for the entire app

import { createContext, useState } from "react";

//Primary functional component here exported desctructed

//Export context first
export const AppContext = createContext()

//Export the provider now
export const DataProvider = (props) => {
    //Mention all the requried states here

    //Error Display Controller
    const [infoControls, setInfoControls] = useState({
        visibility: false,
        message: "",
        color: ""
    })

    const [loginControls, setLoginControls] = useState({
        loginPromptVisibility: false,
        loginModalVisibility: false
    })

    const [hocLoadercontrols, setHocLoaderControls] = useState({
        visibility: false
    })
    //Return the JSX wrapper (Provider basically)
    return (
        <AppContext.Provider value={[
            {
                infoDisplayControls: [infoControls, setInfoControls]
            },
            {
                loginDisplayControls: [loginControls, setLoginControls]
            },
            {
                hocDisplayControls:[hocLoadercontrols, setHocLoaderControls]
            }
        ]}>
            {props.children}
        </AppContext.Provider>
    )
}
