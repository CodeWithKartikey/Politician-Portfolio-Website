/* 
  Change Color When We Scroll Down The Header Part
*/

// Select the header element
const header = document.querySelector('.header');

// Function to apply scroll effect on the header
const scrollEffect = () => {
  // Check if the scroll position is greater than 200 pixels
  if (window.scrollY > 200) {
    // Add the 'scrolled' class to the header
    header.classList.add('scrolled');
  } else {
    // Remove the 'scrolled' class from the header
    header.classList.remove('scrolled');
  }
};

/* 
  Debounce function to limit the rate of execution of the scroll event listener
  Parameters:
    - func: The function to be debounced
    - delay: The delay (in milliseconds) before the function execution
  Returns:
    - A function that wraps the original function and enforces the debounce behavior
*/

function debounce(functionName, delay) {
  let timer;

  // Return a function that will be invoked when the debounced function is called
  return function () {
    const context = this; // Preserve the context of the function
    const args = arguments; // Capture the arguments passed to the function

    // Clear any existing timer to prevent immediate execution of the function
    clearTimeout(timer);

    // Set a new timer to delay the execution of the function
    timer = setTimeout(() => {
      // Invoke the original function with the captured context and arguments
      functionName.apply(context, args);
    }, delay);
  };
}

// Add event listener with debounced scroll handler
window.addEventListener("scroll", debounce(scrollEffect, 100));

/* 
  Change Color When We Scroll Down The Header Part 
*/


/* 
  Adding Back To Top JavaScript Code With Smooth Scrolling When Page Reload or Refresh 
*/

// Function to handle saving scroll position before the page is unloaded
const beforeUnloadEvent = () => {
  sessionStorage.setItem("scrollPosition", window.scrollY);
};

// Function to scroll to the saved position when the DOM content is loaded
const domContentLoadedEvent = () => {
  let scrollPosition = sessionStorage.getItem("scrollPosition");
  if(scrollPosition !== null) {
    window.scrollTo({
      top: scrollPosition,
      behavior: "instant"
    });
  }
};

// Function to scroll to the top of the page after the page is fully loaded
const afterLoadEvent = () => {
  if('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    window.scrollTo(0, 0);
  }
  sessionStorage.removeItem("scrollPosition");
};

// Event listener for beforeunload event to save scroll position
window.addEventListener('beforeunload', beforeUnloadEvent);

// Event listener for DOMContentLoaded event to scroll to saved position
window.addEventListener('DOMContentLoaded', domContentLoadedEvent);

// Event listener for load event to scroll to top and clear saved scroll position
window.addEventListener('load', afterLoadEvent);

/* 
  Adding Back To Top JavaScript Code With Smooth Scrolling When Page Reload or Refresh 
*/

/* 
  Adding Back To Top Button JavaScript Code With Smooth Scrolling 
*/

const backToTopButton = document.getElementById("back-to-top-btn");

// Function to toggle the display of the back-to-top button based on scroll position
const toggleBackToTopButton = () => {
  backToTopButton.style.display = (window.scrollY > 300) ? 'block' : 'none';
};

// Function to scroll smoothly to the top of the page
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });
};

// Event listener for scroll event to toggle back-to-top button visibility
window.addEventListener('scroll', toggleBackToTopButton);

// Event listener for click event on back-to-top button to scroll to top
backToTopButton.addEventListener('click', scrollToTop);

/* 
  Adding Back To Top Button JavaScript Code With Smooth Scrolling 
*/

/* 
  Adding Mobile Menu 
*/

// Selecting the mobile navbar button
const mobileNavbarBtn = document.querySelector(".mobile-navbar-btn");

// Selecting the navbar header
const navbarHeader = document.querySelector(".header");

// Function to toggle the mobile navbar menu visibility
const toggleNavbar = () => {
  // Toggling the 'active' class on the navbar header
  navbarHeader.classList.toggle("active");
};

// Adding event listener to the mobile navbar button for click event
mobileNavbarBtn.addEventListener("click", toggleNavbar);

/* 
  Adding Mobile Menu 
*/