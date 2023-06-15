//---------------------------------------- LESSON 2 --------------------------------------------
//TASK-1
//патерн «раннє повернення»

// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     }
//     return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//TASK-2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
//     return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//TASK-3
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return  "Your order is empty!";
//     } else if (available < ordered) {
//         return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//TASK-4
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

//TASK-5
//Для доступу до значення елемента масиву
// застосовують синтаксис квадратних дужок масив[індекс]
// console.log(fruits[0]);

//const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// //const lastElement = fruits[3];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

//TASK-6
//На відміну від рядків, елементи масиву можна змінювати,
//звернувшись до них за індексом і присвоївши інше значення.

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

//TASK-7
//присвой зміній fruitsArrayLength довжину масиву fruits,
//використовуючи властивість length

// const fruits = ["apple", "plum", "pear", "orange"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

//TASK-8
// Використовуючи формулу довжина_масиву - 1,
// можна отримати значення останнього елемента масиву довільної довжини.

// const fruits = ["apple", "plum", "pear", "orange"];
// const lastElementIndex = fruits.length - 1;
// //const lastElement = fruits[fruits.length - 1];
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//TASK-9
// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     return [firstElement, lastElement];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//TASK-10
//split(delimiter) дозволяє перетворити рядок на масив,
//"розбивши" його по роздільнику delimiter.

// function splitMessage(message, delimiter) {
//     let words = message.split(delimiter);
//     return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//TASK-11
// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" "); //розділили на масив окремих слів
//     const wordsCount = words.length; //дізнались довжину масива(кількість елементів)
//     const calc = wordsCount * pricePerWord; // кількість елементів * на ціну за слово
//     return calc;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

//TASK-12
//join(delimiter) дозволяє з'єднати елементи масиву в рядок.

// function makeStringFromArray(array, delimiter) {
//     let string = array.join(delimiter);
//     return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log( makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//TASK-13
//Термін slug - це людино-зрозумілий унікальний ідентифікатор,
//який використовується у веб - розробці для створення читабельних URL - адрес.
//Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
//наприклад, не mysite.com/posts/1q8fh74tx, а mysite.com/posts/arrays-for-begginers.

// function slugify(title) {
//     let string = title.split(" ").join("-");
//     let register = string.toLowerCase();
//     return register;

//     // let string = title.toLowerCase().split(" ");
//     // return string.join("-");
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//TASK-14
//Метод slice(begin, end) повертає новий масив, що містить
//копію частини вихідного масиву, не змінюючи його.

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//TASK-15
//Метод concat використовується для об'єднання двох або більше масивів.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//TASK-16
// function makeArray(firstArray, secondArray, maxLength) {
//     let newArray = firstArray.concat(secondArray); //з'єднали два масиви в один
//     if (newArray.length > maxLength) { //якщо довжина масиву newArray більша за значення maxLength, то
//         return newArray.slice(0, maxLength); //поверни обрізаний newArray (від 0 до допустимої довжини maxLength )
//     }
//     return newArray; //в іншому випадку, поверни масив повністю
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

//TASK-17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//     console.log(i);
// }

//TASK-18
// function calculateTotal(number) {
//     let result = 0; //задаємо найменше значення(від чого відштовхуємось)
//     for (let i = 0; i <= number; i += 1){
//         result += i; // до змінної result після кожної ітерації додаємо нове значення і
//     }
//     return result;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

//TASK-19
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1){
//     const fruit = fruits[i]; //змінній fruit присвоюється значення - елемент масиву
//     console.log(fruit);
// }

//TASK-20
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1){
//         total += order[i]; //кожен елемент з масиву додаємо до попереднього
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//TASK-21
// function findLongestWord(string) {
//     let mainWord = ""; //обрали найменше значення.
//     const words = string.split(" "); //перетворили рядок в масив.
//     for (let i = 0; i < words.length; i += 1){
//         let currentWord = words[i]; // currentWord = поточний елемент масиву, який ітерується зараз.
//         if (currentWord.length > mainWord.length) { // якщо довжина поточного слова більша за mainWord,
//             mainWord = currentWord; //то в mainWord призначається поточне слово.
//         }
//     }
//     return mainWord; // повертаємо найдовше слово
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//TASK-22
//Метод push() дозволяє додати один або кілька елементів в кінець масиву,
// без необхідності вказувати індекси елементів, що додаються.

// function createArrayOfNumbers(min, max) {
//     let minNumber = [];
//     for (let i = min; i <= max; i++){
//         minNumber.push(i); //додай в змінну minNumber поточний елемент масиву.
//     }
//     return minNumber; //повертаємо масив усіх цілих чисел від значення min до max.
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//TASK-23
// function filterArray(numbers, value) {
//     let newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) { //якщо ітеруємий елемент масиву більший за значення value,
//             newArray.push(numbers[i]); //то додай поточний елемент масиву в новий масив newArray.
//         }
//     }
//     return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//TASK-24
//Метод includes(value) перевіряє, чи присутній в масиві елемент
//зі значенням value, і повертає true або false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//         if (fruits.includes(fruit)) {
//         return true;
//     }
//         return false;
//     }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

//TASK-25
// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i < array1.length; i += 1){ //перебираємо масив, поки не дійдемо до кінця array1.
//         const element = array1[i]; //значення змінної element = значенню ітеруємого елементу масиву array1
//         if (array2.includes(element)) { // якщо масив array2 включає в себе поточний ітеруємий елемент(тобто array1[i]),
//         newArray.push(element); //то до нового масиву ми додаємо цей спільний елемент.
//         }
//     }
//     return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//TASK-26
//Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки.
//for (const variable of iterable){}
//variable - змінна, яка буде зберігати значення елемента на кожній ітерації.
//iterable - колекція, яка містить ітерабельні елементи, наприклад масив.

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let num of order) {
//         total += num;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

//TASK-27
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     for (let number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//TASK-28
//Замість того, щоб повертати результат ділення, операція за модулем
//(%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//TASK-29
// function getEvenNumbers(start, end) {
//     let newArray = [];
//     for (let i = start; i <= end; i += 1){
//         if (i % 2 === 0) { //якщо число парне (тобто остача 0),
//             newArray.push(i); // то додаємо число до нового масиву
//         }
//     }
//     return newArray;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

//TASK-30
//Перервати виконання циклу можна в будь-який момент, за допомогою оператора - break.

// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1){
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }
// console.log(number);

//TASK-31
//Для того щоб переривати виконання відразу циклу і функції, є оператор return.

// function findNumber(start, end, divisor) {
//     let number;
//     for (i = start; i < end; i += 1){
//         if (i % divisor === 0) {
//             number = i;
//         return number;
//         }
//     }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//TASK-32
// function includes(array, value) {
//     // for (i = 0; i < array.length; i += 1){ 
//     //     let element = array[i];
//     //     if (element === value) {
//     //         return true; //автоперевірка не приймає, хоча в vscode все показує вірно
//     //     }
//     // }
//     for (let element of array) {
//         if (element === value) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));