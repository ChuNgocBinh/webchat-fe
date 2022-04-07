import React, { createContext, useReducer } from "react";
import { initialState, reducer } from './reducer/reducer';

export const Store = createContext() 

const ContextProvider = ({children}) => {

    const value = useReducer(reducer, initialState)

    return(
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )
}

export default ContextProvider;