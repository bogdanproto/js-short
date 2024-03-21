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

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);

// console.log(eachElementInFirstIsEven);

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//   const array = word.toLowerCase().split('');

//   const newArray = array.map((item, index, array) => {
//     const tempArray = [...array];
//     tempArray.splice(index, 1);

//     if (tempArray.includes(item)) {
//       return (item = ')');
//     }
//     return (item = '(');
//   });

//   return newArray.join('');
// }

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .map(function (a, i, w) {
//       console.log(w.indexOf(a));
//       console.log(w.lastIndexOf(a));
//       console.log(w.indexOf(a) == w.lastIndexOf(a));
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
//     })
//     .join('');
// }

// console.log(duplicateEncode('Success'));

// const avaragePoints = array => array.reduce((sum, number) => (sum += number));

// function getAvarage(array, countFn) {
//   console.table(array);
//   console.log('Quntity of students:', array.length);

//   console.log(countFn(array));
// }

// // getAvarage([2, 3, 4], avaragePoints);

// getAvarage([2, 3, 4], arrayCall => arrayCall.reduce((sum, number) => (sum += number)));

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react', 'TEST'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// Початкове значення акумулятора - це порожній об'єкт {}
// console.log(tags);

// const countTags = tags =>
//   tags.reduce((acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
//   }, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const getProductPrice = productName => products.find(product => productName === product.name).price;

// console.log(getProductPrice('Scanner'));

// if (true) {
//   str = 'Block';
//   if (true) {
//     str = 'Home';
//   }
// }
// let str = 'Global';
// str = 'Home';
// let str = 'Block';

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// const array = [1, 5, 6, 7, 8, 5, 9];

// console.log(array.indexOf(5));
// console.log(array.lastIndexOf(5));

// function transformTo(str) {
//   return str
//     .toLowerCase()
//     .split('')
//     .map((item, index, array) => {
//       return array.indexOf(item) !== array.lastIndexOf(item) ? ')' : '(';
//     })
//     .join('');
// }
// console.log(transformTo('Receder'));

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// const getCount = str =>
//   Number(
//     str
//       .split('')
//       .reduce(
//         (totalVowel, item) =>
//           ['a', 'e', 'i', 'o', 'u'].includes(item) ? (totalVowel += 1) : totalVowel,
//         0
//       )
//   );

// console.log(getCount('Woe wilil consider'));

// function expandedForm(num) {
//   const array = num.toString().split('');
//   const newArray = [];

//   array.forEach((number, index, array) => {
//     if (number > 0) {
//       newArray.push(number * Math.pow(10, array.length - 1 - index));
//     }
//   });
//   return newArray.join(' + ');
// }

// const expandedForm = n =>
//   n
//     .toString()
//     .split('')
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i));
// // .filter(a => a > 0)
// // .reverse()
// // .join(' + ');

// console.log(expandedForm(70304));

// function wave(str) {
//   const tempStr = str.split('');
//   return str
//     .split('')
//     .map((item, index, array) => {
//       let tempStr = [...array];
//       tempStr[index] = tempStr[index].toUpperCase();
//       return tempStr.join('');
//     })
//     .filter((item, index) => item[index] !== ' ');

//   //   for (let i = 0; i < str.length; i += 1) {
//   //     if (tempStr[i] === ' ') {
//   //       continue;
//   //     }
//   //     tempStr[i] = tempStr[i].toUpperCase();
//   //     array.push(tempStr.join(''));
//   //     tempStr[i] = tempStr[i].toLowerCase();
//   //   }

//   //   return array;
// }

// function wave(str) {
//   return str
//     .split('')
//     .map((l, i, a) => {
//       let c = a.slice();
//       c[i] = c[i].toUpperCase();
//       return c.join('');
//     })
//     .filter((w, i) => {
//       console.log(w);
//       return w[i] === ' ';
//     });
// }

// console.log(wave('two words'));

//   for (let i = iterable.length - 1; i > 0; i -= 1) {
//     if (iterable[i] === iterable[i - 1]) {
//       iterable.splice(i, 1);
//     }
//   }

// var uniqueInOrder = function (iterable) {
//   if (typeof iterable !== 'object') {
//     iterable = iterable.split('');
//   }
//   return iterable.filter((item, index, array) => array[index] !== array[index + 1]);
// };

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// function checkObj(obj, checkProp) {
//   console.log(obj[checkProp]);
//   // Змініть код лише під цим рядком
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj.checkProp;
//   }
//   return 'Not Found';
//   // Змініть код лише над цим рядком
// }

// console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));

// Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//   }
//   if (prop !== 'track' && value !== '') {
//     records[id][prop] = value;
//   }

//   //   if (prop === 'track' && value !== '') {
//   //     if (!records[id].hasOwnProperty(prop)) {
//   //       records[id][prop] = [];
//   //     }
//   //   }

//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));

// function towerBuilder(nFloors) {
//   return [...Array(nFloors)].map(
//     (item, index) =>
//       ' '.repeat(nFloors - index - 1) + '*'.repeat(index * 2 + 1) + ' '.repeat(nFloors - index - 1)
//   );
// }

//   console.log(array);

//   //   for (let i = 0; i < nFloors; i += 1) {
//   //     array[i].push(...' '.repeat(nFloors - i - 1));
//   //     array[i].unshift(...' '.repeat(nFloors - i - 1));
//   //     finalArray.push(array[i].join(''));
//   //   }

//   return finalArray;
// }

// console.log(towerBuilder(6));

// ['     *     ', '    ***    ', '   *****   ', '  *******  ', ' ********* ', '***********'];

// const myArray = [];

// // Змініть код лише під цим рядком
// for (let i = 9; i > 0; i -= 1) {
//   console.log(i);
//   if (i % 2 !== 0) {
//     myArray.push(i);
//     console.log(i);
//   }
//   console.log(i);
// }

// let total = 1;

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     console.log(n);
//     console.log(total);
//     total = multiply(arr, n - 1) * arr[n - 1];
//     return total;
//   }
// }
// let total = 0;

// function sum(n) {
//   if (n <= 0) {
//     return;
//   }
//   total += n;
//   n -= 1;
//   console.log(total);
//   sum(n);
//   return total;
// }

// console.log(sum(3));

// Налаштування
// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (const contact of contacts) {
//     if (contact.firstName === name) {
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       } else {
//         return 'No such property';
//       }
//     }
//   }
//   return 'No such contact';
//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile('Kristian', 'lastName'));

// const array = [];

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const array = countdown(n - 1);
//     array.push(n);
//     console.log(array);
//     return array;
//   }
// }
// console.log(countdown(5));

// let array;
// const array2 = [2, 5];

// array = array2;

// console.log(array);

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const array = rangeOfNumbers(startNum, endNum - 1);
//     array.push(endNum);
//     return array;
//   }
// }

// console.log(rangeOfNumbers(2, 16));

// function findOdd(a) {
//   return a.find(item => !!(a.filter(number => item === number).length % 2));
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function duplicateCount(text) {
//   const array = text.toLowerCase().split('');
//   const obj = {};
//   let total = 0;

//   for (const item of array) {
//     if (obj.hasOwnProperty(item)) {
//       obj[item] += 1;
//     } else {
//       obj[item] = 1;
//     }
//   }

//   for (const key in obj) {
//     if (obj[key] > 1) {
//       total += 1;
//     }
//   }

//   return total;
// }

// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split('')
//     .filter(function (val, i, arr) {
//       console.log('i', i);
//       console.log('arr.indexOf(val', arr.indexOf(val));
//       console.log('arr.lastIndexOf(val)', arr.lastIndexOf(val));
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     });
// }

// console.log(duplicateCount('bcba1111'));

// .reduce((totalRepeat, symbol, index, array) => {
//   if (array.filter(item => item === symbol).length > 1) {
//     return (totalRepeat += 1);
//   } else {
//     return totalRepeat;
//   }
// }, 0);

// const array = [2, 3, 4, 6, 2, 1, 4, 6, 7, 2, 3, 3, 3];

// console.log(
//   array.filter(
//     (item, index, array) => array.lastIndexOf(item) === index && array.indexOf(item) !== index
//   )
// );

// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arr[arr.length - 1 - i] && arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       continue;
//     }

//     if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
//       return arr[i];
//     } else {
//       return arr[arr.length - 1 - i];
//     }
//   }
// }

// console.log(findUniq([0, 1, 0]));

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// // Змініть код лише під цим рядком

// const { yesterday, today, tommorrow } = HIGH_TEMPERATURES;

// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   // Змініть код лише під цим рядком
//   if (
//     userObj.hasOwnProperty('Alan') &&
//     userObj.hasOwnProperty('Jeff') &&
//     userObj.hasOwnProperty('Sarah') &&
//     userObj.hasOwnProperty('Ryan')
//   ) {
//     return true;
//   } else {
//     return false;
//   }

//   // Змініть код лише над цим рядком
// }

