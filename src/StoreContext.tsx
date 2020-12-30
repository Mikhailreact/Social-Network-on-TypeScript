import React, {useDebugValue} from "react";
import {StoreType} from "./redux/store";
import store from "./redux/redux-store";

// type StoreContextType = {
//     store: StoreType
// }
const StoreContext = React.createContext({} as any);

export type ProviderType = {
    value: StoreType
    children: React.ReactNode
}


export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.value}>
        {props.children}
        </StoreContext.Provider>
}





export default StoreContext;

