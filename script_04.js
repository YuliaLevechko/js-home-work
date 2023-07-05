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

//TASK-12


