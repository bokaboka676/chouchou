document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("container");
  const btnYes = document.querySelector(".btn-yes");
  const btnNo = document.querySelector(".btn-no");
  const initialContent = document.getElementById("initial-content");
  const loveMessage = document.getElementById("love-message");
  const heartsContainer = document.querySelector(".hearts-container");
  const bgMusic = document.getElementById("bgMusic");

  // Set up music
  bgMusic.volume = 0.5; // Set volume to 50%
  bgMusic.loop = true;  // Make the song loop

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Create floating hearts periodically
  setInterval(createHeart, 300);

  function moveButton(e) {
    const btnRect = btnNo.getBoundingClientRect();
    
    let newX = Math.random() * (window.innerWidth - btnRect.width);
    let newY = Math.random() * (window.innerHeight - btnRect.height);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
  }

  btnNo.addEventListener("mouseover", moveButton);
  btnNo.addEventListener("click", moveButton);

  btnYes.addEventListener("click", () => {
    initialContent.style.display = 'none';
    loveMessage.style.display = 'block';
    
    // Play the music
    bgMusic.play().catch(error => {
      console.error("Error playing music:", error);
    });
  });
});