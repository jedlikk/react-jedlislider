import React, { useEffect, useRef, useState, useContext } from 'react';
import styles from './ComponentSlide.module.css'
import { ContextSliderConfig } from "../../context/ContextSliderConfig"

// Function to set slide with depends of specified number of visible slides
import _calculateSlidesWidth from "../../utils/functions/FunctionCalculateSlidesWidth";

// Function to calculate if slider should rotate with current slides size
import _ifEnoughToRotate from "../../utils/functions/FunctionIfEnoughToRotate";


const JedliSlide = (
    {
        className,
        startRotate,
        stopRotate,
        isCloned,
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

    /**
     * return width of current slide
     */
    const getWidth = () => {
        return slideWidth;
    }

    useEffect(() => {
        if (slideContainer.current) {
            // If ref exists

            // Save width of slide
            setSlideWidth(slideContainer.current.offsetWidth)

            if (slideWidth) {
                // If slide width is already calculated, save it to context with info about all widths with unique index

                // But ignore cloned slides
                if (!isCloned) {
                    let newAllSlidesWidth = [...state.allSlidesWidth];
                    newAllSlidesWidth[rest.index] = slideWidth;

                    const newState = { ...state, allSlidesWidth: newAllSlidesWidth }

                    if (state.allSlidesWidth[rest.index] !== slideWidth) {
                        update(newState)


                        if (_ifEnoughToRotate(newState)) {
                            // If is enough to rotate, call function on parent to rotate
                            startRotate();
                        }
                        else {
                            stopRotate();
                        }
                    }
                }
            }

            // Save info about width of this slide

            // Check if size of slide should be calculated
            if (state.slidesWidth === "equal") {
                // If true, do it
                setAllStyles({ ...allStyles, width: _calculateSlidesWidth(state.visibleSlides, state.tracksContainerWidth) + "px" })
            }

        }
    }, [slideContainer, state])

    return (
        <div ref={slideContainer} className={`jedli-slider ${isCloned ? 'isCloned' : ''} ${className ? className : ''}`} {...rest} style={allStyles}>{rest.children}</div>
    )
}

export default JedliSlide;