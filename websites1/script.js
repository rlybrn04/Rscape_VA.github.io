let currentSlideIndex = 0;
const imagesPerRow = 2;
const imageWrapper = document.querySelector('.image-wrapper');
const totalImages = imageWrapper.children.length;

// Update the slider's position based on the current slide index
function updateSliderPosition() {
    const translateX = -(currentSlideIndex * 100); // Shift left by 100% per index
    imageWrapper.style.transform = `translateX(${translateX}%)`;
}

// Slide left function
function slideLeft() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = Math.ceil(totalImages / imagesPerRow) - 1; // Loop back to the last slide
    }
    updateSliderPosition();
}

// Slide right function
function slideRight() {
    if (currentSlideIndex < Math.ceil(totalImages / imagesPerRow) - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
}
