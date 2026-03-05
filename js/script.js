const flipSound = document.getElementById("flipSound");

// Play sound only when user clicks a page button
document.querySelectorAll('[data-sound="flip"]').forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!flipSound) return;

        flipSound.currentTime = 0;

        flipSound.play().catch(() => {
            // Some browsers block sound until a user interaction.
            // This click counts as interaction, so usually it will play.
        });
    });
});