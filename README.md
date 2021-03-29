# react-jedlislider

> React interactive carousel with multiple options and modes to use on your app


![](https://img.shields.io/badge/version-0.12.19-blue.svg)[![NPM](https://img.shields.io/npm/v/react-jedlislider.svg)](https://www.npmjs.com/package/react-jedlislider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### What is jedliSlider?

jedliSlider is interactive, continuous carousel with multiple options to use in your React app.
react-jedlislider is react version of [jedliSlider](https://www.npmjs.com/package/jedlislider) with only continuous mode (because this mode is the one fully finished, and used the most)

### DEMO page
[DEMO](http://jedlikk.github.io/react-jedliSlider/)


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

## Usage

```jsx
import React, { Component } from 'react'

import JedliSlider, { JedliSlide } from 'react-jedlislider'
import 'react-jedlislider/dist/index.css'

class Example extends Component {
  render() {
     return (
    <JedliSlider>
      <JedliSlide>Your slide 1</JedliSlide>
      <JedliSlide>Your slide 2</JedliSlide>
      <JedliSlide>Your slide 3</JedliSlide>
    </JedliSlider>
  )
  }
}
```

## List of options

More info on [DEMO page](http://jedlikk.github.io/react-jedliSlider/)

| Option:           | Default: | Description:                                                                                                                                                                                                                                                                                                                                                               |
|-------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|                                                                                                                                                                                                                        |
| slidesWidth       | equal    | determinate if all slides should be same size, specified by slider; or width of every slides can be different, specifed from css                                                                                                                                                                                                                                           |
| visibleSlides     | 1        | This option works when "slidesWidth" is set to "equal"\. Determinate how much slides will be visible                                                                                                                                                                                                                                                                       |


| speed             | 400      | Transition duration of one single change\. In "continuous" mode speed is amount of ms per every single px of screen width                                                                                                                                                                                                                                                           |
| easing            | linear   | Define easing of slider move animation                                                                                                                                                                                                                                                                                                                                     |
| overflow          | hidden   | Define if slider should have overflow hidden or not                                                                                                                                                                                                                                                                                                                        |
| pauseOnHover      | false    | This option works in "continuous" mode\. Determinate if carousel should stop animation on hover, or for accessibility reasons \- on focus at any element inside slider                                                                                                                                                                                                     |
| direction         | ltr     | This option works in "continuous" mode\. determinate if carousel should rotate from left to right, or right to left                                                                                                                                                                                                                                                        |

## License

MIT © [jedlikk](https://github.com/jedlikk)
