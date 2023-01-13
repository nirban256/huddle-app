import React, { createContext, ReactNode, useContext, useState } from "react"
import { getHuddleClient, HuddleClientProvider } from "@huddle01/huddle01-client";

export interface AppContextInterface {
    drawerActive: boolean
    setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>,
    huddleClient: any
}
export const AppStateContext = createContext<AppContextInterface | null>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [drawerActive, setDrawerActive] = useState(false)
    // const [huddleClient, setHuddleClient] = useState<any>()
    const huddleClient = getHuddleClient('d3f8e708280956fc3e4790bd3adc9f68340b9a3ee0c5227f028b5c5ae81ff255')

    return (
        <AppStateContext.Provider
            value={{
                drawerActive,
                setDrawerActive,
                huddleClient
            }}
        >
            {/* @ts-ignore */}
            <HuddleClientProvider client={huddleClient} >
                {children}
            </HuddleClientProvider>
        </AppStateContext.Provider>
    )
}

export default AppStateContext
export const useAppStateContext = () => useContext(AppStateContext)
