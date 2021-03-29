/**
 * Calculate size for all given slides, works if size of slides should be specified
 * @param {object} context - context with info about current configuration of slider
 */
const _ifEnoughToRotate = (context) => {
    // Check if this mode should have specified number of slides to rotate, or should it be calculated by slides with
    switch (context.slidesWidth) {
        case "equal":
            // If slides should be equal, check if number of slides is bigger than number of slides that should be visible
            return context.children.length > context.visibleSlides

        case "auto":
            // If slides can have their own width, calculate if width of all slides is greater than with of wrapper
            if (context.allSlidesWidth.length) {
                // Sum width of all slides
                let widthOfAllSlides = 0;

                context.allSlidesWidth.forEach(slideWidth => {
                    slideWidth ? widthOfAllSlides += slideWidth : '';
                })

                return widthOfAllSlides > context.tracksContainerWidth
            }

            break;

        default:
            console.error("jedliSlider error! Cannot find given slidesWidth. Available options: 'auto', 'equal'")
            return false;

    }
}

export default _ifEnoughToRotate;