//---------------------------------------- LESSON 4 --------------------------------------------
//TASK-1
//Функції - це спеціальний тип даних (об'єкт вищого порядку),
//значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу функцію.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza(); //результат виконання функції makePizza.
// const pointer = makePizza;  //посилання на функцію makePizza.

// console.log(result);
// console.log(pointer);

//TASK-2
//Функція зворотного виклику (callback, колбек) - це функція, яка передається
//іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

//Функція вищого порядку (higher order function) - функція, яка приймає
//у якості параметрів інші функції або повертає функцію у якості результату.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
//                               //колбек-функція
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }                                    //2) Функція deliverPizza i makePizza передається як колбек.
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
//                        //1) аргумент ім'я піци, що доставляється.

//TASK-3
//Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом,
//її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек.
//Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
//                        // другим аргументом передано інлайн колбек-функцію.
// makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`)
// });

//TASK-4
//Функція може приймати довільну кількість колбеків.
//Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів
//на сервер, виконання заздалегідь невідомих функцій тощо.У цьому і полягає
//їх суть - це функції, призначені для відкладеного виконання.

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (!this.pizzas.includes(pizzaName)) {
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         }
//         return onSuccess(pizzaName);
//     },
// };
// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//TASK-5
//forEach - Метод перебирання масиву, який використовується для заміни циклів
//for і for...of в роботі з колекцією.
//массив.forEach(function callback(element, index, array) {
// Тіло колбек-функції
//});
//*Поелементо перебирає масив.
//*Викликає колбек-функцію для кожного елемента масиву.
//*Нічого не повертає.

//Аргументи колбек-функції - це значення поточного елемента element,
//його індекс index і власне вихідний масив array.
//Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     // totalPrice += orderedItems[i];
//     // }

//     //рефакторинг функції. Замість циклу for - метод forEach.
//    //масив      //метод  //колбек  //аргумент колбек-функції,
//     orderedItems.forEach( function (price) { //поточний ітеруємий елемент.
//         totalPrice += price;
//     });
//     return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//TASK-6
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     // for (let i = 0; i < numbers.length; i += 1) {
//     // if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     // }
//     // }

//      //рефакторинг функції. Замість циклу for - метод forEach.
//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//TASK-7
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // for (let i = 0; i < firstArray.length; i += 1) {
//     // if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     // }
//     // }
//     //рефакторинг функції. Замість циклу for - метод forEach.
//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     });

//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//TASK-8
//Стрілочні функції =>
//Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна,
//її необхідно присвоювати змінній.
//Ключове слово function не використовується, замість цього відразу зазначається
//оголошення параметрів, після нього - символ => і тіло функції.
//Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках,
//між знаками рівності = і стрілкою =>.
//Якщо параметр один, його можна оголошувати без круглих дужок.
//Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

//БУЛО:
// function calculateTotalPrice(quantity, pricePerItem)
//РЕФАКТОРИНГ ФУНКЦІЇ В СТРІЛОЧНУ.СТАЛО:

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };

//TASK-9
//У стрілочної функції після символу => знаходиться її тіло.Існує два варіанти: з фігурними дужками і без них.
//Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return.
//Це називається явне повернення (explicit return) - використовується, якщо в тілі функції
// потрібно виконати ще якісь інструкції, крім повернення значення.

