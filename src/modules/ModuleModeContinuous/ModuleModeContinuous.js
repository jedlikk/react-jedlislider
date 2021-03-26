import React, { useEffect, useState, useRef, useContext } from 'react';
import { ContextSliderConfig } from "../../context/ContextSliderConfig"
import styles from './ModeContinuous.module.css'


const JedliContinuous = () => {
    const { state, update } = useContext(ContextSliderConfig);

    const tracksContainer = useRef(false);

    // Push props of slider to context
    useEffect(() => {
        if (Object.keys(state).length && tracksContainer.current) {
            // Get size of tracks container
            const tracksContainerWidth = tracksContainer.current.offsetWidth;

            if (state.tracksContainer !== tracksContainerWidth) {
                // Push size of tracks container to context
                let newState = state;
                newState.tracksContainerWidth = tracksContainerWidth;

                update(newState)
            }
        }
    }, [tracksContainer.current])

    return (
        <div ref={tracksContainer} className='jedli-track-container' style={state.overflow === "hidden" ? { overflow: 'hidden' } : {}}>
            <div className='jedli-track'>{state.children}</div>
        </div>
    )
}

export default JedliContinuous;