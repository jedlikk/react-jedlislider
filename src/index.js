import React, { useState } from 'react'
import "./styles.scss"

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
    allSlidesWidth,
    easing,
    ...rest
  } = props;

  return (
    <SliderConfigProvider>
      <div id="test" className={`jedli-slider ${overflow === "hidden" ? 'jedli-overflow-hidden' : ''} ${className ? className : ''} ${mode === 'continuous' ? 'jedli-mode-continuous' : ''}`} {...rest}>
        <CoreModeHandler sliderConfig={props}>{props.children}</CoreModeHandler>
      </div>
    </SliderConfigProvider>
  )
}

JedliSlider.defaultProps = {
  tag: 'div',
  mode: "continuous",
  slidesWidth: "equal",
  speed: 20,
  visibleSlides: 1,
  overflow: "hidden",
  pauseOnHover: false,
  direction: "ltr",
  responsive: {},
  allSlidesWidth: [],
  easing: "linear"
}

export { JedliContinuous, JedliSlide };
export default JedliSlider;
