import React from 'react'

import JedliSlider, { JedliSlide } from 'react-jedlislider'
import 'react-jedlislider/dist/index.css'

const App = () => {
  return (
    <JedliSlider>
      <JedliSlide style={{ background: "red", height: "150px" }}>
        <span>1</span>
      </JedliSlide>
      <JedliSlide style={{ background: "green", height: "150px" }}>
        <span>2</span>
      </JedliSlide>
      <JedliSlide style={{ background: "blue", height: "150px" }}>
        <span>3</span>
      </JedliSlide>
    </JedliSlider>
  )
}

export default App
