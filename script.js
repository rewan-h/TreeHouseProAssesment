// Carousel navigation logic: handles switching images, titles, and descriptions on left/right button clicks
document.addEventListener('DOMContentLoaded', () => {
  // Constants for carousel images and buttons
  const buttonLeft = document.getElementById('buttonLeft');
  const buttonRight = document.getElementById('buttonRight');
  const carousel = document.getElementById('carousel');

  // Carousel images and their corresponding titles and descriptions
  const carouselTitles = ["Fantasy treehouse", "Grown-up treehouse", "Modern treehouse", "Rustic treehouse"];
  const carouselDesc = [
    "Weather-proof, lockable, over 10m2, built in large sturdy tree.",
    "Cabin-like, insulated, up to 50m2, suitable for year-round living.",
    "Dressed timber, skirting, balcony optional, built in sturdy trees.",
    "Rough-sawn timber, under 5m2, with roof and stairs or ladder."
  ];

  var currentIndex = 0; // Initialize currentIndex to 0
  // Set initial image to be selected
  carousel.querySelector('#carouselImg1').classList.add('selected');
  

  buttonRight.addEventListener('click', () => {
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.remove('selected');
    // Move index forward but clamp max at 3 (last image)
    currentIndex = Math.min(currentIndex + 1,3); 
    carousel.querySelector('#carouselTitle').innerText = carouselTitles[currentIndex];
    carousel.querySelector('#carouselDesc').innerText = carouselDesc[currentIndex];
    // Highlight the new current image
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.add('selected');
  });
  buttonLeft.addEventListener('click', () => {
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.remove('selected');
    // Move index backward but clamp min at 0 (first image)
    currentIndex = Math.max(currentIndex - 1,0);

    carousel.querySelector('#carouselTitle').innerText = carouselTitles[currentIndex];
    carousel.querySelector('#carouselDesc').innerText = carouselDesc[currentIndex];
    // Highlight the new current image
    carousel.querySelector('#carouselImg'.concat(currentIndex+1)).classList.add('selected');
  });
});