const textAreaSelector = document.getElementById("textarea")
const charCounter = document.getElementById("char-counter");

document.getElementById("textarea").addEventListener("keyup", textAreaValue);

function textAreaValue() {
   const result = textAreaSelector.value.length;
   charCounter.innerText = result;
}