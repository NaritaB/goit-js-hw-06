// Порахує і виведе в консоль кількість категорій в ul#categories, тобто 
// елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і
//  виведе в консоль текст заголовку елемента (тегу <h2>) і 
//  кількість елементів в категорії (усіх <li>, вкладених в нього).


const categorEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categorEl.length}`);

const titleEl = document.querySelectorAll('h2');
console.log(titleEl);
console.log(titleEl. textContent );
// 