// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const priceTotalWords = message.split(' ').length * pricePerWord;

//   // Change code above this line
//   return priceTotalWords;
// }

// console.log(calculateEngravingPrice('message r f f', 5));

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30

// const number = 3;

// function calculateTotal(number) {
//   // Change code below this line
//   let totalNumber = 0;

//   for (let i = 0; i <= number; i += 1) {
//     totalNumber += i;
//   }

//   return totalNumber;

//   // Change code above this line
// }
// console.log(calculateTotal(3));

// const test = [1, 3, 5];

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     console.log(order.length);
//   }

//   return total;
// }

// console.log(calculateTotalPrice(test));

// const test = 'Hello protasenko world and all country';

// function findLongestWord(string) {
//   let longWorld = '';
//   string = string.split(' '); //перетворює рядок в  массів

//   for (let i = 0; i < string.length; i += 1) {
//     if (longWorld.length < string[i].length) {
//       longWorld = string[i];
//     }
//   }

//   return longWorld;
// }

// console.log(findLongestWord(test));

// const numbers = [1, 3, 5, 13, 23, 6];
// const value = 5;

// function createArrayOfNumbers(numbers, value) {
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
// }

// console.log(createArrayOfNumbers(numbers, value));

// const array1 = [1, 3, 5, 13, 23, 6];
// const array2 = [1, 5, 8, 13, 20, 60];

// function createArrayOfNumbers(array1, array2) {
//   const newArray = [];

//   for (const arrayItem of array1) {
//     if (array2.includes(arrayItem)) {
//       //перевіряє чи є єлемент в массиві і повертає буль
//       newArray.push(arrayItem); //додає елемент в массив з початку
//     }
//   }

//   return newArray;
// }

// console.log(createArrayOfNumbers(array1, array2));

// const min = 6;
// const max = 12;

// function createArrayOfNumbers(min, max) {
//   const array = [];

//   for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

//   return array;
// }

// console.log(createArrayOfNumbers(min, max));

// const array = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// const value = 'Jupiter';

// function includes(array, value) {
//   let confirm = false;

//   for (const arrayItem of array) {
//     if (arrayItem === value) {
//       confirm = true;
//       console.log(typeof confirm);
//       return confirm;
//     }
//   }

//   return confirm;
// }

// console.log(includes(array, value));

// const s = 'Hello World!';

// function removeExclamationMarks(s) {
//   const newS = s.replaceAll('!', '');
//   return newS;
// }

// console.log(removeExclamationMarks(s)); 102

// const n = 10;

// function descendingOrder(n) {
//   const array = String(n).split('');
//   const newArray = [];
//   let newNumber = 0;
//   let maxNumber = array[0];
//   let delNumber = 0;

//   //   ((array.length + 1) * array.length) / 2;
//   // console.log('sumIteration: ', sumIteration);

//   for (let i = 0; i < array.length; i += 1) {
//     if (maxNumber < Number(array[i])) {
//       maxNumber = Number(array[i]);
//       delNumber = i;
//     }

//     if (i === array.length - 1) {
//       newArray.push(maxNumber);
//       console.log('newArray', newArray);

//       array.splice(delNumber, 1);
//       maxNumber = array[0];
//       i = 0;
//       console.log('old: ', array);
//       console.log(array.length);
//     }

//     if (array.length === 1) {
//       newArray.push(Number(maxNumber));
//       console.log(newArray);
//       console.log(array);
//     }
//   }
//   return (newNumber = Number(newArray.join('')));
// }

// console.log('Fin: ', descendingOrder(n));

// const n = 0;

// function descendingOrder(n) {
//   const array = String(n).split('');

//   console.log(array);
//   let itemArray = '';

//   for (let y = array.length - 1; y > 0; y -= 1) {
//     for (let i = array.length - 1; i > 0; i -= 1) {
//       console.log('I', i);
//       console.log('Y', y);
//       if (array[i] > array[i - 1]) {
//         itemArray = array[i];
//         array.splice(i, 1, array[i - 1]);
//         array.splice(i - 1, 1, itemArray);
//         console.log(array);
//       }
//     }
//   }

//   return Number(array.join(''));
// }

// console.log('Fin: ', descendingOrder(n));

// console.log('object' && 'rett');

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(apartment.descr);

// for (const key of keys) {
//   values.push(apartment[key]);
//   console.log(values);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: { low, high, icon },
//   tomorrow: { low },
// } = forecast;

// console.log(low, high, icon);

// const data = {
//   category: 'Finance',
//   text: 'Take interest',
// };

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const newData = {
//     category: 'General',
//     priority: 'Normal',
//     ...data,
//     completed,
//   };

//   return newData;

//   // Change code above this line
// }

// console.log(makeTask(data));

// function add(...args) {
//   console.log(args);
// }

// console.log(add(1, 2, 3, 4));

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       const { name } = potion;
//       if (newPotion.name === name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const { name } = this.potions[i];

//       if (potionName === name) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// // console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.getPotions());

// // console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// const numbers = '1 2 3 4 5';

// function highAndLow(numbers) {
//   const array = [];
//   array.push(Math.max(...numbers.split(' ')));
//   array.push(Math.min(...numbers.split(' ')));

//   return array.join(' ');

//   // ...
// }

// console.log(highAndLow(numbers));

// function countPositivesSumNegatives(input) {
//   const array = [];
//   let quantityPositive = 0;
//   let sumNegative = 0;

//   if (input === null || input.length === 0) {
//     return array;
//   }

//   for (const inputItem of input) {
//     if (inputItem > 0) {
//       quantityPositive += 1;
//     } else if (inputItem < 0) {
//       sumNegative += inputItem;
//     }
//   }

//   array.push(quantityPositive);
//   array.push(sumNegative);
//   return array;
// }

// console.log(countPositivesSumNegatives([]));

// function reverseWords(str) {
//   const array = str.split(' ');
//   let tempStr = '';
//   const newArray = [];

//   for (const arrayItem of array) {
//     for (let i = arrayItem.length - 1; i >= 0; i -= 1) {
//       tempStr += arrayItem[i];
//     }
//     newArray.push(tempStr);
//     tempStr = '';
//   }

//   return newArray.join(' ');
// }

// console.log(reverseWords('This is an example!'));

// const isSquare = function (n) {
//   console.log(Math.sqrt(n));
//   const newNumber = Math.sqrt(n) % 1;

//   if (newNumber > 0) {
//     return false;
//   }

//   console.log(newNumber);

//   return true; // fix me
// };

// console.log(isSquare(0));
