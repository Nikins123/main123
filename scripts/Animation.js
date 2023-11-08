const animateButton = document.getElementById('btn-sign-up');
const animatedDiv = document.getElementById('animatedDiv');

animateButton.addEventListener('click', () => {
  animatedDiv.classList.remove('animated');
  void animatedDiv.offsetWidth; // Заставимо браузер перерисувати елемент
  animatedDiv.classList.add('animated');
  
});

moveButton.addEventListener('click', () => {
  animatedDiv.style.animationPlayState = 'running';
});