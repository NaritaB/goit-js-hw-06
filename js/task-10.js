const refs = {
  controls: document.querySelector("#controls"),
  createBtn: controls.querySelector("[data-create]"),
  destroyBtn: controls.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}

refs.createBtn.addEventListener("click", () => {
  const amount = parseInt(controls.querySelector("input").value);
  createBoxes(amount);
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
