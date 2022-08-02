const LINE_COUNT = 6;
const CHAR_COUNT = 5;

const uncleWords = document.getElementById("words");

for (let i = 0; i < LINE_COUNT; i++) {
  const wordDiv = document.createElement("div");

  wordDiv.className = "word";
  for (let j = 0; j < CHAR_COUNT; j++) {
    const charDiv = document.createElement("div");
    charDiv.className = "char";
    wordDiv.appendChild(charDiv);
  }

  uncleWords.appendChild(wordDiv);
}

let currentChar = 0;
let currentWord = 0;
document.addEventListener("keydown", (event) => {
  const firstWord = uncleWords.children[currentWord];
  if (event.code == "Enter") {
    if (currentChar == CHAR_COUNT) {
      currentWord++;
      currentChar = 0;
    }
  } else if (event.code == "Backspace") {
    if (currentChar > 0) {
      currentChar--;
      firstWord.children[currentChar].innerHTML = "";
    }
  } else if (currentChar < CHAR_COUNT) {
    firstWord.children[currentChar].innerHTML = event.key;
    currentChar++;
  } else {
    alert("Stoooop");
  }
});