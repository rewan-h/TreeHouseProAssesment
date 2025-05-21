document.addEventListener('DOMContentLoaded', () => {
  const buttonLeft = document.getElementById('buttonLeft');
  const buttonRight = document.getElementById('buttonRight');

  const carouselTitles = ["Fantasy treehouse", "Grown-up treehouse", "Modern treehouse", "Rustic treehouse"];
  const carouselDesc = [
    "Weather-proof, lockable, over 10m2, built in large sturdy tree.",
    "Cabin-like, insulated, up to 50m2, suitable for year-round living.",
    "Dressed timber, skirting, balcony optional, built in sturdy trees.",
    "Rough-sawn timber, under 5m2, with roof and stairs or ladder."
  ];

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