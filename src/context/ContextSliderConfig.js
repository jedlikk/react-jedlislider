import React, { createContext, useReducer } from "react";

export const ContextSliderConfig = createContext();

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {}

export function SliderConfigProvider(props) {
    const [state, update] = useReducer(reducer, initialState)

    return (
        <ContextSliderConfig.Provider value={{ state, update }}>
            {props.children}
        </ContextSliderConfig.Provider>
    )
};