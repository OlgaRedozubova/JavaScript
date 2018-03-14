var indexSlide = 1;
var timer;

showSlide (indexSlide);
startSlide();

var pauseBtn = document.querySelector('.pause'); 
var startBtn = document.querySelector('.start'); 
document.querySelector('.prev').addEventListener('click', () => showNext(-1));
document.querySelector('.next').addEventListener('click', () => showNext(1)); 
    

var dots = document.querySelectorAll('.itemDot');
//var timer
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function(e){
    console.log(i);
  //  dots[i].style.backgroundColor = 'white';
    currentSlide(i + 1);
  });
}

//Остановить слайдер
pauseBtn.addEventListener('click', function(){
  clearInterval(timer);
});

//запустить слайдер
startBtn.addEventListener('click', function(){
  startSlide();
});

function startSlide() {
  timer = setInterval(function(){
    showNext(1);
  }, 3000);
}

function currentSlide (n) {
  showSlide(indexSlide = n)
};

function showNext (n) {
  showSlide(indexSlide += n);
};

function showSlide (n) {
  var i;
  var slides = document.querySelectorAll('.itemSlide');
  if (n > slides.length) {
    indexSlide = 1;
  }
  if (n < 1) {
    indexSlide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[indexSlide - 1].style.display = 'block';
}
