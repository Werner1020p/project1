const flipSound = document.getElementById("flipSound");

// reproduce sonido cuando el usuario hace click en un label/botón
document.querySelectorAll('[data-sound="flip"]').forEach(btn => {
    btn.addEventListener("click", () => {
        flipSound.currentTime = 0;
        flipSound.play().catch(() => { });
    });
});