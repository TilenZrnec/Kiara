let isRaining = false;
let intervalId = null;

// Array of dog images
const dogImages = ['dog1.png', 'dog2.png', 'dog3.png'];

// Function to create falling dogs
function createFallingDog() {
  const dog = document.createElement('img');
  
  // Randomly select a dog image
  const randomDog = dogImages[Math.floor(Math.random() * dogImages.length)];
  dog.src = randomDog; // Set the src to the randomly selected dog image
  
  dog.classList.add('dog');

  // Normalize the size (set a base size)
  const baseSize = 50; // Base size in pixels
  dog.style.width = `${baseSize}px`; // Set a consistent base size

  // Randomize horizontal position
  const xPos = Math.random() * window.innerWidth;
  dog.style.left = `${xPos}px`;

  // Randomize size scaling (between 0.8x and 1.5x of the base size)
  const scale = Math.random() * 0.7 + 0.8; // Random scale factor
  dog.style.transform = `scale(${scale})`; // Apply scaling

  // Randomize animation duration (falling speed)
  const duration = Math.random() * 10 + 5; // Between 5 and 15 seconds
  dog.style.animationDuration = `${duration}s`;

  // Add the dog to the body
  document.body.appendChild(dog);

  // Remove the dog after it falls off the screen
  setTimeout(() => {
    dog.remove();
  }, duration * 1000 + 1000); // Wait an extra second to ensure it disappears after hitting the bottom
}

// Function to toggle dog rain
function toggleDogRain() {
  if (isRaining) {
    clearInterval(intervalId); // Stop creating dogs
    isRaining = false;
    document.getElementById('toggleButton').textContent = 'Kobasica';
  } else {
    intervalId = setInterval(createFallingDog, 500); // Create a dog every 500ms
    isRaining = true;
    document.getElementById('toggleButton').textContent = 'START KOBASICA';
  }
}

// Add event listener to the button
document.getElementById('toggleButton').addEventListener('click', toggleDogRain);