//Якщо фігурні дужки відсутні, то повертається результат виразу,
//який стоїть після =>.Це називається неявне повернення(implicit return): const add = (a, b, c) => a + b + c;.
                                                    //використане неявне повернення.
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//TASK-10
//Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву.
//Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання.
//Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach(function (item) => totalPrice += item);
//     return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//TASK-11
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach((number) => {
//     if (number > value) {
//         filteredNumbers.push(number);
//     }
//     });
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//TASK-12
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
//     firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//         commonElements.push(element);
//     }
//     });
//     return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//TASK-13
//Функція з побічними ефектами - це функція, яка в процесі виконання може змінювати або
//використовувати глобальні змінні, змінювати значення аргументів посилального типу,
//виконувати операції введення - виведення тощо.

//Чиста функція (pure function) - це функція, результат якої залежить тільки від значень
//переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий
//результат, і не має побічних ефектів, тобто не змінює значення аргументів.

// function changeEven(numbers, value) {
//     //виконано рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив
//     //чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
//     const newNumbers = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newNumbers.push(number + value);
//         } else {
//         newNumbers.push(number);
//         }
//     });
//     return newNumbers

//     // for (let i = 0; i < numbers.length; i += 1) {
//     // if (numbers[i] % 2 === 0) {
//     //     numbers[i] = numbers[i] + value;
//     // }
//     // }
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//TASK-14
//Більшість перебираючих методів масиву - це чисті функції. Вони створюють новий масив,
//заповнюють його, застосовуючи до значення кожного елемента зазначену колбек - функцію,
//після чого повертають цей новий масив.

//Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію
//для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.
//*Поелементо перебирає оригінальний масив.
//*Не змінює оригінальний масив.
//*Результат роботи колбек-функції записується у новий масив.
//*Повертає новий масив однакової довжини.
//*Його можна використовувати для того, щоб змінити кожен елемент масиву.
//Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//TASK-15
//Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції
//повернути значення властивості кожного з них.

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     },
//     {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map(book => book.title);
// console.log(titles);

//TASK-16
//Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках,
//коли результат - це багатовимірний масив, який необхідно «розгладити».
//Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи
//записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на
//глибину, що дорівнює одиниці(одна вкладеність).Цей розгладжений масив і є результатом роботи flatMap().

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//     },
//     {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//     },
// ];
// // const genres = books.map(book => book.genres);
// // console.log(genres); //[ [ 'adventure', 'history' ], [ 'fiction' ], [ 'horror', 'mysticism' ] ]

// const genres = books.flatMap(book => book.genres);
// console.log(genres); //[ 'adventure', 'history', 'fiction', 'horror', 'mysticism' ]

//TASK-17
// const users = [
//     {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//     },
//     {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//     },
//     {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//     },
//     {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//     },
//     {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//     },
//     {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//     },
//     {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//     },
// ];
// // const getUserNames = users.map(user => user.name);
// const getUserNames = users => {
//     const names = users.map(user => user.name);
//     return names;
// };
// console.log(getUserNames(users));

//TASK-18
// const getUserEmails = users => {
//     const emails = users.map(user => user.email);
//     return emails;
// };
// console.log(getUserEmails(users));

//TASK-19
//Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто,
//коли необхідно вибрати більше одного елемента з колекції за певним критерієм.
//масив.filter((element, index, array) => {};
//*Не змінює оригінальний масив.
//*Поелементо перебирає оригінальний масив.
//*Повертає новий масив.
//*Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
//*Якщо колбек повернув true, елемент додається у масив, що повертається.
//*Якщо колбек повернув false, елемент не додається у масив, що повертається.
//*Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0); //утворився масив парних чисел з масиву numbers.
// const oddNumbers = numbers.filter(number => number % 2 === 1); //утворився масив непарних чисел з масиву numbers.

// console.log(evenNumbers);
// console.log(oddNumbers);

//TASK-20
//Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, що у ньому залишаться тільки унікальні елементи.
//Цей прийом працює тільки з масивом примітивних значень - не об'єктів.

//Використовуючи array.indexOf(), виконуємо пошук першого збігу поточного елемента і отримуємо його індекс в оригінальному масиві усіх курсів.
//В параметрі index зберігається індекс поточного елемента, перебираючи масив методом filter.
//Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше,
// і на поточній ітерації фільтр обробляє саме його.

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//     },
//     {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index) => allGenres.indexOf(book) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

//TASK-21
//Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості.
//У підсумку, утворюється новий масив відфільтрованих об'єктів.

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     },
//     {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

//TASK-22
// const getUsersWithEyeColor = (users, color) => {
//     const usersEyesColor = users.filter(user => user.eyeColor === color);
//     return usersEyesColor;
// };
// console.log(getUsersWithEyeColor(users, "blue"))
// console.log(getUsersWithEyeColor(users, "green"))
// console.log(getUsersWithEyeColor(users, "brown"))

//TASK-23
// const getUsersWithAge = (users, minAge, maxAge) => {
//     const usersAge = users.filter(user => user.age >= minAge && user.age <= maxAge);
//     return usersAge;
// };

//TASK-24
// const getUsersWithFriend = (users, friendName) => {
//     const friends = users.filter(user => user.friends.includes(friendName));
//     return friends;
// };
// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));

//TASK-25
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     return allFriends.filter((user, index) => allFriends.indexOf(user) === index);
// };

//TASK-26
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive === true);
// };

//TASK-27
// const getInactiveUsers = (users) => {
//     return users.filter(user => user.isActive === false);
// };

//TASK-28
//Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то
//метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого
//перебирання масиву припиняється. Тобто він шукає до першого збігу.
//масив.find((element, index, array) => {}
//*Не змінює оригінальний масив.
//*Поелементо перебирає оригінальний масив.
//*Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
//*Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
//Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості

// const books = [
//     {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//     },
//     {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//     },
//     {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

//TASK-29
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
// console.log(getUserWithEmail(users,"shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com",));
// console.log(getUserWithEmail(users, "lopachuk20061997@gmail.com"));

//TASK-30
//Метод every(callback) перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.
//масив.every((element, index, array) => {}
//*Не змінює оригінальний масив.
//*Поелементо перебирає оригінальний масив.
//*Повертає true, якщо всі елементи масиву задовольняють умову.
//*Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//*Перебирання масиву припиняється, якщо колбек повертає false.
//При роботі з масивом об'єктів перевіряється значення якоїсь їх властивості.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every( number => number % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 === 1);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 === 1);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

