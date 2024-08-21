function createPetal() {
    const container = document.querySelector(".flower-container");
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    petal.style.animationDuration = `${Math.random() * 10 + 10}s`;
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(petal);
}

setInterval(createPetal, 500);

window.addEventListener("resize", () => {
    document.querySelectorAll(".petal").forEach((petal) => {
        petal.style.left = `${Math.random() * 100}%`;
    });
});
