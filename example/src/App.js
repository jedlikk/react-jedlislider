import React from 'react'

import JedliSlider, { JedliSlide } from 'react-jedlislider'
import 'react-jedlislider/dist/index.css'

const App = () => {
  return (
    <div>
      <br></br>
      <h3>slidesWidth="auto"</h3>
      <br></br>
      <JedliSlider slidesWidth="auto">
        <JedliSlide className='example-slide example-slide-auto'>
          <span>1</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>2</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>3</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>4</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>5</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>6</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>7</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>8</span>
        </JedliSlide>
      </JedliSlider>

      <br /><br /><br /><br /><br /><br />

      <h3>slidesWidth="equal"<br></br> visibleSlides={3}</h3>
      <br></br>
      <JedliSlider visibleSlides={3}>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>1</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>2</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>3</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>4</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>5</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>6</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>7</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>8</span>
        </JedliSlide>
      </JedliSlider>

      <br /><br /><br /><br /><br /><br />

      <h3>slidesWidth="equal"<br></br> visibleSlides={4} <br></br> direction="rtl"</h3>
      <br></br>
      <JedliSlider visibleSlides={4} direction="rtl">
        <JedliSlide className='example-slide example-slide-auto'>
          <span>1</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>2</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>3</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>4</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>5</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>6</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>7</span>
        </JedliSlide>
        <JedliSlide className='example-slide example-slide-auto'>
          <span>8</span>
        </JedliSlide>
      </JedliSlider>
    </div>

  )
}

export default App