//TASK-31
// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive === true);
// };

//TASK-32
//Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.
//масив.some((element, index, array) => {}
//*Не змінює оригінальний масив.
//*Поелементо перебирає оригінальний масив.
//*Повертає true, якщо хоча б один елемент масиву задовольняє умову.
//*Повертає false, якщо жоден елемент масиву не задовольняє умову.
//*Перебирання масиву припиняється, якщо колбек повертає true.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 === 1);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 === 1);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 === 1);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

//TASK-33
// const isAnyUserActive = users => {
//     return users.some(user => user.isActive === true);
// };

//TASK-34
//Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву
//із збереженням проміжного результату, як акумулятор.
//массив.reduce((previousValue, element, index, array) => {
    // Тіло колбек-функції
//}, initialValue);
// *Не змінює оригінальний масив.
// *Поелементо перебирає оригінальний масив.
// *Повертає все, що завгодно.
// *Робить все, що завгодно.
//Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат.
//Значення, яке поверне колбек - функція на поточній ітерації, буде значенням цього параметра (previousValue) на наступній ітерації.
//Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players);
// console.log(playtimes);
// const totalPlayTime = playtimes.reduce( (previousValue, player) => previousValue += player);
// console.log(totalPlayTime);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

//TASK-35
//Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
// Назва акумулятора може бути довільною, це просто параметр функції.

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((previousValue, user) => {
//     return previousValue + (user.playtime / user.gamesPlayed)
// }, 0);
// console.log(totalAveragePlaytimePerGame);

//TASK-36
// const calculateTotalBalance = users => {
//     users.reduce((previousBalance, user) => {
//         return previousBalance += user.balance;
//     }, 0)
// };

//TASK-37
// const getTotalFriendCount = users => {
//     return users.reduce((previousValue, user) => {
//         return previousValue += user.friends.length;
//     }, 0)                    //загальнa кількість друзів
// };

//TASK-38
//Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.
//*Сортує і змінює вихідний масив.
//*Повертає змінений масив, тобто посилання на відсортований вихідний.
//*За замовчуванням сортує за зростанням.
//*Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
//!!!!! Перед сортуванням роблять повну копію вихідного масиву (...(spread))і сортують вже її !!!!!

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//TASK-39
//Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами.
//Це функція порівняння(compare function), порядок сортування залежить від її результату.Метод sort() буде викликати її для двох довільних елементів.
//масив.sort((a, b) => {}
//a - перший елемент для порівняння.
//b - другий елемент для порівняння.
//Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.
//Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.
//Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b); //за зростанням.
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a); //за спаданням.
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//TASK-40
//Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
//Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
// firstString.localeCompare(secondString)
//*Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//*Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//*Якщо рядки однакові, повертається нуль.

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// const authorsInReversedOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInAlphabetOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);
// console.log(authorsInAlphabetOrder);

//TASK-41
//Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості.

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     },
//     {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = [...books].sort((firstItem, secondItem) => firstItem.author.localeCompare(secondItem.author));
// const sortedByReversedAuthorName = [...books].sort((firstItem, secondItem) => secondItem.author.localeCompare(firstItem.author));
// const sortedByAscendingRating = [...books].sort((firstItem, secondItem) => firstItem.rating - secondItem.rating);
// const sortedByDescentingRating = [...books].sort((firstItem, secondItem) => secondItem.rating - firstItem.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//TASK-42
// const sortByAscendingBalance = users => {
//     // const sortesByBalance = [...users].sort((firstItem, secondItem) => firstItem.balance - secondItem.balance);
//     // return sortesByBalance;
//     return [...users].sort((firstItem, secondItem) => firstItem.balance - secondItem.balance);
// };

//TASK-43
// const sortByDescendingFriendCount = users => {
//     return [...users].sort((firstItem, secondItem) => secondItem.friends.length - firstItem.friends.length);
// };

//TASK-44
// const sortByName = users => {
//     return [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
// };

//TASK-45
//Ланцюжок методів.
//Позбутися таких «мертвих»(зайвих) змінних можна за допомогою групування викликів методів у ланцюжки.
//Кожний наступний метод буде виконуватися на основі результату роботи попереднього.
//Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій.

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     },
//     {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books.filter(book => book.rating >= MIN_BOOK_RATING).map(book => book.author).sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
// console.log(books);
// console.log(names);

//TASK-46
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort((firstItem, secondItem) => firstItem.friends.length - secondItem.friends.length).map(user => user.name);
// };

//TASK-47
// const getSortedFriends = users => {
//     return users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort((a, b) => a.localeCompare(b));
// };

//TASK-48
// const getTotalBalanceByGender = (users, gender) => {
//     return users.filter(user => user.gender === gender).map(user => user.balance).reduce((previousBalance, user) => previousBalance += user);
// };

