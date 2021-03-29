import React, { useEffect, useState, useRef, useContext } from 'react';
import { ContextSliderConfig } from "../../context/ContextSliderConfig"

import _startContinuousAnimation from "../../utils/functions/FunctionStartContinuousAnimation";


const JedliContinuous = () => {
    const { state, update } = useContext(ContextSliderConfig);

    const tracksContainer = useRef(false);
    const track = useRef(false);

    // State if slider is already rotating
    const [isRotating, setIsRotating] = useState(false);

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


    // Function to start rotation of slider
    const startRotate = () => {
        // Check if is already rotating
        if (isRotating) {
            return false
        }

        // If is not rotating, start it
        setIsRotating(true);

        // Call function to start animation
        _startContinuousAnimation(state, track.current)
    }

    const stopRotate = () => {

        // Check if is already rotating
        if (isRotating) {
            // If is rotating, stop it
            setIsRotating(false);
        }
    }

    return (
        <div ref={tracksContainer} className='jedli-track-container' style={state.overflow === "hidden" ? { overflow: 'hidden' } : {}, track.current ? { height: track.current.offsetHeight + "px" } : {}}>
            <div ref={track} className='jedli-track'>
                {state.children ? state.children.map((children, index) => (
                    <React.Fragment key={index}>
                        {/* Check if slider should rotate. And if so, add all slides twice, but with special attribute that they are cloned to cloned slides */}
                        {React.cloneElement(children, { index: index, startRotate: startRotate, stopRotate: stopRotate })}
                    </React.Fragment>
                )) : ''}
                {/* If rotating is set at true, clone all slides */}
                {state.children && isRotating ? state.children.map((children, index) => (
                    <React.Fragment key={index}>
                        {/* Check if slider should rotate. And if so, add all slides twice, but with special attribute that they are cloned to cloned slides */}
                        {React.cloneElement(children, { index: index, startRotate: startRotate, stopRotate: stopRotate, isCloned: true })}
                    </React.Fragment>
                )) : ''}
            </div>
        </div>
    )
}

export default JedliContinuous;