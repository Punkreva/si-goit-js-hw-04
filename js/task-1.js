function isEnoughCapacity(products, containerSize) { // функція з двома параметрами ("products - обєкт", "containerSize - числове значення")
  let totalProducts = 0; // оголошення "let" змінної для загальної кількості товарів
    for (const key in products) { // цикл "for...in" для перебору ключів "key" в обє`кті "products"
        totalProducts += products[key]; // виконується накопичення значень всіх ключів "products[key]" в змінну "totalProducts"
    }
    return totalProducts <= containerSize; // повернення функції (логічне порівння значень змінної "totalPrice" і параметру "containerSize") що попверне буль true/false
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false