// console.log(isEveryoneHere(users));

// function likes(names) {
//   if (names.length > 3) {
//     return `${names[0]} ${names[1]} and ${names.length - 2} others like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else {
//     return 'no one likes this';
//   }
// }

// console.log(likes(['Alex']));

// function count(string) {
//   return string.split('').reduce((obj, item) => {
//     obj.hasOwnProperty(item) ? (obj[item] += 1) : (obj[item] = 1);
//     return obj;
//   }, {});
// }

// console.log(count('abccccca'));

// (function (x) {
//   delete x;
//   return x;
// })(1);

// let testStr = 'freeCodeCamp';
// let testRegex = /dre/;
// testRegex.test(testStr);

// console.log(testRegex.test(testStr));

// 'Hello, World!'.match(/Hello/);
// let ourStr = 'Repeat, Repeat, Repeat';
// let ourRegex = /repeat/gi;
// let test = ourStr.match(ourRegex);

// console.log(test);

// let quoteSample = 'Blueberry 3.141592653s are delicious.';
// let myRegex = /[h-s2-6]/gi; // Змініть цей рядок
// let result = quoteSample.match(myRegex); // Змініть цей рядок

// console.log(result);

// const fn = function () {
//   console.log('Hi');
// };

// fn();

// fn.prototype.add = function () {
//   console.log('book');
// };

// console.log(fn.prototype);

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getEmails());

// const arr = [1, 1, 2, 3, 4, 5, 2, 1];
// console.log(arr);

// const test = new Set(arr);
// console.log(test);

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// console.log(child.surname);

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     (this.brand = brand), (this.model = model), (this.price = price);
//   }

//   // Change code above this line
// }

// const newCar = new Car('bmw', 'X5', '10000');

// console.log(newCar);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }

// const newCar = new Car({ brand: 'bmw', model: 'X5', price: '10000' });
// console.log(newCar);

// class Car {
//   // Change code below this line
//   #price;

//   static #MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.#MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango);

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
//   blacklistedEmails: [],
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// console.log(mango.blacklistedEmails);

// mango.blacklist('poly@mail.com');
// mango.blacklist('colloly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// // console.log(mango.isBlacklisted('poly@mail.com')); // true

// let quoteSample = '3 blind mice.';
// let myRegex = /[^0-9aeiou]/gi; // Змініть цей рядок
// let result = quoteSample.match(myRegex); // Змініть цей рядок
// let test = myRegex.test(quoteSample);

// console.log(result);
// console.log(test);

// let reCriminals = /C+/g; // Змініть цей рядок
// console.log('CCC'.match(reCriminals));

// let hello = '   Hello, World!  ';
// let wsRegex = /^\s+|\s+$/g; // Змініть цей рядок
// let result = hello.replace(wsRegex, ''); // Змініть цей рядок

// console.log(result);

//return the total number of smiling faces in the array
// function countSmileys(arr) {
//   return arr.reduce((total, value) => {
//     if (/[)D]/.test(value)) {
//       return (total += 1);
//     }
//     return total;
//   }, 0);
// }

// console.log(countSmileys([';o(', ':)', ';o(', ';>', ';oD', ':)', ':D']));

// let value = 'z'.charCodeAt(0) - 96;

// function high(x) {
//   return x.split(' ').reduce(
//     (highWord, word) => {
//       let wordLength = word
//         .split('')
//         .reduce((total, letter) => (total += letter.charCodeAt(0) - 96), 0);
//       if (highWord[1] < wordLength) {
//         highWord.splice(0, 2, word, wordLength);
//       }
//       return highWord;
//     },
//     ['', 0]
//   )[0];
// }
// console.log(high('abad root focus'));

// const sum = (a, b) => a + b;
// function mult(a, b) {
//   return a * b;
// }

// function calc(a, b, operation) {
//   return operation(a, b);
// }

// console.log(calc(2, 3, sum));
// console.log(calc(2, 3, mult));

// вкладки – це масив заголовків до кожного сайту, відкритого у вікні
// class Window {
//   constructor(tabs) {
//     this.tabs = tabs;
//   }

//   join(otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
//   }

//   tabOpen(newTab) {
//     this.tabs.push(newTab);
//     return this;
//   }

//   tabClose(index) {
//     this.tabs.splice(index, 1);
//     return this;
//   }
// }

// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //

// console.log('workWindow', workWindow);
// console.log('socialWindow', socialWindow);
// console.log('videoWindow', videoWindow);

// const finalTabs = socialWindow
//   .tabOpen('Root')
//   .join(videoWindow.tabClose(2))
//   .join(workWindow.tabClose(1).tabOpen('Toor'));

// console.log(finalTabs.tabs);

// [
//   'FB',
//   'Gitter',
//   'Reddit',
//   'Twitter',
//   'Medium',
//   'new tab',
//   'Netflix',
//   'YouTube',
//   'Vine',
//   'GMail',
//   'Work mail',
//   'Docs',
//   'freeCodeCamp',
//   'new tab',
// ];

// Глобальна змінна
// const bookList = [
//   'The Hound of the Baskervilles',
//   'On The Electrodynamics of Moving Bodies',
//   'Philosophiæ Naturalis Principia Mathematica',
//   'Disquisitiones Arithmeticae',
// ];

// // Змініть код під цим рядком
// function add(bookList, bookName) {
//   const newArray = [...bookList];
//   newArray.push(bookName);
//   return newArray;

//   // Змініть код над цим рядком
// }

// // Змініть код під цим рядком
// function remove(bookName) {
//   const book_index = bookList.indexOf(bookName);
//   if (book_index >= 0) {
//     bookList.splice(book_index, 1);
//     return bookList;

//     // Змініть код над цим рядком
//   }
// }

// console.log(add(bookList, 'A Brief History of Time'));

// Глобальна змінна
// const watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     Rated: 'PG-13',
//     Released: '16 Jul 2010',
//     Runtime: '148 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer: 'Christopher Nolan',
//     Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
//     Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
//     Language: 'English, Japanese, French',
//     Country: 'USA, UK',
//     Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.8',
//     imdbVotes: '1,446,708',
//     imdbID: 'tt1375666',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     Rated: 'PG-13',
//     Released: '07 Nov 2014',
//     Runtime: '169 min',
//     Genre: 'Adventure, Drama, Sci-Fi',
//     Director: 'Christopher Nolan',
//     Writer: 'Jonathan Nolan, Christopher Nolan',
//     Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: 'English',
//     Country: 'USA, UK',
//     Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.6',
//     imdbVotes: '910,366',
//     imdbID: 'tt0816692',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     Rated: 'PG-13',
//     Released: '18 Jul 2008',
//     Runtime: '152 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
//     Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
//     Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
//     Language: 'English, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
//     Metascore: '82',
//     imdbRating: '9.0',
//     imdbVotes: '1,652,832',
//     imdbID: 'tt0468569',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     Rated: 'PG-13',
//     Released: '15 Jun 2005',
//     Runtime: '140 min',
//     Genre: 'Action, Adventure',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
//     Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
//     Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
//     Language: 'English, Urdu, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
//     Metascore: '70',
//     imdbRating: '8.3',
//     imdbVotes: '972,584',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     Rated: 'PG-13',
//     Released: '18 Dec 2009',
//     Runtime: '162 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'James Cameron',
//     Writer: 'James Cameron',
//     Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
//     Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
//     Language: 'English, Spanish',
//     Country: 'USA, UK',
//     Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
//     Metascore: '83',
//     imdbRating: '7.9',
//     imdbVotes: '876,575',
//     imdbID: 'tt0499549',
//     Type: 'movie',
//     Response: 'True',
//   },
// ];

// // Змініть код лише під цим рядком

// const ratings = watchList.map(i => (i = { title: i.Title, rating: i.imdbRating }));

// // Змініть код лише над цим рядком

// console.log(ratings);
// // title: watchList[i]['Title'], rating: watchList[i]['imdbRating']

// function add(a, i, array) {
//   return (a = i * 2);
// }

// Array.prototype.myMap = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i += 1) {
//     newArray.push(callback(this[i], i, this));
//   }

//   return newArray;
// };

// const newArray = [1, 3, 5];
// console.log(newArray.__proto__);

// console.log(newArray.myMap(add));

