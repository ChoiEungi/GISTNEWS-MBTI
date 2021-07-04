var slideIndex = 0;
var mbtiData = {"editor": 0, "reporter": 0, "designer": 0};


function pushSlides() {
  var main = document.getElementsByClassName("step-main step-inner");
  if (main.length>0){
    main[0].remove()
    console.log(main)
  }
  console.log(slideIndex);
  slideIndex += 1;
  showSlides(slideIndex);

} 

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("section-inner");
  
  console.log(slides);
  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";

}