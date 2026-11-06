
// Create a soft, glowing night sky
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("span");
  star.className = "star";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.animationDuration = (1.5 + Math.random() * 3) + "s";

  const size = 1 + Math.random() * 2.5;
  star.style.width = size + "px";
  star.style.height = size + "px";

  starsContainer.appendChild(star);
}


// Floating blooming hearts — no flower petals
const heartContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";

  const hearts = ["♡", "♥", "✧"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (13 + Math.random() * 20) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

setInterval(createHeart, 950);


// Open the final birthday surprise
function openGift() {
  const message = document.getElementById("finalMessage");
  const button = document.getElementById("giftButton");

  message.classList.add("show");
  button.style.display = "none";

  // A little extra sparkle of hearts
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 120);
  }

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}