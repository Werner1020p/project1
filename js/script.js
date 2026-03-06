const flipSound = document.getElementById("flipSound");
let audioStarted = false;

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!flipSound) return;

        const goTo = btn.getAttribute("for");

        // Start ONLY when opening the book (p2)
        if (!audioStarted && goTo === "p2") {
            flipSound.currentTime = 0;
            flipSound.play().catch(() => { });
            audioStarted = true;
        }

        // Restart audio if user restarts story
        if (audioStarted && goTo === "p1") {
            flipSound.currentTime = 0;
            flipSound.play().catch(() => { });
        }
    });
});