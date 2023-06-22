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

// var number = function (array) {
//   const newArray = [];

//   if (array.length > 0) {
//     for (let i = 0; i < array.length; i += 1) {
//       newArray.push(`${i + 1}: ${array[i]}`);
//     }
//     return newArray;
//   }

//   return newArray;
// };

// console.log(number(['a', 'b', 'c']));

// function getMiddle(s) {
//   let newS = '';

//   if (s.length % 2 === 0) {
//     newS = s[s.length / 2 - 1] + s[s.length / 2];
//     return newS;
//   } else {
//     newS = s[Math.floor(s.length / 2)];
//     return newS;
//   }
// }

// console.log(getMiddle('zefro'));

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// console.log(solution('abfc', 'bc'));

// function squareDigits(num) {
//   const array = num.toString().split('');
//   let str = '';

//   for (const arrayItem of array) {
//     str += Math.pow(Number(arrayItem), 2);
//   }
//   return str;
// }

// console.log(squareDigits(3212));

// function isTriangle(a, b, c) {
//   const isTriangl = a && b && c ? true : false;
//   return isTriangl;
// }

// console.log(isTriangle(1, 2, 2));

// console.log(1 && 0 && 2);

// function SeriesSum(n) {
//   let progres = 1;
//   let sum = 1;

//   for (let i = 1; i < n; i += 1) {
//     progres += 3;
//     sum += 1 / progres;
//     console.log(progres);
//   }

//   return sum.toFixed(2).toString();
// }

// console.log(SeriesSum(1));

// function addStr() {
//   let str = 'Hello';

//   //   str[2] = 'w';

//   console.log(str[2]);
// }

// console.log(addStr());

// function removeSmallest(numbers) {
//   let array = [];
//   const minItem = Math.min(...numbers);

//   array = [...numbers];
//   array.splice(numbers.indexOf(minItem), 1);

//   return array;
// }

// console.log(removeSmallest([5, 3, 2, 1, 4]));

// function order(words) {
//   let sortStr = '';
//   let tempWord = '';
//   const array = words.split(' ');
//   const arrayNumber = [];

//   // Отримаємо масив чисел з слів
//   for (let i = 0; i < array.length; i += 1) {
//     tempWord = array[i];

//     for (let j = 0; j < tempWord.length; j += 1) {
//       if (isNaN(Number.parseInt(tempWord[j]))) {
//         continue;
//       }
//       arrayNumber.push(Number(tempWord[j]));
//     }
//   }
//   // сортування

//   for (let j = 0; j < array.length; j += 1) {
//     console.log(j);
//     for (let i = 0; i < array.length; i += 1) {
//       if (arrayNumber[i] > arrayNumber[i + 1]) {
//         array.splice(i + 2, 0, array[i]);
//         array.splice(i, 1);
//         arrayNumber.splice(i + 2, 0, arrayNumber[i]);
//         arrayNumber.splice(i, 1);
//       }
//       console.log(arrayNumber);
//     }
//   }

//   return (sortStr = array.join(' '));
// }

// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

// function order(words) {
//   var array = words.split(' ');
//   var sortedArray = [];

//   for (let i = 0; i <= array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j].indexOf(i) >= 0) {
//         sortedArray.push(array[j]);
//       }
//     }
//   }
//   return sortedArray.join(' ');
// }

// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

// function order(words) {
//   let array = [];

//   array = words.split(' ').sort(function (a, b) {
//     return a.match(/[0-9]/) - b.match(/[0-9]/);
//   });

//   return array.join(' ');
// }

// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

// function moveZeros(arr) {
//   let j = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[j] === 0) {
//       arr.splice(j, 1);
//       arr.push(0);
//       j -= 1;
//     }
//     j += 1;
//   }

//   return arr;
// }

// console.log(moveZeros([9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0]));

// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const allCourses = students.flatMap(({ courses }) => courses);

// console.log(allCourses);

// const newArray = allCourses.filter((value, index, array) => array.indexOf(value) === index);

// console.log(newArray);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const avarageScore = students.reduce((avarage, { score }) => {
//   return avarage + score;
// }, 0);

// console.log(avarageScore / students.length);

// const facebook = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 2, tags: ['js', 'nodejs', 'react'] },
// ];

// const countLikes = socialNetwork => {
//   return socialNetwork.reduce((sumLikes, post) => sumLikes + post.likes, 0);
// };

// console.log(countLikes(facebook));

// const facebook = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 2, tags: ['js', 'nodejs', 'react'] },
// ];

// const arrayTags = socialNetwork => {
//   return socialNetwork.reduce((arrayTags, post) => {
//     arrayTags.push(...post.tags);
//     return arrayTags;
//   }, []);
// };

// console.log(arrayTags(facebook));

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = tags => tags.reduce(getTagStats, {});

// console.log(countTags(arrayTags));

// const facebook = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 2, tags: ['js', 'nodejs', 'react'] },
// ];

// const arrayTags = socialNetwork => {
//   return socialNetwork.reduce((arrayTags, post) => {
//     arrayTags.push(...post.tags);
//     return arrayTags;
//   }, []);
// };

// console.log(arrayTags(facebook));
// const tags = arrayTags(facebook);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   console.log(acc);
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// console.log(countTags(tags));

// const students = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => {
//   console.log(a);
//   console.log(b);
//   a.localeCompare(b);
// });
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => {
//   console.log(a);
//   return a - b;
// });
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.find(pizza => pizza === pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(function (number) {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });

//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => {
//     if (minAge <= user.age && user.age <= maxAge) {
//       return user.name;
//     }
//   });
// // Change code above this line

// console.log(getUsersWithAge(users, 30, 50));

// const getActiveUsers = users =>
//   users.filter(user => {
//     if (user.isActive) {
//       return user.name;
//     }
//   });

// console.log(getActiveUsers(users));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);

console.log(eachElementInFirstIsEven);
