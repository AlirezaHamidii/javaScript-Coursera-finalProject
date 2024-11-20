const images = [
  { src: 'images/user-1.jpg', alt: 'person 1' },
  { src: 'images/user-2.jpg', alt: 'person 2' },
  { src: 'images/user-3.jpg', alt: 'person 3' },
  { src: 'images/user-4.jpg', alt: 'person 4' },
  { src: 'images/user-5.jpg', alt: 'person 5' },
  { src: 'images/user-6.jpg', alt: 'person 6' },
];

const galleryContainer = document.getElementById('gallery');
const displayContainer = document.getElementById('displayContainer');
const altTextElement = document.getElementById('altText');

let currentIndex = -1;

for (const image of images) {
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  img.addEventListener('mouseover', () => {
    displayImage(image.src, image.alt);
  });

  // Add mouseout event
  img.addEventListener('mouseout', () => {
    clearDisplay();
  });

  galleryContainer.appendChild(img);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();

    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = -1;
      clearDisplay();
    } else {
      displayImage(images[currentIndex].src, images[currentIndex].alt);
    }
  }
});
function displayImage(src, alt) {
  displayContainer.innerHTML = `
        <img src="${src}" alt="${alt}">
        <div class="alt-text">${alt}</div>
      `;
}

// Function to clear the display container
function clearDisplay() {
  displayContainer.innerHTML =
    '<div class="alt-text" id="altText">No image displayed</div>';
}
