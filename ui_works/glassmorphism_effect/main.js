const tiltEffectSettings = {
  max: 25, // max tilt rotation (degrees (deg))
  perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: "cubic-bezier(.03,.98,.52,.99)", // easing (transition-timing-function) of the enter/exit transition
};

const card = document.querySelector(".card");
card.addEventListener("mouseenter", cardMouseEnter);
card.addEventListener("mousemove", cardMouseMove);
card.addEventListener("mouseleave", cardMouseLeave);

function cardMouseEnter(event) {
  clearTimeout(card.transitionTimeout);
  card.style.transition = `transform 3000ms cubic-bezier(.03,.98,.52,.99)`;
  card.transitionTimeout = setTimeout(() => {
    card.style.transition = "";
  }, 3000);
}
function cardMouseMove(event) {
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const centerX = card.offsetLeft + cardWidth / 2;
  const centerY = card.offsetTop + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateX = (+1 * 25 * mouseY) / (cardHeight / 2);
  const rotateY = (-1 * 25 * mouseX) / (cardHeight / 2);

  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
  scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function cardMouseLeave(event) {
  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg)`;
}