// Глобальна змінна
// const watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     Rated: 'PG-13',
//     Released: '16 Jul 2010',
//     Runtime: '148 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer: 'Christopher Nolan',
//     Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
//     Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
//     Language: 'English, Japanese, French',
//     Country: 'USA, UK',
//     Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.8',
//     imdbVotes: '1,446,708',
//     imdbID: 'tt1375666',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     Rated: 'PG-13',
//     Released: '07 Nov 2014',
//     Runtime: '169 min',
//     Genre: 'Adventure, Drama, Sci-Fi',
//     Director: 'Christopher Nolan',
//     Writer: 'Jonathan Nolan, Christopher Nolan',
//     Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: 'English',
//     Country: 'USA, UK',
//     Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.6',
//     imdbVotes: '910,366',
//     imdbID: 'tt0816692',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     Rated: 'PG-13',
//     Released: '18 Jul 2008',
//     Runtime: '152 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
//     Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
//     Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
//     Language: 'English, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
//     Metascore: '82',
//     imdbRating: '9.0',
//     imdbVotes: '1,652,832',
//     imdbID: 'tt0468569',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     Rated: 'PG-13',
//     Released: '15 Jun 2005',
//     Runtime: '140 min',
//     Genre: 'Action, Adventure',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
//     Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
//     Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
//     Language: 'English, Urdu, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
//     Metascore: '70',
//     imdbRating: '8.3',
//     imdbVotes: '972,584',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     Rated: 'PG-13',
//     Released: '18 Dec 2009',
//     Runtime: '162 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'James Cameron',
//     Writer: 'James Cameron',
//     Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
//     Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
//     Language: 'English, Spanish',
//     Country: 'USA, UK',
//     Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
//     Metascore: '83',
//     imdbRating: '7.9',
//     imdbVotes: '876,575',
//     imdbID: 'tt0499549',
//     Type: 'movie',
//     Response: 'True',
//   },
// ];

// function getRating(watchList) {
//   // Змініть код лише під цим рядком
//   let averageRating;

//   averageRating = watchList
//     .filter(value => value.Director === 'Christopher Nolan')
//     .reduce((average, value, index, array) => {
//       average += Number(value.imdbRating);
//       if (index === array.length - 1) {
//         average = average / (index + 1);
//         return average;
//       }
//       return average;
//     }, 0);

//   // Змініть код лише над цим рядком
//   return averageRating;
// }

// console.log(getRating(watchList));

// function splitify(str) {
//   // Змініть код лише під цим рядком

//   return str.split(/\W/);

//   // Змініть код лише над цим рядком
// }

// console.log(splitify('Hello World,I-am code'));

// function sentensify(str) {
//   // Змініть код лише під цим рядком

//   return str.split('-').join(' ');

//   // Змініть код лише над цим рядком
// }

// console.log(sentensify('May-the-force-be-with-you'));

// Змініть код лише під цим рядком
// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .split(/\W+/)
//     .filter(value => value !== '')
//     .join('-');
// }
// // Змініть код лише над цим рядком
// console.log(urlSlug(' Winter Is  Coming'));

// function booWho(bool) {
//   return Boolean(bool);
// }

// console.log(booWho(null));

// function bouncer(arr) {
//   return [...arr].filter(value => Boolean(value));
// }

// console.log(bouncer([7, 'ate', '', false, 9]));

// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split('')
//     .every(value => arr[0].toLowerCase().includes(value));
// }

// console.log(mutation(['Mary', 'Army']));

// function chunkArrayInGroups(arr, size) {
//   const newArray = [];

//   for (let i = 0; arr.slice(i * size, size + i * size).length > 0; i += 1) {
//     newArray.push(arr.slice(i * size, size + i * size));
//   }
//   return newArray;
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 5));

// function frankenSplice(arr1, arr2, n) {
//   const newArr = [...arr2];
//   newArr.splice(n, 0, ...arr1);
//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function getObj(str) {
//   return str.split('').reduce((acc, item) => {
//     if (acc.hasOwnProperty(item)) {
//       acc[item] += 1;
//       return acc;
//     }
//     acc[item] = 1;
//     return acc;
//   }, {});
// }

// console.log(getObj('djfhdskshfhjsdfdsnlsfhkjkj'));

// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// const result = [...mySet];
// console.log(result);

// console.log(Set.prototype);

// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(value => {
//       const result = value.split('');
//       result.splice(0, 1, result[0].toUpperCase());
//       return result.join('');
//     })
//     .join(' ');
// }

// console.log(titleCase('sHoRt AnD sToUt'));

// function findElement(arr, func) {
//   return arr.find(num => func(num));
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// function repeatStringNumTimes(str, num) {
//   let newStr = '';
//   if (num > 0) {
//     for (let i = 0; i < num; i += 1) {
//       newStr += str;
//     }
//     return newStr;
//   }

//   return '';
// }

// console.log(repeatStringNumTimes('abc', 3));

// function confirmEnding(str, target) {
//   for (let i = 1; i <= target.length; i += 1) {
//     if (target[target.length - i] !== str[str.length - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(confirmEnding('Bastian', 'an'));

// function largestOfFour(arr) {
//   return arr.reduce((acc, itemArr) => {
//     acc.push(Math.max(...itemArr));
//     return acc;
//   }, []);
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// function palindrome(str) {
//   const directStr = str
//     .toLowerCase()
//     .match(/[A-Za-z0-9]/g)
//     .join('');

//   return (
//     directStr ===
//     str
//       .toLowerCase()
//       .match(/[A-Za-z0-9]/g)
//       .reverse()
//       .join('')
//   );
// }

// console.log(palindrome('0_0 (: /- :) 0-0'));

// class Roman {
//   constructor({ M, CM, D, CD, С, XC, L, XL, X, IX, V, IV, I }) {
//     this.M = M;
//     this.CM = CM;
//     this.D = D;
//     this.CD = CD;
//     this.С = С;
//     this.XC = XC;
//     this.L = L;
//     this.XL = XL;
//     this.X = X;
//     this.IX = IX;
//     this.V = V;
//     this.IV = IV;
//     this.I = I;
//   }
// }

// const tableRoman = new Roman({
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   С: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// });

// const tableRoman = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

// function convertToRoman(num) {
//   let romanDigit = '';

//   while (num > 0) {
//     for (let key in tableRoman) {
//       if (num < tableRoman[key]) {
//         continue;
//       }
//       romanDigit += key;
//       num -= tableRoman[key];
//       break;
//     }
//   }

//   return romanDigit;
// }

// console.log(convertToRoman(643));
// DCXLIX

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 2;

// // Змініть код лише над цим рядком
// let beagle = new Dog('Snoopy');

// console.log(beagle);
// console.log(Dog.prototype);

// function sumAll(arr) {
//   let sum = 0;

//   if (arr[0] > arr[1]) {
//     arr.reverse();
//   }

//   for (let i = arr[0]; i <= arr[1]; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumAll([1, 4]));

