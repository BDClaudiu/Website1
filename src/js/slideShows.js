 
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"];
var slideIndexOne = 0;
var slideIndexUnique = 1;

//Run single SlideShow
showSlidesUnique(slideIndexUnique);

//Run single SlideShow with timer and without controls
showSlidesOne();

//Run multiple SlideShows
showSlides(1, 0);
showSlides(1, 1);


//One SlideShow controls
function plusSlidesUnique(n) {
  showSlidesUnique(slideIndexUnique += n);
}

//Multiple SlideShows controls 
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

// Multiple SlideShows, to add additional ones, add to the array variable slideID 
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

//One slideShow with timer
function showSlidesOne() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndexOne++;
    if (slideIndex > slides.length) {slideIndexOne = 1}    
    slides[slideIndexOne-1].style.display = "block";      
    setTimeout(showSlidesOne, 2000); // Change image every 2 seconds
}

//One slideShow 
function showSlidesUnique(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesUnique");  
  if (n > slides.length) {slideIndexUnique = 1}    
  if (n < 1) {slideIndexUnique = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexUnique-1].style.display = "block";  
  
}
