
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 70, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

window.addEventListener('scroll', function() {
  // Get the navbar element
  const navbar = document.querySelector('.navbar');

  // Get the scroll position
  const scrollY = window.scrollY;

  // If the scroll position is greater than 100 pixels, set the background color of the navbar to red
  if (scrollY > 300) {
    navbar.style.backgroundColor = 'white';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

