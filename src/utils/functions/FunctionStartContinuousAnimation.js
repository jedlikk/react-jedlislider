/**
 * Calculate size for all given slides, works if size of slides should be specified
 * @param {object} context - context with info about current configuration of slider
 * @param {ref} track - track element to animate slides
 */
const _startContinuousAnimation = (context, track) => {
    // Check if there should be pause on hover
    if (context.pauseOnHover) {
        track.classList.add("jedli-hover-pause");
    }

    // Set direction of animation
    switch (context.direction) {
        case "ltr":
            track.style.animationDirection = "reverse";

            break;

        case "rtl":
            track.style.animationDirection = "normal";

            break;
    }

    // Add styles for animation purposes to track
    // If mode == continuous, options.speed is speed for every px of all slides width

    let widthOfAllSlides = 0;

    context.allSlidesWidth.forEach(slideWidth => {
        slideWidth ? widthOfAllSlides += slideWidth : '';
    })

    const speed = widthOfAllSlides / context.speed * 1000;

    const continuousSpeed = speed / 1000 + "s";
    track.style.animationDuration = continuousSpeed;
    track.style.animationTimingFunction = context.easing;

}

export default _startContinuousAnimation;