// function diffArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((acc, item, index, array) => {
//     if (array.indexOf(item) === array.lastIndexOf(item)) {
//       acc.push(item);
//       return acc;
//     }
//     return acc;
//   }, []);
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function destroyer(arr) {
//   const otherArr = [...arguments];
//   otherArr.splice(0, 1);

//   return arr.filter(item => !otherArr.includes(item));
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// function whatIsInAName(collection, source) {
//   return collection.filter(item => {
//     for (const key in source) {
//       if (source[key] !== item[key]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// console.log(
//   whatIsInAName([{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }, { bat: 2 }], {
//     apple: 1,
//     bat: 2,
//   })
// );

//  має повертати [{ "apple": 1, "bat": 2, "cookie": 2 }].

// function spinalCase(str) {
//   const arr = str.split('');
//   const newStr = [arr[0]];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (/[_]|[-]|\s/.test(arr[i])) {
//       newStr.push('-');
//     } else if (/[A-Z]/.test(arr[i]) && !/[_]|[-]|\s/.test(arr[i - 1])) {
//       newStr.push('-', arr[i]);
//     } else {
//       newStr.push(arr[i]);
//     }
//   }
//   return newStr.join('').toLowerCase();
// }

// console.log(spinalCase('TeletuBbies say Eh-oh'));

// //   if (arrLetter[i] === arrLetter[i].toUpperCase()) {
// //     acc.push(item.slice(0, i));
// //     acc.push(item.slice(i));
// //     return acc;
// //   }
// // }
// // acc.push(item);
// // return acc;

// // console.log(!/[_]|[-]|\s/.test('-'));

// console.log(/[a-z]/.test('d'));

// function myReplace(str, before, after) {
//   if (before[0] === before[0].toUpperCase()) {
//     after = after.replace(after[0], after[0].toUpperCase());
//   } else {
//     after = after.replace(after[0], after[0].toLowerCase());
//   }
//   return str.replace(before, after);
// }

// console.log(myReplace('I think we should look up there', 'up', 'Down'));

// class Dna {
//   constructor({ A, T, C, G }) {
//     this.A = A;
//     this.T = T;
//   }

//   addPair(letter, pair) {
//     this[letter] = pair;
//   }
// }

// const objDna = new Dna({ A: ['A', 'T'], T: ['T', 'A'] });

// objDna.addPair('C', ['C', 'G']);
// objDna.addPair('G', ['G', 'C']);

// console.log(objDna);

// function pairElement(str) {
//   return str.split('').map(letter => (letter = objDna[letter]));
// }

// console.log(pairElement('ATCGA'));

// function uniteUnique(arr) {
//   return [...arguments]
//     .flatMap(item => item)
//     .filter((item, index, array) => array.indexOf(item) === index);
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function sumFibs(num) {
//   const arr = [0, 1];

//   for (let i = 1; arr[i] + arr[i - 1] <= num && num !== 1; i += 1) {
//     arr.push(arr[i] + arr[i - 1]);
//   }
//   console.log(arr);

//   return arr.reduce((acc, item) => (item % 2 !== 0 ? (acc += item) : acc), 0);
// }

// console.log(sumFibs(75025));

// 0, 1, 1, 2, 3, 5 і 8.

// 135 721

// function sumPrimes(num) {
//   let sum = 0;
//   let simpleNum = 0;

//   for (let i = 2; i <= num; i += 1) {
//     for (let j = 1; j < i; j += 1) {
//       if (i % j === 0 && j !== 1) {
//         simpleNum = 0;
//         break;
//       }
//       simpleNum = i;
//     }
//     sum += simpleNum;
//   }

//   return sum;
// }

// console.log(sumPrimes(977));

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '16px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.dir(event.currentTarget);
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector('.log-list');
// let keypressCounter = 1;

// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// clearLogBtn.addEventListener('click', reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML('afterbegin', markup);

//   if (type === 'keyup') {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = '';
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// setOutput();

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;
//   console.dir(select);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });
// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth';
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// const a = {
//   s: 23,
// };

// function b() {}

// const c = 5;

// console.dir(c.__proto__);

// class Class {
//   static num = 0;
//   static getNumber() {
//     return this.num ? (this.num *= 2) : (this.num = 1);
//   }
// }

// console.log(Class.getNumber());
// console.log(Class.getNumber());
// console.log(Class.getNumber());

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }

// (fives * 5 + tens * 10 + twenties * 20)
// .reduce((nameStudent, item, index, array) => {
//     const { name, fives, tens, twenties } = item;
//   }, []);

// function mostMoney(students) {
//   const nameStudent = students
//     .map(({ name, fives, tens, twenties }) => [name, fives * 5 + tens * 10 + twenties * 20])
//     .sort(
//       (a, b) =>
//         b.fives * 5 + b.tens * 10 + b.twenties * 20 - (a.fives * 5 + a.tens * 10 + a.twenties * 20)
//     );

//   if (
//     nameStudent.every((item, index, array) => array[0][1] === item[1]) &&
//     nameStudent.length > 1
//   ) {
//     return 'all';
//   }
//   return nameStudent[0][0];
// }

// function mostMoney(s) {
//   s.sort((x, y) => sum(y) - sum(x));
//   if (s.length > 1 && sum(s[0]) == sum(s[1])) return 'all';
//   return s[0].name;
// }

// const sum = s => s.fives * 5 + s.tens * 10 + s.twenties * 20;

// console.log(mostMoney([{ name: 'Andy', fives: 0, tens: 0, twenties: 2 }]));

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// console.log(Person.prototype);

// Person.prototype.name = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// const bogdan = new Person('Bogdan', 'Protasenko');

// console.log(bogdan.name());

// function generateName() {
//   const array = [];

//   do {
//     array.splice(0);
//     for (let i = 0; i <= 1; i += 1) {
//       array.push(String.fromCodePoint(Math.floor(Math.random() * (90 - 65) + 65)));
//     }
//     console.log(array.join(''));
//   } while (array.join('') === 'AA');
//   return array.join('');
// }

// console.log(generateName());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Shark extends Animal {
//   constructor(name, age, status, legs = 0, species = 'shark') {
//     super(name, age, legs, species, status);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status, legs = 4, species = 'cat') {
//     super(name, age, legs, species, status);
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 12, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }

// const cat1 = new Dog('Tom', 23, 'married', 'Bogdan');
// console.log(cat1);
// console.log(cat1.greetMaster());

// function dropElements(arr, func) {
//   return arr.reduce((acc, item) => {
//     if (!func(item) && acc.length === 0) {
//       return acc;
//     }
//     acc.push(item);
//     return acc;
//   }, []);
// }

// console.log(
//   dropElements([1, 2, 3, 9, 2], function (n) {
//     return n > 2;
//   })
// );

// function steamrollArray(arr) {
//   const newArray = [];

//   arr.forEach(item => {
//     if (!Array.isArray(item)) {
//       newArray.push(item);
//     } else {
//       return newArray.push(...steamrollArray(item));
//     }
//   });

//   return newArray;
// }

// console.log(steamrollArray([1, [], [3, [[4]]]]));

// console.log(String.fromCharCode(65, 68, 67));

// console.log(parseInt('01000001', 2));

// function binaryAgent(str) {
//   return String.fromCharCode(...str.split(' ').map(item => parseInt(item, 2)));
// }

// console.log(
//   binaryAgent(
//     '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
//   )
// );

// function truthCheck(collection, pre) {
//   return collection.every(item => item[pre]);
// }

// console.log(
//   truthCheck(
//     [
//       { name: 'Pikachu', number: 25, caught: 3 },
//       { name: 'Togepi', number: 175, caught: 1 },
//     ],
//     'number'
//   )
// );

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;

//   return arr.map(({ name, avgAlt }) => ({
//     name,
//     orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM)),
//   }));
// }

// console.log(
//   orbitalPeriod([
//     { name: 'iss', avgAlt: 413.6 },
//     { name: 'hubble', avgAlt: 556.7 },
//     { name: 'moon', avgAlt: 378632.553 },
//   ])
// );

// function rot13(str) {
//   return str
//     .split('')
//     .map(item => {
//       if (item.codePointAt() < 65 || item.codePointAt() > 90) {
//         return item;
//       } else if (item.codePointAt() - 12 > 65) {
//         return (item = String.fromCharCode(item.codePointAt() - 13));
//       } else {
//         return (item = String.fromCharCode(90 - (65 - (item.codePointAt() - 12))));
//       }
//     })
//     .join('');
// }

// // console.log(rot13('SERR CVMMN!'));

// function telephoneCheck(str) {
//   return /\(/.test(str);
// }

// console.log(telephoneCheck('()'));

// // \(?(?:\d{2,3})\)

// function checkCashRegister(price, cash, cid) {
//   class Register {
//     constructor(ONEHUNDRED, TWENTY, TEN, FIVE, ONE, QUARTER, DIME, NICKEL, PENNY) {
//       this.ONEHUNDRED = ['ONE HUNDRED', 100, Number((ONEHUNDRED / 100).toFixed())];
//       this.TWENTY = ['TWENTY', 20, Number((TWENTY / 20).toFixed())];
//       this.TEN = ['TEN', 10, Number((TEN / 10).toFixed())];
//       this.FIVE = ['FIVE', 5, Number((FIVE / 5).toFixed())];
//       this.ONE = ['ONE', 1, Number((ONE / 1).toFixed())];
//       this.QUARTER = ['QUARTER', 0.25, Number((QUARTER / 0.25).toFixed())];
//       this.DIME = ['DIME', 0.1, Number((DIME / 0.1).toFixed())];
//       this.NICKEL = ['NICKEL', 0.05, Number((NICKEL / 0.05).toFixed())];
//       this.PENNY = ['PENNY', 0.01, Number((PENNY / 0.01).toFixed())];
//     }

//     toGiveMoney(cash, price, totalReg) {
//       const arrayChange = [];
//       let change = cash - price;

//       for (const key in this) {
//         let toGive = 0;
//         const qnt = this[key][2];
//         const banknote = this[key][1];

//         if (change > banknote && this[key][2] > 0) {
//           for (let i = qnt; i > 0 && change >= banknote; i -= 1) {
//             toGive = toGive + banknote;
//             change = (change - banknote).toFixed(2);
//           }
//           if (key === 'PENNY' && change > 0) {
//             return arrayChange;
//           }
//           arrayChange.push([key, Number(toGive.toFixed(2))]);
//         } else if (totalReg === cash - price) {
//           arrayChange.push([this[key][0], this[key][2]]);
//         }
//       }
//       return arrayChange;
//     }
//   }

//   const tempRegister = new Register(...cid.reverse().map(item => item[1]));
//   const sumRegister = cid.reduce((acc, item) => (acc += item[1]), 0);
//   const arrayChange = tempRegister.toGiveMoney(cash, price, sumRegister);

//   if (!arrayChange.length) {
//     return { status: 'INSUFFICIENT_FUNDS', change: arrayChange };
//   } else if (cash - price === sumRegister) {
//     return { status: 'CLOSED', change: [...arrayChange.reverse()] };
//   } else {
//     return { status: 'OPEN', change: [...arrayChange] };
//   }
// }

// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );

// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

//  DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONEHUNDRED;

// function twoSum(numbers, target) {
//   let indexJ = -1;
//   const array = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     for (let j = i + 1; j < numbers.length; j += 1) {
//       if (numbers[i] + numbers[j] === target) {
//         indexJ = j;
//         break;
//       }
//     }
//     if (indexJ > 0) {
//       array.push(indexJ, i);
//       return array;
//     }
//   }
// }

