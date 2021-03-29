
# react-jedlislider

  
  

![](https://img.shields.io/badge/version-1.0.0-blue.svg)[![NPM](https://img.shields.io/npm/v/react-jedlislider.svg)](https://www.npmjs.com/package/react-jedlislider)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

  

### What is jedliSlider?

  

jedliSlider is interactive, continuous carousel with multiple options to use in your React app.

react-jedlislider is react version of [jedliSlider](https://www.npmjs.com/package/jedlislider) with only continuous mode (because this mode is the one fully finished, and used the most)

  

### DEMO page

[DEMO](http://jedlikk.github.io/react-jedlislider/)

  
  

### Compatibility

  

Slider is built on css flexbox. So will be compatible with every browser that supports flexbox.

  

### Why jedliSlider?

  

Because it’s easy to use, modern and will have all options that you want. Some popular carousels still use floats and a lot of unnecessary scripts/styles. My intention was to create one slider, that will contain all things i missed in other carousels. With as low code and css as possible. So you don't need to override some default styles.

  

## What's new?

### v. 1.0.0

- React version of jedliSlider

  

## Install

  

```bash

npm install --save react-jedlislider

```

  

## Basic Usage

  

```jsx

import React,  { Component }  from  'react'

  

import JedliSlider,  { JedliSlide }  from  'react-jedlislider'

import  'react-jedlislider/dist/index.css'

  

class  Example  extends  Component  {

  render()  {

    return  (

    <JedliSlider>

      <JedliSlide>Your slide 1</JedliSlide>

      <JedliSlide>Your slide 2</JedliSlide>

      <JedliSlide>Your slide 3</JedliSlide>

    </JedliSlider>

    )

  }
}

```

## Usage with custom settings

```jsx

import React,  { Component }  from  'react'

  

import JedliSlider,  { JedliSlide }  from  'react-jedlislider'

import  'react-jedlislider/dist/index.css'

  

class  Example  extends  Component  {

  render()  {

    return  (

    <JedliSlider speed={125} slidesWidth='auto'>

      <JedliSlide>Your slide 1</JedliSlide>

      <JedliSlide>Your slide 2</JedliSlide>

      <JedliSlide>Your slide 3</JedliSlide>

    </JedliSlider>

    )

  }
}

```

  

## List of options

  

More info on [DEMO page](http://jedlikk.github.io/react-jedlislider/)

  


|  Option: |  Default: | Available options:  | Description:  |
|---|---|---|---|
| tag  | string: 'div'  | string: all HTML tags  | Html tag for slider wrapper  |
| slidesWidth  | string: 'equal'  | string: 'equal'/'auto'  | determinate if all slides should be same size, specified by slider; or width of every slides can be different, specifed from css/content  |
|  speed | int: 100  | int > 0 |  Transition duration of one single change\. <br> Speed is calculated: given speed * width of all slides * 1000 |
| visibleSlides  | int: 1 | int > 0  | This option works when "slidesWidth" is set to "equal"\. <br>Determinate how many slides will be visible. Width of every slide will be calculated to match given value. <br><br>* For example if visibleSlides is set to 2, every slide's width gonna be 50% |
| overflow  | string: 'hidden' | string: 'hidden'/'visible'  | Define if slider should have overflow hidden or not   |
|  pauseOnHover | bool: false | bool: false/true  | Determinate if carousel should stop animation on hover, or for accessibility reasons \- on focus on any element inside slider  |
| direction  | string: 'ltr' | string: 'ltr'/'rtl'  | Determinate if carousel should rotate from left to right, or right to left |


  

## License

  

MIT © [jedlikk](https://github.com/jedlikk)