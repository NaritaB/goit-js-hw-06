// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const inputRange = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

const handleInput = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener('input', handleInput);