// console.log(
//   twoSum(
//     [
//       -502, 8, -276, -879, 980, -882, -726, -323, 951, -504, -958, -155, 582, 759, -594, 815, 535,
//       -409, -302, -97, -613, -442, 528, 792, 260, -426, -443, 422, -102, 71, -630, -461, -396, 858,
//       -934, 870, -680, -789, 188, 75, 603, -743,
//     ],
//     -166
//   )
// );

// const REQUIRED_ELEMENTS = ['H', 'O', 'N', 'C', 'P', 'Ca'];

// function bestPlanet(solarSystem, maxSize) {
//   const getBestPlanet = solarSystem
//     .map(item => item.split('_'))
//     .filter(item => {
//       const arrayElements = item[0].split('');
//       for (let i = 0; i < arrayElements.length; i += 1) {
//         if (arrayElements[i] !== arrayElements[i].toUpperCase()) {
//           arrayElements.splice(i - 1, 1, arrayElements[i - 1] + arrayElements[i]);
//           arrayElements.splice(i, 1);
//         }
//       }

//       return item[1] <= maxSize && REQUIRED_ELEMENTS.every(item => arrayElements.includes(item));
//     });

//   return getBestPlanet.length > 0 ? getBestPlanet.sort((a, b) => b[1] - a[1])[0].join('_') : '';
// }

// console.log(bestPlanet(['OHNCCaP_100', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OHNCCaP_225'], 250));

// function minMax(arr) {
//   return [arr.sort((a, b) => a - b)[0], arr.sort((a, b) => b - a)[0]];
// }

// console.log(minMax([1]));

// function capitalizeWord(word) {
//   return word.replace(word[0], word[0].toUpperCase());
// }

// console.log(capitalizeWord('bogdan'));

// function getSumOfDigits(integer) {
//   return [...integer.toString().split('')].reduce((sum, item) => (sum += Number(item)), 0);
// }

// console.log(getSumOfDigits(123));

// function generateHashtag(str) {
//   const hStr =
//     '#' +
//     str
//       .split(/\s+/)
//       .map(item => (item !== '' ? item[0].toUpperCase() + item.slice(1) : item))
//       .join('');

//   return hStr === '#' || hStr.length > 140 ? false : hStr;
// }

// console.log(generateHashtag('    Hello     World   '));

// function toUnderscore(string) {
//   return Number(string)
//     ? String(string)
//     : string
//         .split('')
//         .reduce((newArray, item, index) => {
//           if (index > 0 && item === item.toUpperCase() && !Number(item)) {
//             newArray.push('_', item.toLowerCase());
//             return newArray;
//           }
//           newArray.push(item.toLowerCase());
//           return newArray;
//         }, [])
//         .join('');
// }

// function toUnderscore(string) {
//   return string.toString().split(/(?=[A-Z])/);
// }

// console.log(toUnderscore('Movies7AndBooks'));

// function maxZeroSequence(arr) {
//   let longestArr = [];
//   let tempArr = [];
//   let sum = 0;

//   for (let j = 0; j < arr.length; j += 1) {
//     tempArr = [];
//     sum = 0;
//     for (let i = j; i < arr.length; i += 1) {
//       sum += arr[i];
//       tempArr.push(arr[i]);

//       if (!sum && longestArr.length <= tempArr.length) {
//         longestArr = [];
//         longestArr.push(...tempArr);
//       }
//     }
//   }

//   return longestArr;
// }

// console.log(
//   maxZeroSequence([
//     12, -42, 78, -18, 44, 96, -17, -22, 56, -87, 89, -91, -19, 7, -38, -44, -12, 34, 25, -75, -4,
//     26, 80, 75, 6, -2, 0, -27, -16, -38, -23, 85, 24, -43, -24, 5, 66, 21, 8, -67, -5, -18, 12, -98,
//     -43, 61, 54, -49, 6, -42, 7, -55, 49, 96, -32, -52, 78, 40, -79, -25, 32, 94, -85, -28, -24, 44,
//     -2, -61, -75, -16, -7, -14, -30, 64, -20, -49, 73, -77, -92, 62, -54, -90, 10, -76, -5, -1, -94,
//     -72, -53, -77, 17, -43, 7, 18, -45, -55, -70, 42, 87, -39, -95, 94, -74, -78, -88, 11, 80, 13,
//     -19, 25, 14, -68, -74, -6, 42, -64, -8, -22, -63, 94, -83, 57, 26, 20, -62, 34, 83, -16, -96,
//     50, 99, 95, 9, -85, -55, -75, 81, 89, 95, -34, 56, -13, 58, 92, 26, 86, -75, -39, -52, 45, 41,
//     68, 85, 91, -17, -93, 85, 83, 31, 18, -57, -30, -23, -89, -97, -38, 87, -58, -60, -11, 75, 15,
//     15, -48, 7, -3, 80, -58, -4, -70, 82, -2, 45, -15, -18, -31, 5, -53, 12, 8, 85, -41, 92, -99,
//     -73, -28, 4, -94, -32, -9, 79, -39, -28, 99, 45, 39,
//   ])
// );

// [-13, 58, 92, 26, 86, -75, -39, -52, 45, 41, 68, 85, 91, -17, -93, 85, 83, 31, 18, -57, -30, -23, -89, -97, -38, 87, -58, -60, -11, 75, 15, 15, -48, 7, -3, 80, -58, -4, -70, 82, -2, 45, -15, -18, -31, 5, -53, 12, 8, 85, -41, 92, -99, -73, -28, 4, -94, -32]

// function search(n, root) {
//   console.log(n);
//   console.log(root);
// }

// const n = 444;
// const root = Node {
//   value: 666,
//   left: Node { value: 555, left: null, right: null },
//   right: Node { value: 444, left: null, right: null }
// }
//     console.log(search(n, root));

// function maxSum(root) {
//   console.log(root.value);
//   maxSum();

//   return;
// }

// const root = {
//   value: 5,
//   left: {
//     value: -22,
//     left: { value: 9, left: undefined, right: undefined },
//     right: { value: 50, left: undefined, right: undefined },
//   },
//   right: {
//     value: 11,
//     left: { value: 9, left: undefined, right: undefined },
//     right: { value: 2, left: undefined, right: undefined },
//   },
// };

// console.log(maxSum(root));

// //     17
// //    /  \
// //   3   -10
// //  /    /  \
// // 2    16   1
// //          /
// //         13

// function scramble(str1, str2) {
//   let alph = str1.split('').reduce((p, c) => {
//     return (p[c] = (p[c] || 0) + 1), p;
//   }, {});

//   return str2.split('').every(v => alph[v]-- > 0);
// }

// console.log(scramble('scraiptjvx', 'javascript'));

// const root = {
//   value: 5,
//   left: {
//     value: -22,
//     left: { value: 9, left: undefined, right: undefined },
//     right: { value: 50, left: undefined, right: undefined },
//   },
//   right: {
//     value: 11,
//     left: { value: 90, left: undefined, right: undefined },
//     right: { value: 2, left: undefined, right: undefined },
//   },
// };

// function maxSum(root) {
//   if (!root) {
//     return 0;
//   }

//   let tempSum = 0;
//   let sum = null;
//   const rootNumber = root.value;
//   traverseTree(root);

//   function traverseTree(root) {
//     let currentValue;
//     if (!root) {
//       return;
//     }

//     tempSum += root.value;

//     if (!root.left && !root.rigth) {
//       if (tempSum > sum || sum === null) {
//         sum = tempSum;
//       }
//       return root.value;
//     }

//     currentValue = traverseTree(root.left);
//     tempSum -= currentValue;
//     if (root.value === rootNumber) {
//       tempSum = rootNumber;
//     }
//     currentValue = traverseTree(root.right);
//     tempSum -= currentValue;
//     if (root.value === rootNumber) {
//       tempSum = rootNumber;
//     }
//   }
//   return sum;
// }

// function maxSum(root, currentSum) {
//   if (root == null || root == undefined) return 0;
//   if (!currentSum) currentSum = 0;

//   //check left
//   let leftSide = maxSum(root.left);
//   //check right
//   let rightSide = maxSum(root.right);

//   //compare leftSide to rightSide

//   let LR = Math.max(leftSide, rightSide) + root.value;

//   return LR;
// }
// console.log(maxSum(root));

// function firstNonRepeatingLetter(s) {
//   const arrayTemp = s.toLowerCase().split('');

//   return (
//     s
//       .split('')
//       .find(
//         (item, index, array) => array.indexOf(item.toLowerCase()) === arrayTemp.lastIndexOf(item)
//       ) ?? ''
//   );
// }

// console.log(firstNonRepeatingLetter('sTrreeSttS'));

// const newDate = new Date();

// console.dir(newDate.getUTCMinutes());

// Change value of isSuccess variable to call resolve or reject
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// console.dir(
//   promise.then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
// );

