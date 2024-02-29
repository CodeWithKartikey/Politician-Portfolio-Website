/* 
  Adding Hero Image Slider 
*/

const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const indicators = document.querySelectorAll('.slider-indicator');

let intervalId;
let currentIndex = 0;

/*
  Function to go to a specific slide.
  @param {number} index - The index of the slide to go to.
*/

const goToSlide = (index) => {
  if (index < 0) {
    index = sliderItems.length - 1;
  } else if (index >= sliderItems.length) {
    index = 0;
  }
  
  sliderItems[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  sliderItems[index].classList.add('active');
  indicators[index].classList.add('active');
  currentIndex = index;
};

/*
  Function to start the slider.
*/
const startSlider = () => {
  intervalId = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 6000);
};

/*
  Function to pause the slider.
*/
const pauseSlider = () => {
  clearInterval(intervalId);
};

// Event listeners for previous and next buttons
if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    pauseSlider();
    goToSlide(currentIndex - 1);
    startSlider();
  });

  nextButton.addEventListener("click", () => {
    pauseSlider();
    goToSlide(currentIndex + 1);
    startSlider();
  });
}

// Event listeners for slider indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    pauseSlider();
    goToSlide(index);
    startSlider();
  });
});

// Start the slider on page load
window.addEventListener('load', startSlider);


/* 
  Adding Hero Image Slider 
*/


















