const frames = document.querySelectorAll(".photo-frame");

frames.forEach((frame) => {
    frame.addEventListener("mouseenter", () => {
        frame.classList.add("glowing-border");
    });

    frame.addEventListener("mouseleave", () => {
        frame.classList.remove("glowing-border");
    });
});
