import React from 'react'

import JedliSlider, { JedliSlide } from 'react-jedlislider'
import 'react-jedlislider/dist/index.css'

const App = () => {

  const slides = [1, 2, 3, 4, 5, 6, 7, 8]
  const image = "https://images.theconversation.com/files/350851/original/file-20200803-22-dfm95n.jpg?ixlib=rb-1.1.0&rect=0%2C750%2C5760%2C2880&q=45&auto=format&w=1356&h=668&fit=crop"
  return (
    <div>
      <br></br>
      <h3>slidesWidth="auto"</h3>
      <br></br>
      <JedliSlider slidesWidth="auto">
        {slides.map((slide, index) => (
          <JedliSlide key={index} className='example-slide example-slide-auto'>
            <figure>
              <img src="https://images.theconversation.com/files/350851/original/file-20200803-22-dfm95n.jpg?ixlib=rb-1.1.0&rect=0%2C750%2C5760%2C2880&q=45&auto=format&w=1356&h=668&fit=crop" alt="" />
            </figure>
          </JedliSlide>
        ))}
      </JedliSlider>

      <br /><br /><br /><br /><br /><br />

      <h3>slidesWidth="equal"<br></br> visibleSlides={3}</h3>
      <br></br>
      <JedliSlider visibleSlides={3}>
        {slides.map((slide, index) => (
          <JedliSlide key={index} className='example-slide example-slide-auto'>
            <figure>
              <img src="https://images.theconversation.com/files/350851/original/file-20200803-22-dfm95n.jpg?ixlib=rb-1.1.0&rect=0%2C750%2C5760%2C2880&q=45&auto=format&w=1356&h=668&fit=crop" alt="" />
            </figure>
          </JedliSlide>
        ))}
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
