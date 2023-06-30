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
//Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта
//у локальні змінні.Це робить код в місці їх використання менш «шумним».
//Деструктуризація завжди знаходиться у лівій частині операції присвоєння.
//Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта.
//Якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоювання,
//в іншому випадку їй буде присвоєно undefined.
//Порядок оголошення змінних у фігурних дужках не важливий.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures; // Деструктуризувала масив highTemperatures.
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//TASK-22
//З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей,
//можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі,
//коли в об'єкті відсутня властивість з таким ім'ям.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//TASK-23
//Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується
//значення властивості.Спочатку пишемо ім'я властивості, з якої хочемо отримати значення,
//після чого ставимо двокрапку і пишемо ім'я змінної, в яку необхідно
//помістити значення цієї властивості.
//Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// const { yesterday: highYesterday , today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// //створено нові змінні highYesterday, highToday, highTomorrow куди передаються значення властивостей yesterday,today,tomorrow.
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//TASK-24
//Для того щоб скоротити кількість повторень,при перебиранні масиву об'єктів циклом for...of,
// можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.
//Або, якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// //деструктуризацію виконала безпосередньо в місці оголошення змінної color.
// for (const {hex, rgb} of colors){
// // for (const color of colors) {
// //     const { hex, rgb } = color; //або, можна деструктуризувати в тілі функції.
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//TASK-25
//Для деструктуризації властивостей вкладених об'єктів використовуються
//ті самі принципи, що й в трьох попередніх вправах.

// const forecast = {
//     today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//     low: 27,
//     high: 31,
//     },
// };

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;

//TASK-26
//Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатися,
//в якій послідовності і що передавати.
//Патерн «Об'єкт налаштувань» допомагає вирішити цю проблему, замінюючи набір параметрів
//всього одним - об'єктом з іменованими властивостями.
//Тоді під час її виклику передаємо один об'єкт з необхідними властивостями.
//Ще один плюс в тому, що можна деструктуризувати об'єкт в параметрі book:
//// Це можна зробити в тілі функції:
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, public } = book;}
// Або в сигнатурі (підписі), різниці немає:
// function doStuffWithBook({ title, numberOfPages, downloads, rating, public })

// const forecast = {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
// };

// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: {low: tomorrowLow, high: tomorrowHigh},} = forecast;
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

//TASK-27
//Синтаксис ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт)
//в місце, в якому очікується набір окремих значень.
//B JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента.
//Cинтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);   //використала синтаксис ... на масиві scores, щоб масив чисел перетворити в набір окремих значень.
// const worstScore = Math.min(...scores); // після цього копія масиву scores = 89, 64, 42, 17, 93, 51, 26.
// console.log(bestScore);
// console.log(worstScore);

//TASK-28
//Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів
//в один новий.Раніше для цього використовували методи slice() і concat(),
//але операція розподілу дозволяє зробити те саме у коротшій формі.
//Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores]; //склеїла всі 3 масиви в один.
// const bestScore = Math.max(...allScores); //з нового загального масиву(а точніше з набору окремих значень нового масиву (...) allScores), знайшла найвищий бал
// const worstScore = Math.min(...allScores); // і найнижчий бал, за допомогою методів Math.max і Math.min.

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//TASK-29
//Операція spread дозволяє розподілити властивості довільної кількості об'єктів в один новий.
//Порядок розподілу має значення. Імена властивостей об'єкта - унікальні,
//тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.
//Під час розподілу можна додавати властивості у довільне місце.
//Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings}; //взяли налаштування за замовчуванням і поверх них застосувати перевизначені налаштування.
// console.log(finalSettings);

//TASK-30
function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";

}