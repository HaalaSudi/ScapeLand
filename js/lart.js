
    // Width and Height of the side nav bar when opened
function openNav() {
  document.getElementById("sideBar").style.width = "250px";
  document.getElementById("opnButton").style.marginLeft = "250px";
}

// Width and Height of the side nav bar when closed (should be set to 0)
function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("opnButton").style.marginLeft = "0";
}
 
    
//jQuery for the articles side bar    

$(document).ready(function(){
$(window).scroll(function () {   
   
 if($(window).scrollTop() > 200) {
    $('#sideArticle').css('position','fixed');
    $('#sideArticle').css('top','0'); 
 }

 else if ($(window).scrollTop() <= 200) {
    $('#sideArticle').css('position','');
    $('#sideArticle').css('top','');
 }  
    if ($('#sideArticle').offset().top + $("#sideArticle").height() > $("#image").offset().top) {
        $('#sideArticle').css('top',-($("#sideArticle").offset().top + $("#sideArticle").height() - $("#image").offset().top));
    }
});
});
    
//setTimeout(function(){alert("Hello")},4000);
    
 // Get the elements with class="column"
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
