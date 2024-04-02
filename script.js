document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function(navLink) {
        if (navLink.href === currentLocation) {
            navLink.classList.add("active");
        }
    });
});
// scroll.js

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  // Show or hide the scroll button based on scroll position
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }
  