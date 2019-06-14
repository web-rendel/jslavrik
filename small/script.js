var btnPrev = document.querySelector('#slider .prev');
var btnNext = document.querySelector('#slider .next');
var allImages = document.querySelectorAll('#slider .images img');


function addDots() {
  var dots = document.querySelector('#slider .dots');
  var newSpan = document.createElement('span');
  var i;
  for(i = 0; i <= allImages.length-1; i++) {
    dots.appendChild(newSpan.cloneNode ( true ));
  }
  var dots = document.querySelectorAll('#slider .dots span');
  dots[0].className = 'active';
}
addDots();

var i = 0;

btnPrev.onclick = function() {
  var dots = document.querySelectorAll('#slider .dots span');
  dots[i].className = '';
  allImages[i].className = '';
 
  i--;
  if( i < 0) {
    i = allImages.length-1;
  }
  allImages[i].className = 'show';
  dots[i].className = 'active';
  
}

btnNext.onclick = function() {
  var dots = document.querySelectorAll('#slider .dots span');
  allImages[i].className = '';
  dots[i].className = '';
  i++;
  if( i >= allImages.length) {
    i = 0;
  }
  allImages[i].className = 'show';
  dots[i].className = 'active';

}

