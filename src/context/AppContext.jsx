import { createContext, useContext } from "react";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    
    const value = {}
    
    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)