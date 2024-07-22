// Mapping of button characters to sound files
const soundMap = {
  'w': 'sounds/crash.mp3',
  'a': 'sounds/kick-bass.mp3',
  's': 'sounds/snare.mp3',
  'd': 'sounds/tom-1.mp3',
  'j': 'sounds/tom-2.mp3',
  'k': 'sounds/tom-3.mp3',
  'l': 'sounds/tom-4.mp3'
};

// Function to play the sound
function playSound(key) {
  const audio = new Audio(soundMap[key]);
  audio.play();
}

// Select all buttons with the class 'drum'
const buttons = document.querySelectorAll('.drum');

// Add an event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playSound(button.classList[0]);
  });
});
