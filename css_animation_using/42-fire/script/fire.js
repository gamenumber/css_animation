const festival = document.getElementById("festival");
const addFlameButton = document.getElementById("addFlame");

function createFlame() {
    const flame = document.createElement("div");
    flame.classList.add("flame");
    flame.style.left = Math.random() * 100 + "%";
    flame.style.top = Math.random() * 100 + "%";
    flame.style.animationDuration = Math.random() * 0.5 + 0.5 + "s";

    flame.addEventListener("click", () => {
        flame.style.transform = "scale(2) rotate(45deg)";
        setTimeout(() => {
            festival.removeChild(flame);
        }, 500);
    });

    festival.appendChild(flame);
}

addFlameButton.addEventListener("click", createFlame);

// 초기 불꽃 생성
for (let i = 0; i < 5; i++) {
    createFlame();
}
