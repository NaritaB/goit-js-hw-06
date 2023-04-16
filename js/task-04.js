const counter = document.querySelector("#counter");
let counterValue = 0;

const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

const counterValueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterValueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue--;
  counterValueEl.textContent = counterValue;
});
