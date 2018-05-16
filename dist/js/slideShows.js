 
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"];
var slideIndexOne = 0;

showSlides2();
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].className += " active";
}

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    if (slideIndexOne > slides.length) {slideIndexOne = 0}    
    slideIndexOne++;
    slides[slideIndexOne-1].style.display = "block";  
   
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}