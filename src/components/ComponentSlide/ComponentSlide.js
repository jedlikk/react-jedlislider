import React, { useEffect, useRef, useState, useContext } from 'react';
import styles from './ComponentSlide.module.css'
import { ContextSliderConfig } from "../../context/ContextSliderConfig"

// Function to set slide with depends of specified number of visible slides
import _calculateSlidesWidth from "../../utils/functions/FunctionCalculateSlidesWidth/FunctionCalculateSlidesWidth";

const JedliSlide = (
    {
        props,
        className,
        ...rest
    }
) => {
    const { state, update } = useContext(ContextSliderConfig);

    // Container for slide
    const slideContainer = useRef(false)

    const [slideWidth, setSlideWidth] = useState(false);
    const [allStyles, setAllStyles] = useState(rest.style);

    // Remove style from "rest" props
    delete rest.style

    useEffect(() => {
        if (slideContainer.current) {
            // If ref exists

            // Check if size of slide should be calculated
            if (state.slidesWidth === "equal") {
                // If true, do it
                setAllStyles({ ...allStyles, width: _calculateSlidesWidth(state.visibleSlides, state.tracksContainerWidth) + "px" })
            }

        }
    }, [slideContainer, state])

    return (
        <div ref={slideContainer} className={`jedli-slider ${className ? className : ''}`} {...rest} style={allStyles}>{rest.children}</div>
    )
}

export default JedliSlide;