import React, { createContext, ReactNode, useContext, useState } from "react"

export interface AppContextInterface {
    drawerActive: boolean
    setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppStateContext = createContext<AppContextInterface | null>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [drawerActive, setDrawerActive] = useState(false)

    return (
        <AppStateContext.Provider
            value={{
                drawerActive,
                setDrawerActive,
            }}
        >
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateContext
export const useAppStateContext = () => useContext(AppStateContext)
