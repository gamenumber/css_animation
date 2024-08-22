const morphText = document.getElementById("morphText");
const changeWordBtn = document.getElementById("changeWord");
const words = ["창의성", "혁신", "상상력", "아이디어", "영감", "발전"];
let currentIndex = 0;

function changeWord() {
    currentIndex = (currentIndex + 1) % words.length;
    morphText.style.opacity = 0;
    setTimeout(() => {
        morphText.textContent = words[currentIndex];
        morphText.style.opacity = 1;
    }, 500);
}

changeWordBtn.addEventListener("click", changeWord);

// 자동 단어 변경
setInterval(changeWord, 5000);