//     .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     });
//   }, 2000);
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// function digitize(n) {
//   return n
//     .toString()
//     .split('')
//     .reverse()
//     .map(item => Number(item));
// }

// console.log(digitize(35231));

// const promice = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.map(caalback));

// function caalback(item) {
//   return item * 2;
// }

// const boxNine = document.querySelector('#pixel-to-watch9');

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5,
// };

// const observer = new IntersectionObserver(onLog, options);
// observer.observe(boxNine);

// function onLog(entries) {
//   console.log(entries);

//   if (entries[0].intersectionRatio > 0) {
//     console.log('I am seing object');
//   }
// }

// function searchSumForK(arr, k) {
//   let startNum = 0;
//   let endNum = arr.length - 1;
//   let sum = null;

//   for (let i = 0; i < arr.length; i += 1) {
//     sum = arr[startNum] + arr[endNum];
//     if (sum === k) {
//       break;
//     } else if (sum > k) {
//       endNum -= 1;
//     } else if (sum < k) {
//       startNum += 1;
//     }
//   }
//   return [arr[startNum], arr[endNum]];
// }

// console.log(searchSumForK([-3, -1, 4, 5, 8, 11, 14, 16], 7));

// =====================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// function separateLiquids(glass) {
//   const liquids = {
//     H: 1.36,
//     W: 1.0,
//     A: 0.87,
//     O: 0.8,
//     height: null,
//     weight: null,
//   };

//   liquids.height = glass.length;
//   liquids.weight = glass.length ? glass[0].length : null;
//   const newGlass = [];

//   const smoothy = glass
//     .reduce((acc, item) => {
//       acc.push(...item);
//       return acc;
//     }, [])
//     .sort((a, b) => liquids[a] - liquids[b]);

//   for (let i = 0; i < smoothy.length; i += liquids.weight) {
//     newGlass.push(smoothy.slice(i, liquids.weight + i));
//   }

//   console.log('Smooty', smoothy);

//   return newGlass;
// }

// console.dir(separateLiquids([]));

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s = oears

// function isMerge(s, part1, part2) {
//   const isEmpty = !s && !part1 && !part2;
//   if (isEmpty) {
//     return true;
//   }

//   const firstPart = part1.split('');
//   const secondPart = part2.split('');

//   return s
//     ? s.split('').every(item => {
//         for (let i = 0; i <= firstPart.length; i += 1) {
//           if (item === firstPart[i]) {
//             if (item === secondPart[i]) {
//               secondPart.splice(i, 1);
//               return true;
//             }
//             firstPart.splice(i, 1);
//             return true;
//           }
//         }
//         for (let i = 0; i <= secondPart.length; i += 1) {
//           console.log('i', i);
//           console.log('Item', item);
//           console.log('secondPart[i]', secondPart[i]);
//           console.log(secondPart);
//           if (item === secondPart[i] && i > 0) {
//             return false;
//           } else if (item === secondPart[i]) {
//             secondPart.splice(i, 1);
//             return true;
//           }
//         }
//       })
//     : false;
// }

// console.log(isMerge('codewars', 'cwdr', 'oeas'));

// function solve(s) {
//   let operat = '+';
//   return s.split('');
// }

// console.log(solve('u-(v-w-(x+y)+m)-z'));

// // "u-v+w+x+y-z"

// var s = 'Hello {foo} - {foobar} make me a {bar}... {foo}!!?';
// var o = {
//   bar: 'sandwich {foo}',
//   foo: 'Jack',
// };

// // "Hello Jack - make me a sandwich"

// var format = function (str, { foo, bar }) {
//   str = str.replaceAll('{foo}', foo);
//   str = str.replaceAll('{bar}', bar);
//   return str;
// };
// console.log(format(s, o));

// var wordWrap = function (str) {
//   let path = 24;
//   let i = 2;
//   return str.length === 25
//     ? str
//     : str.split('').map((item, index, array) => {
//         if (index === path + 1 && array[index] === ' ') {
//           console.log('test');
//           path = path + 24;
//           return '\n' + item;
//         }
//         if (index === path) {
//           if (array[index + 1] === ' ') {
//             return item;
//           } else {
//             path = path + 24;
//             return '-\n' + item;
//           }
//         }
//         return item;
//       });
//   // .join('');
// };

// console.log(wordWrap('hWO5X J2 qiLI7 eloo7vaZ5O Cj1YbKk35yK vXV FrRnA  WW0XwM Z'));
// // '1234567890123456789012345\n 1234567890'

// async function fetchUser() {
//   try {
//     const response = await fetch('https://restcountries.com/v3.1/nme/Ukraine');

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchUser();

// const x = false;
// const y = 1;
// const z = 5;

// const result = x && y;

// console.log(result); // false

// const arr = [1, 2, 3, [4, 5, [6, 7]], [8, 9]];
// const arrFlated = [];

// function arrFlat(arraySample) {
//   arraySample.map(item => {
//     if (Array.isArray(item)) {
//       return arrFlat(item);
//     }
//     arrFlated.push(item);
//   });
// }

// arrFlat(arr);

// console.log(arrFlated);

// function logThis() {
//   //   this.desc = 'logger';
//   console.log(this);
// }
// new logThis();

// const arrTest = [
//   {
//     owner: {
//       id: '111',
//       phone: '12-12-12',
//     },
//     isPhone: true,
//   },
//   {
//     owner: {
//       id: '111',
//       phone: '12-12-12',
//     },
//     isPhone: true,
//   },
//   {
//     owner: {
//       id: '222',
//       phone: '12-12-12',
//     },
//     isPhone: true,
//   },

//   {
//     owner: {
//       id: '333',
//       phone: '12-12-12',
//     },
//     isPhone: false,
//   },
//   {
//     owner: {
//       id: '222',
//       phone: '12-12-12',
//     },
//     isPhone: true,
//   },
// ];

// function hendler(arr) {
//   const arrSet = [];
//   return arr.filter(item => {
//     if (arrSet.includes(item.owner.id)) {
//       return false;
//     }
//     arrSet.push(item.owner.id);
//     return item;
//   });
// }

// console.log(hendler(arrTest));

// const arrTest = [
//   {
//     id: '111',
//     phone: 'Kite',

//     isPhone: true,
//   },
//   {
//     id: '111',
//     phone: 'Core',

//     isPhone: true,
//   },
//   {
//     id: '222',
//     phone: 'Sling',

//     isPhone: true,
//   },

//   {
//     id: '333',
//     phone: 'Cab',

//     isPhone: false,
//   },
//   {
//     id: '222',
//     phone: 'Rock',

//     isPhone: true,
//   },
// ];

// function hendler(arr) {
//   const mapSet = new Map();
//   arr.forEach(element => {
//     mapSet.set(element.id, element.phone);
//   });

//   const id = [...mapSet].map(([id, phone]) => id);

//   return id;
// }

// console.log(hendler(arrTest));

// function validator(value, schema) {
//   if (!schema) {
//     return true;
//   }

//   const checks = {
//     type: function (value, check) {
//       if (check !== 'email') {
//         return typeof value === check ? true : `${value} isn't a ${check}`;
//       }
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : `${value} isn't a ${check}`;
//     },

//     minLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `${value} isn't a string`;
//       }
//       return value?.length >= check ? true : `${value} should be more than ${check} symbol`;
//     },

//     maxLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `${value} isn't a string`;
//       }
//       return value?.length <= check ? true : `${value} should be less than ${check} symbol`;
//     },
//   };

//   const typeOfChecks = Object.keys(schema);

//   const isValid = typeOfChecks.reduce((answer, key) => {
//     if (answer !== true) {
//       return answer;
//     }
//     return (answer = checks[key](value, schema[key]));
//   }, true);

//   return isValid;
// }

// const isValid = validator(2, { type: 'number' });

// console.log(isValid);

// const initialFields = {
//   name: {
//     value: '123',
//     error: null,
//     schemaValidation: { type: 'string', minLength: 6 },
//   },
//   email: {
//     value: '456',
//     error: null,
//     schemaValidation: { type: 'email' },
//   },
// };

// const tag = Object.keys(initialFields)
//   .map(key => `test`)
//   .join(' | ');

// console.log(tag);

// class Queue {
//   constructor() {
//     this.queue = {};
//     this.head = 0;
//     this.end = 0;
//   }

//   addToQueue(item) {
//     this.queue[this.end] = item;
//     this.end += 1;
//   }

//   exitFromQueue() {
//     if (!this.isQueueEmpty) {
//       return null;
//     }
//     const exitedItem = this.queue[this.head];
//     delete this.queue[this.head];
//     this.head += 1;
//     return exitedItem;
//   }

//   showQueue() {
//     return this.queue;
//   }

//   isQueueEmpty() {
//     return Object.keys(this.queue).length === 0;
//   }
// }

// const line = new Queue();

// line.addToQueue('Bogdan');
// line.addToQueue('Olek');
// line.addToQueue('Olya');

