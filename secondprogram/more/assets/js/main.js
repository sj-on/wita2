const navbar = document.getElementById("navbar");

window.onscroll = function () {
  window.pageYOffset > 100 ? navbar.classList.remove("top") : navbar.classList.add("top");
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Store hash
    const hash = this.hash;

    if ($(hash).length) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  }
});
