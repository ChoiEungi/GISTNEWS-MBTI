var slideIndex = 0;

var reporter = 0;
var designer = 0 ;
var editor = 0 ;


function pushSlides(data) {
  var main = document.getElementsByClassName("main-section-inner");
  if (main.length>0){
    main[0].remove()
  }

  if (data){
    switch (data.id){
      case "1":
      mbtiData["reporter"] += 1
      break;

      case "2":
      mbtiData["designer"] += 1
      break;

      case "3":
      mbtiData["editor"] += 1
      break;

    }
  }

  slideIndex += 1;
  showSlides(slideIndex);

} 

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll('.section-inner');

  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.animation = "fadein 1s";
  slides[slideIndex-1].style.display = "flex";



}

function showResult(){

for (let [key, value] of mbtiData ) {
  console.log(key + ' = ' + value);
}

}