// line.exitFromQueue();
// line.exitFromQueue();
// line.addToQueue('Roma');

// line.exitFromQueue();

// console.log(line.showQueue());

// class Bank {
//   constructor() {
//     this.clients = new Queue();
//   }

//   addNewClient(name) {
//     this.clients.addToQueue(name);
//   }

//   removeClient() {
//     return this.clients.exitFromQueue();
//   }

//   showLine() {
//     console.log(this.clients.isQueueEmpty());
//     return this.clients.queue;
//   }

//   processedClients() {
//     while (!this.clients.isQueueEmpty()) {
//       console.log(`Processed ${this.removeClient()}`);
//     }
//   }
// }

// const bank = new Bank();

// bank.addNewClient('Bogdan');
// bank.addNewClient('Olya');
// bank.addNewClient('Olek');

// console.log(bank.showLine());

// bank.processedClients();

// class Node {
//   constructor(data = null) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertAtStart(node) {
//     const newNode = new Node(node);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   insertAtEnd(node) {
//     const newNode = new Node(node);

//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let curNode = this.head;

//       while (curNode.next) {
//         curNode = curNode.next;
//       }
//       curNode.next = newNode;
//     }
//   }

//   showList() {
//     let curNode = this.head;

//     while (curNode) {
//       console.log(curNode.data);
//       curNode = curNode.next;
//     }
//   }
// }

// const list = new LinkedList();

// list.insertAtStart(5);
// list.insertAtStart(10);

// console.log(list);

// console.log(list.showList());

// const people = [
//   {
//     name: 'Olek',
//     age: 13,
//   },
//   {
//     name: 'Bogdan',
//     age: 39,
//   },
//   {
//     name: 'Olya',
//     age: 40,
//   },
// ];

// const hasPeople = new Map();

// people.forEach(({ name, age }) => hasPeople.set(name, age));

// console.log(hasPeople);

// console.log(hasPeople.get('Olek'));
// let a = {};
// let b = { key: 'b' };
// let c = { key: 'c' };
// let k = { key: 'c', b: 'r' };

// a[b] = 123;
// a[c] = 456;
// a[k] = 100;
// console.log(a);
// console.log(a[b]);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// const dog = {
//   name: {
//     test: {
//       foor: {
//         name: 'spike',
//       },
//     },
//   },
//   age: 2,
//   weigth: 23,
// };

// const cat = {
//   name: 'spike',
//   age: 2,

//   fn: function () {
//     console.log(this);
//   },

//   arrowFn: () => {
//     console.log(this);
//   },
// };

// const isOwnKey = cat.hasOwnProperty('sds');
// console.log(isOwnKey);

// function test(a) {
//   console.log('this is varieble', a);
//   console.log(this);
// }

// const newFn = test.bind(cat);
// newFn(12);

// console.log(dog);
// console.log(Object.defineProperty(dog, 'name', { writable: false }));
// console.log(Object.getOwnPropertyDescriptors(dog));

// const arr = [1, 2, 3, 4, 5, 6];

// const isArr = arr.find(item => item === 7);

// console.log(isArr);

// const arrowFn = (...arg) => {
//   console.log(arg);
// };

// function fn(...test) {
//   console.log(test);
// }

// arrowFn(12);
// // fn(12);

// function root() {
//   const name = 'Bogdan';

//   return age => {
//     console.log(`${name} has ${age}`);
//   };
// }

// const setAge = root();

// setAge(15);

// function fn(a, b) {
//   if (b) {
//     return a + b;
//   }

//   return c => a + c;
// }

// const test = fn(2);

// console.log(test(10));

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.fn = function () {
//       console.log(this.name);
//     };
//   }

//   showPet() {
//     console.log(this.name);
//   }
// }

// const newPet = new Pet('Spike', 12);

// console.log(newPet);

// newPet.fn();

// const isSuccess = false;

// const newPromise = new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve('Operation is success');
//   } else {
//     reject('Not success');
//   }
// });

// console.log(newPromise);

// newPromise.then(result => console.log(result)).catch(error => console.log(error));

// const fn = img =>
//   new Promise((resolve, reject) => {
//     console.log('Request to backend');
//     setTimeout(() => {
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve(`${img} is here`);
//       } else {
//         reject('reject requiest');
//       }
//     }, 2000);
//   });

// fn('Cat')
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 8, 7];

// const filteredSet = new Set(arr);

// const filteredCustom = arr.filter((item, index, array) => index === array.lastIndexOf(item));

// console.log(1 + '10');

// const obj = {
//   name: 'Hello',
//   fn: function () {
//     const fun = () => {
//       console.log(this.name);
//     };

//     fun();
//   },
// };

// obj.fn();

// const kite = [
//   { name: 'core', size: '12' },
//   { name: 'Sling', size: 10 },
// ];

// const obj = kite.reduce((obj, item) => {
//   obj[item.name] = item;
//   return obj;
// }, {});

// console.log(obj);

// const arr = [1, 2, 3, 4, 5, 6, [3, 4, 5, [1, 2, 3, 4], 4, 5, 6]];
// const newArr = [];

// const flatArr = arr => {
//   arr.forEach(item => {
//     if (!Array.isArray(item)) {
//       newArr.push(item);
//     } else {
//       flatArr(item);
//     }
//   });
// };

// flatArr(arr);

// console.log(newArr);

// const fn = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Success');
//     }, 1000);
//   });

// const asyncFn = async fn => {
//   const result = await fn();
//   console.log(result);
//   return result;
// };
// asyncFn(fn);

// function evenOrOdd(...arr) {
//   const obj = arr.reduce(
//     (obj, num) => (num % 2 === 0 ? { ...obj, even: 'even' } : { ...obj, odd: 'odd' }),
//     { odd: false, even: false }
//   );

//   return `${obj.even ? obj.even : ''}${obj.even && obj.odd ? '/' : ''}${obj.odd ? obj.odd : ''}`;
// }

// console.log(evenOrOdd(3, 2, 4));
// function oddEvenNumber(num) {
//   return [...num.toString()].reduce(
//     (obj, item) => {
//       if (item % 2 === 0) {
//         obj = { ...obj, even: obj.even + 1 };
//       } else {
//         obj = { ...obj, odd: obj.odd + 1 };
//       }
//       return obj;
//     },
//     { odd: 0, even: 0 }
//   );
// }

// console.log(oddEvenNumber(1234)); // { odd: 2, even: 2 }

// return [...str].reduce((obj, item) => {
//   obj[item] = (obj[item] || 0) + 1;
//   return obj;
// }, {});

// const items = [
//   { id: 1, date: '2024-03-01', price: 20 },
//   { id: 2, date: '2024-03-02', price: 30 },
//   { id: 3, date: '2024-03-03', price: 15 },
//   { id: 4, date: '2024-03-02', price: 25 },
// ];

// items.sort((a, b) => {
//   const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime();
//   if (dateComparison !== 0) {
//     return dateComparison;
//   }

//   return a.price - b.price;
// });

// console.log(items);

// const sortObjects = (array, sortProperties) => {
//   const prepSortProp = sortProperties.reduce((arr, item) => {
//     const prop = Object.entries(item)[0];
//     console.log(prop);
//     if (prop[1] === '') {
//       return arr;
//     }

//     prop[1] = prop[1] === 'ascending' ? 1 : -1;

//     return (arr = [...arr, prop]);
//   }, []);

//   console.log('prepSort', prepSortProp);

//   return array.toSorted((a, b) => {
//     for (let prop of prepSortProp) {
//       console.log('a[prop]', a[prop[0]]);
//       console.log('b[prop]', b[prop[0]]);
//       if (a[prop[0]] !== b[prop[0]]) {
//         return a[prop[0]] < b[prop[0]] ? prop[1] * -1 : prop[1];
//       }
//     }
//     return 0;
//   });
// };

// // Пример использования:
// const medicines = [
//   { id: 1, name: 'Medicine A', price: 20, dateAdded: '2024-03-01' },
//   { id: 2, name: 'Medicine B', price: 15, dateAdded: '2024-03-02' },
//   { id: 3, name: 'Medicine C', price: 25, dateAdded: '2024-03-01' },
//   { id: 4, name: 'Medicine A', price: 20, dateAdded: '2024-03-03' },
//   { id: 5, name: 'Medicine C', price: 10, dateAdded: '2024-03-02' },
// ];

// const fav = [1, 3, 4];

// const medicinesFav = medicines.map(item =>
//   fav.includes(item.id) ? { ...item, fav: 0 } : { ...item, fav: 1 }
// );
// console.log(medicinesFav);

// // Сортировка сначала по цене, а затем по дате добавления
// console.log(
//   sortObjects(medicinesFav, [{ fav: 'ascending' }, { price: 'desending' }, { dateAdded: '' }])
// );

// // Сортировка сначала по дате добавления, а затем по цене
// // console.log(sortObjects(medicinesFav, ['fav', 'dateAdded', 'price'])

