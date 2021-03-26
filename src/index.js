import React, { useState } from 'react'
import styles from './styles.module.css'

import JedliContinuous from "./modules/ModuleModeContinuous/ModuleModeContinuous";
import JedliSlide from "./components/ComponentSlide/ComponentSlide";
import CoreModeHandler from "./core/CoreModeHandler";

import { SliderConfigProvider } from "./context/ContextSliderConfig"

const JedliSlider = (props) => {
  const {
    className,
    tag,
    children,
    mode,
    slidesWidth,
    speed,
    visibleSlides,
    overflow,
    pauseOnHover,
    direction,
    responsive,
    ...rest
  } = props;


  return (
    <SliderConfigProvider>
      <div className={`jedli-slider ${overflow === "hidden" ? 'jedli-overflow-hidden' : ''} ${className ? className : ''}`} {...rest}>
        <CoreModeHandler sliderConfig={props}>{props.children}</CoreModeHandler>
      </div>
    </SliderConfigProvider>
  )
}

JedliSlider.defaultProps = {
  tag: 'div',
  mode: "continuous",
  slidesWidth: "equal",
  speed: 400,
  visibleSlides: 1,
  overflow: "hidden",
  pauseOnHover: false,
  direction: "ltr",
  responsive: {},
}

export { JedliContinuous, JedliSlide };
export default JedliSlider;
