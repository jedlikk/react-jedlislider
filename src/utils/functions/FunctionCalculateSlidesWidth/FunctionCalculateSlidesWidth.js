import React from 'react';
/**
 * Calculate size for all given slides, works if size of slides should be specified
 * @param {int} visibleSlides - number of visible slides
 * @param {int} tracksContainerWidth - width of container with all tracks
 * @return {int} width of slide to add
 */
const _calculateSlidesWidth = (visibleSlides, tracksContainerWidth) => {
    // Calculate size where size is width of tracksContainer / number of visible slides + px
    const sizePerSlide = tracksContainerWidth / visibleSlides;

    console.log(visibleSlides);
    console.log(tracksContainerWidth);

    console.log(sizePerSlide);

    return sizePerSlide;
}

export default _calculateSlidesWidth;