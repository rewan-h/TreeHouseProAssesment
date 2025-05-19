document.addEventListener('DOMContentLoaded', () => {
  const buttonLeft = document.getElementById('buttonLeft');
  const buttonRight = document.getElementById('buttonRight');

  const carouselTitles = ["Fantasy treehouse", "Grown-up treehouse", "Modern treehouse","Rustic treehouse"];
  const carouselDesc = ["This cosy treehouse is made from high quality weather-proof materials.", "Description 2", "Description 3"," Description 4"];

  const carousel = document.getElementById('carousel');

  var currentIndex = 0;
  carousel.querySelector('#carouselImg1').classList.add('selected');
  

  buttonRight.addEventListener('click', () => {
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.remove('selected');
    currentIndex = Math.min(currentIndex + 1,3);
    carousel.querySelector('#carouselTitle').innerText = carouselTitles[currentIndex];
    carousel.querySelector('#carouselDesc').innerText = carouselDesc[currentIndex];
    
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.add('selected');
  });
  buttonLeft.addEventListener('click', () => {
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.remove('selected');
    currentIndex = Math.max(currentIndex - 1,0);
    carousel.querySelector('#carouselTitle').innerText = carouselTitles[currentIndex];
    carousel.querySelector('#carouselDesc').innerText = carouselDesc[currentIndex];
    
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.add('selected');
  });
});