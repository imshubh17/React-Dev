import React, { createContext, useReducer,useContext } from "react";

//this is data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//this will use to take data
export const useStateValue = () => useContext(StateContext);