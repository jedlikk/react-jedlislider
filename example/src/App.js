import React from 'react'

import JedliSlider, { JedliSlide } from 'react-jedlislider'
import 'react-jedlislider/dist/index.css'

const App = () => {
  return (
    <JedliSlider>
      <JedliSlide style={{ width: "700px", background: "red", height: "150px" }}>
        <span>1</span>
      </JedliSlide>
      <JedliSlide style={{ width: "350px", background: "green", height: "150px" }}>
        <span>2</span>
      </JedliSlide>
      <JedliSlide style={{ width: "500px", background: "blue", height: "150px" }}>
        <span>3</span>
      </JedliSlide>
      <JedliSlide style={{ width: "900px", background: "black", height: "150px" }}>
        <span>4</span>
      </JedliSlide>

    </JedliSlider>
  )
}

export default App
