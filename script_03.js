//---------------------------------------- LESSON 3 --------------------------------------------
//TASK-1
//Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального
//світу - користувача, книги, продукту магазину, чого завгодно.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

//TASK-2
//Значенням властивості може бути інший об'єкт.
//Це використовується для зберігання вкладених і згрупованих даних.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

//TASK-3
//Перший спосіб отримати доступ до
//властивості об'єкта - це синтаксис об'єкт.ключ_властивості.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//TASK-4
//Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
//Наприклад, user.location.country , де user.location - це звернення (шлях)
//до об'єкта у властивості location, а user.locaton.country - звернення
//до властивості country в цьому об'єкті.
//Тобто, «крапка» вказує наступну вкладеність.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//TASK-5
//Другий спосіб отримати доступ до властивості
// об'єкта - це синтаксис об'єкт["ключ_властивості"].

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//TASK-6
//Після того як об'єкт створений, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ім'ям, наприклад
//«через крапку», і присвоїти нове значення.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push( "trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

//TASK-7
//Операція додавання нової властивості після створення
//об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
//Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті,
//вона буде створена.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);

//TASK-8
//Синтаксис коротких властивостей (shorthand properties) дозволяє використовувати
// ім'я змінної як ім'я властивості, а її значення як значення властивості.
//Тобто, під час оголошення об'єкта достатньо вказати тільки ім'я властивості,
//а значення буде взято зі змінної з аналогічним ім'ям.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };
// console.log(product);

//TASK-9
//Синтаксис обчислюваних властивостей (computed properties).

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);

//TASK-10
//об'єкт - це не ітерабельна сутність.
//Для перебирання об'єктів використовується спеціальний цикл for...in,
//який перебирає ключі об'єкта object.
//Змінна key доступна тільки в тілі циклу.
//На кожній ітерації в неї буде записано значення ключа(ім'я) властивості.
//Для того щоб отримати значення властивості з таким ключем (ім'ям),
//використовується синтаксис квадратних дужок.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

//TASK-11
//власні і невласні властивості.
//Метод Object.create() створює і повертає новий об'єкт,
//зв'язуючи його з об'єктом в дужках().
//Для того щоб дізнатися, чи є в об'єкті власна властивість,
//чи немає, використовується метод hasOwnProperty(key), який повертає true або false.

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }
// console.log(apartment);

//TASK-12
// function countProps(object) {
//     let propCount = 0; //для зберігання кількості властивостей об'єкта.
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//TASK-13
//Object.keys(obj) - приймає об'єкт і повертає масив ключів його власних властивостей.
//Якщо в об'єкті немає властивостей, метод поверне порожній масив.
//Скомбінувавши результат Object.keys() і цикл for...of,
//можна зручно перебрати власні властивості об'єкта

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (let key of keys) {
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//TASK-14
// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     for (const key of keys) {
//         propCount += 1;
//     }
//     return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//TASK-15
//метод Object.values(obj) повертає масив значень його власних властивостей.
//Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

//TASK-16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     //const keys = Object.keys(salaries);
//     const values = Object.values(salaries);

//     for (let value of values) {
//         totalSalary += value;
//     }
//     return totalSalary;
// }

//TASK-17
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//TASK-18
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//     for (let product of products)
//         if (productName === product.name) {
//             return product.price;
//         }
//     return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

//TASK-19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//     const propValues = [];
//     for (let product of products) {
//         if (Object.keys(product).includes(propName)) { //ДО КІНЦЯ НЕ ЗРОЗУМІЛА
//             propValues.push(product[propName]);
//         }
//     }
//     return propValues;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

//TASK-20
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (let product of products) {
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

//TASK-21