// const setLowerCase = str => str.toLowerCase();

// const setLastSymbolUpper = str =>
//   [...str]
//     .map((item, index, arr) => (arr.length - 1 !== index ? item : item.toUpperCase()))
//     .join('');

// const compose =
//   (...arrFunc) =>
//   str =>
//     arrFunc.reduce((result, func) => (result = func(result)), str);

// const handleString = compose(setLowerCase, setLastSymbolUpper);

// console.log(handleString('WERTYUIOP'));

// const multiplyNum = (x, y) => {
//   if (x && y) {
//     return x * y;
//   }

//   return z => multiplyNum(x, z);
// };

// console.log(multiplyNum(2)(8));

// білки * 4 + жири * 9 + вуглеводи * 4;

// const calcCallories = (prot, fat) => {
//   return carbon => prot * fat * carbon;
// };

// const calcAll = calcCallories(2, 3);

// console.log(calcAll(10));

// const getData = turn =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (turn === 1) {
//         return resolve('Ok');
//       }
//       reject('Error');
//     }, 2000);
//   });

// getData(0)
//   .then(item => console.log(item))
//   .catch(error => console.log(error));

// const sortBuble = arr => {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     for (let j = 0; j < arr.length - i - 1; j += 1) {
//       if (arr[j] < arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr;
// };

// console.log(sortBuble([2, 5, 6, 2, 1, 4, 8, 5, 4, 4, 0, 7, 5, 7, 9]));

// const sortByInsert = arr => {
//   for (let i = 1; i < arr.length; i += 1) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && key < arr[j]) {
//       arr[j + 1] = arr[j];
//       j -= 1;
//     }
//     arr[j + 1] = key;
//   }

//   return arr;
// };

// console.log(sortByInsert([2, 5, 6, 2, 1, 4, 8, 5, 4, 4, 0, 7, 5, 7, 9]));

// const selectionSort = arr => {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     let minValueIdx = i;

//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[j] < arr[minValueIdx]) {
//         minValueIdx = j;
//       }
//     }

//     [arr[minValueIdx], arr[i]] = [arr[i], arr[minValueIdx]];
//   }

//   return arr;
// };

// console.log(selectionSort([2, 5, 6, 2, 1, 4, 8, 5, 4, 4, 0, 7, 5, 7, 9]));

// function quicksort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[Math.floor(arr.length / 2)];
//   const left = arr.filter(x => x < pivot);
//   const middle = arr.filter(x => x === pivot);
//   const right = arr.filter(x => x > pivot);

//   return [...quicksort(left), ...middle, ...quicksort(right)];
// }

// const result = quicksort([5, 3, 8, 4, 2]);
// console.log(result); // Виведе: [2, 3, 4, 5, 8]

// const binarySearch = (arr, x) => {
//   let mid = null;
//   let startIdx = 0;
//   let endIdx = arr.length - 1;

//   while (startIdx <= endIdx) {
//     mid = Math.floor((endIdx + startIdx) / 2);

//     if (x < arr[mid]) {
//       endIdx = mid - 1;
//     } else if (x > arr[mid]) {
//       startIdx = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };

// console.log(binarySearch([1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 24], 16));

// function isIsogram(str) {
//   return !Boolean(
//     Array.from(str.toLowerCase()).find(
//       (char, _, arr) => arr.indexOf(char) !== arr.lastIndexOf(char)
//     )
//   );
// }

// console.log(isIsogram('Dermatoglyphics'));

// const transformArr = arr => {
//   return arr.reduce((obj, item) => {
//     if (item.age > 17) {
//       if (!obj[item.groupId]) {
//         obj[item.groupId] = [];
//       }
//       obj[item.groupId] = [...obj[item.groupId], item];
//       return obj;
//     }

//     return obj;
//   }, {});
// };

// console.log(
//   transformArr([
//     { name: 'Bogdan', age: 39, groupId: 1 },
//     { name: 'Olya', age: 40, groupId: 1 },
//     { name: 'Olek', age: 14, groupId: 2 },
//     { name: 'Olek23', age: 23, groupId: 2 },
//   ])
// );

// const customMap = (arr, callback) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = callback(arr[i]);
//   }

//   return arr;
// };

// const multiply = num => num * 2;

// console.log(customMap([1, 4, 2, 6, 3, 9], multiply));

// const isPolindrom = str => {
//   str = str.toLowerCase().replaceAll(' ', '');

//   return str === Array.from(str).reverse().join('');
// };

// console.log(isPolindrom('Never odd or even'));

// const users = [
//   { id: 'id1a', name: 'Livvi Doe', location: 'Michigan' },
//   { id: 'id2b', name: 'Jane Doe', location: 'Alabama' },
//   { id: 'id3c', name: 'Sean Doe', location: 'Michigan' },
//   { id: 'id4d', name: 'Kate Doe', location: 'California' },
// ];
// const online = [
//   { id: 'id1a', isOnline: false },
//   { id: 'id3c', isOnline: true },
//   { id: 'id5e', isOnline: false },
//   { id: 'id4d', isOnline: true },
// ];

// const isOnline = (users, arrOnline) => {
//   const arrIdOnline = arrOnline.reduce((acc, { id, isOnline }) => {
//     if (isOnline) {
//       acc = [...acc, id];
//       return acc;
//     }
//     return acc;
//   }, []);
//   return users.filter(({ id }) => arrIdOnline.includes(id));
// };

// console.log(isOnline(users, online));

// const rangeSum = (x, y) => {
//   if (x === y) {
//     return x;
//   }

//   return x + rangeSum(x + 1, y);
// };

// console.log(rangeSum(5, 10));

// function removeDuplicate(arr) {
//   // Your implementation here

//   return arr.filter((item, index, arr) => index === arr.lastIndexOf(item));
// }

// console.log(removeDuplicate([1, 1, 1, 2, 3, 3]));

// const fetchData = async path =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path === 'getPath1') {
//         resolve('dataPath1');
//       } else if (path === 'getPath2') {
//         resolve('dataPath2');
//       } else {
//         reject('error');
//       }
//     }, 1000);
//   });

// const memoFn = fetchFn => {
//   const store = {};
//   return async path => {
//     if (!store[path]) {
//       const data = await fetchFn(path);
//       store[path] = data;
//       console.log('this is fetch', store);
//       return data;
//     } else {
//       console.log('this is casch', store);
//       return store[path];
//     }
//   };
// };

// const memorizedFetch = memoFn(fetchData);

// console.log(memorizedFetch);

// const fetching = async () => {
//   const data = await memorizedFetch('getPath1');
//   console.log(data);
//   const data2 = await memorizedFetch('getPath2');
//   console.log(data2);
// };

// fetching();

// const fib = (n, memo) => {
//   memo = memo || {};

//   if (memo[n]) {
//     return memo[n];
//   }

//   if (n <= 1) {
//     return 1;
//   }

//   return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
// };

// console.log(fib(8));

// const fetchData = async path =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path === 'path1') {
//         resolve('dataFromBase');
//       } else {
//         reject('error');
//       }
//     }, 1000);
//   });

// const memoFn = fn => {
//   const cash = {};

//   return async key => {
//     if (!cash[key]) {
//       const data = await fn(key);
//       cash[key] = data;
//       return data;
//     } else {
//       console.log('cash');
//       return cash[key];
//     }
//   };
// };

// const fetching = async () => {
//   const memorizedFetch = memoFn(fetchData);

//   const data = await memorizedFetch('path1');
//   console.log(data);

//   const data2 = await memorizedFetch('path1');
//   console.log(data2);

//   const data3 = await memorizedFetch('path1');
//   console.log(data3);
// };

// fetching();

// const source = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// const handleDublicate = arr => arr.filter((item, idx, arr) => idx !== arr.lastIndexOf(item));

// console.log(handleDublicate(source));

// async function asyncObjectMap(obj, callback) {
//   const keysArr = Object.keys(obj);
//   const newObj = {};

//   for (const key of keysArr) {
//     newObj[key] = await callback(obj[key]);
//   }

//   return newObj;
// }

// const fn = async () => {
//   const data = await asyncObjectMap({ qwe: 123, fds: 32 }, async x => x * 2);
//   console.log(data);
// };

// fn();

// => { qwe: 246, fds: 64 }

function findPath(mountain) {
  const mClone = [...mountain];
  const height = mClone.length - 1;

  for (let level = height - 1; level >= 0; level -= 1) {
    mClone[level] = mClone[level].map(
      (path, idx) =>
        path +
        Math.max(
          !isNaN(mClone[level + 1][idx]) ? mClone[level + 1][idx] : 0,
          !isNaN(mClone[level + 1][idx + 1]) ? mClone[level + 1][idx + 1] : 0
        )
    );
  }

  return mClone[0][0];
}

console.log(findPath([[6], [7, 10], [12, 11, 9], ['d', 25, 13, 14]]));
