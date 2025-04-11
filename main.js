const keys = ["Q", "L", "X", "B", "G", "S", "M", "P", "V", "J", "Z", "D", "K", "F"];
const keyElement = document.querySelector("[key]");
const resetBtn = document.querySelector("[reset]");
const wrongImg = document.querySelector("[wrong]");
const rightImg = document.querySelector("[right]");

let currentKeyIndex;

function updateKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
  wrongImg.classList.add("hidden");
  rightImg.classList.add("hidden");
}

document.addEventListener("keydown", (event) => {
  if (event.key.toUpperCase() === keys[currentKeyIndex]) {
    PNotify.success({ text: "Молодець!" });
    rightImg.classList.remove("hidden");
    wrongImg.classList.add("hidden");
    setTimeout(updateKey, 500);
  } else {
    PNotify.error({ text: "Неправильна клавіша!" });
    wrongImg.classList.remove("hidden");
    rightImg.classList.add("hidden");
  }
});

resetBtn.addEventListener("click", () => {
  updateKey();
  PNotify.info({ text: "Гра перезапущена" });
});

updateKey();
