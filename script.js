// Fake error screen delay
setTimeout(() => {
  document.getElementById('fake-error').style.display = 'none';
  document.getElementById('surprise').classList.remove('hidden');
  startConfetti();
}, 3000);

// Confetti animation
function startConfetti() {
  const container = document.querySelector('.confetti-container');
  const colors = ['#ff8a80', '#ea80fc', '#8c9eff', '#80d8ff', '#a7ffeb', '#ccff90'];

  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    confetti.style.top = '-20px';
    container.appendChild(confetti);
  }
}

