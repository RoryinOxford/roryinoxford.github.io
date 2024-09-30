// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

document.querySelectorAll('.toggleButton').forEach(button => {
  button.addEventListener('click', function() {
      // Get the ID of the target text from the data attribute
      var targetId = this.getAttribute('data-target');
      var textElement = document.getElementById(targetId);

      // Toggle the display of the target text element
      if (textElement.style.display === "none" || textElement.style.display === "") {
          textElement.style.display = "block";
          this.textContent = "Read less"; // Change button text to "Read Less"
      } else {
          textElement.style.display = "none";
          this.textContent = "Click to read more"; // Change button text back to "Read More"
      }
  });
});
