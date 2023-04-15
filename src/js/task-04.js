// Створи змінну counterValue, в якій буде зберігатися поточне значення 
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector('#counter');
let counterValue = 0;

const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

const counterValueEl = document.querySelector('#value')

incrementBtn.addEventListener("click", () => {
    counterValue++;
    counterValueEl.textContent = counterValue;
  });

 
  decrementBtn.addEventListener("click", () => {
    counterValue--;
    counterValueEl.textContent = counterValue;
  });
