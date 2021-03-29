import React, { useContext, useEffect } from 'react';
import JedliContinuous from "../modules/ModuleModeContinuous/ModuleModeContinuous";

import { ContextSliderConfig } from "../context/ContextSliderConfig"

const CoreModeHandler = (props) => {
    const { state, update } = useContext(ContextSliderConfig);

    // Push props of slider to context
    useEffect(() => {
        update(props.sliderConfig);
    }, [props])

    // Init right mode
    // By default and for now the only mode is continuous
    switch ("continuous") {
        case "continuous":
            // Init mode continuous with given context
            return (
                <JedliContinuous>{props.children}</JedliContinuous>
            )

            break;

        default:
            console.error("mode not found")
            break;
    }
}

export default CoreModeHandler;