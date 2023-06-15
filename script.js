//---------------------------------------- LESSON 1 --------------------------------------------
//TASK-1
// const productName = "Droid";
// console.log(productName);
// const pricePerItem = 2000;
// console.log(pricePerItem);

//TASK-2
// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem += 1500;
// console.log(productName);
// console.log(pricePerItem);

//TASK-3
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

//TASK-4
// const pricePerItem = 3500;   // ціна за одиницю
// const orderedQuantity = 4;   //замовлена кількість
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//TASK-5
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message);

//TASK-6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

//TASK-7
// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

//TASK-8
// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//TASK-9
// function add(a, b, c) {
//     return a + b + c;
// }
// add(2, 5, 8);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//TASK-10
// function makeMessage(name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//    return message;
// };
// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

//TASK-11                         //(кількість,  ціна )
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//     return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//TASK-12                     //кількість, ціна одного, вартість доставки
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const message = `You ordered droids worth ${(orderedQuantity * pricePerDroid) + deliveryFee} credits. Delivery (&{deliveryFee} credits) is included in total price.`;
//     return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//TASK-13
// function isAdult(age) {
//     const passed = age >= 18;
//     return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//TASK-14
// function isValidPassword(password) {
//     const SAVED_PASSWORD = "jqueryismyjam";
//     const isMatch = SAVED_PASSWORD === password;
//     return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

//TASK-15
// function checkAge(age) {
//     let message;
//     if (age >= 18) {
//         message = "You are an adult";
//     } else {
//         message = "You are a minor";
//     }
//     return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(14));
// console.log(checkAge(8));
// console.log(checkAge(37));

//TASK-16          //кількість товарів на складі
// function checkStorage(available, ordered) { //одиниць товару в замовленні
//     let message;
//     if (ordered > available) {
//         message = "Not enough goods in stock!";
//     } else {
//         message = "Order is processed, our manager will contact you.";
//     }
//     return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//TASK-17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//TASK-18         //ціна одного дроїда, кіл-сть замовлених,сума коштів на рахунку клієнта
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = orderedQuantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }
//     return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

//TASK-19
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     if (password === null) {
//         message = "Canceled by user!";
//     } else if(password === ADMIN_PASSWORD){
//         message = "Welcome!";
//     } else {
//         message = "Access denied, wrong password!";
//     }
//     return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//TASK-20            //доступний,замовив
// function checkStorage(available, ordered) {
//     let message;                     //умова (ordered === 0) некоректна, адже перетвориться в false
//     if (!ordered) {                 //і блок if не спрацює, тому застосувала інверсію
//         message = "There are no products in the order!";
//     } else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!"
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }
//     return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//TASK-21
// логічне && «І» запинається на хибності(false) і повертає те,
// на чому запнувся або останній операнд.

// function isNumberInRange(start, end, number) {
//     // let isInRange;
//     // if (number >= start && number <= end) {
//     //     isInRange = true;
//     // } else {
//     //     isInRange = false;
//     // }
//     const isInRange = number >= start && number <= end;
//     return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

//TASK-22
//логічне || «АБО» запинається на істині(true) і повертає те,
//на чому запнулося або останній операнд.

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip";  //Якщо значення параметра subType
//     return canAccessContent;                                          //дорівнює рядкам "pro" або "vip",
// }                                                                    //користувач отримає доступ.
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

//TASK-23
//Логічне «НЕ» - !вираз - це унарний оператор,
//що виконує операцію над одним операндом справа.
//Оператор ! приводить операнд до буля, якщо необхідно,
//а потім робить інверсію - замінює його на протилежний
//true -> false або false -> true.

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;    //змінній isNotInRange присвоєно вираз інверсії
//     return isNotInRange;               // значення змінної isInRange, використовуючи оператор !
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

//TASK-24
// function getDiscount(totalSpent) {
//     let discount;
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if(totalSpent >= 20000 && totalSpent < 50000){
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }
//     return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

//TASK-25
// <умова>      ?  <вираз, якщо умова істинна>  :  <вираз, якщо умова хибна>;
//Обчислюється  // тобто приводиться до true,     //тобто приводиться до false,
//умова.        //обчислюється вираз після ?      // обчислюється вираз після :

// function checkStorage(available, ordered) {
//     // let message;
//     //message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//     const message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//     return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//TASK-26
// function checkPassword(password){
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     const message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// TASK-27
// function getSubscriptionPrice(type) {
//     let price;
//     switch (type) {
//         case "starter":
//             price = 0;
//             break;
//         case "professional":
//             price = 20;
//             break;
//         case "organization":
//             price = 50;
//             break;
//     }
//     return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

//TASK-28
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
//         default:          //default-це блок за замовчуванням, такий же як else в if...else
//             message = "Access denied, wrong password!";
//     }
//     return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//TASK-29
// function getShippingCost(country) {
//     let message;
//     switch (country) {
//         case "China":
//             message = "Shipping to China will cost 100 credits";
//             break;
//         case "Chile":
//             message = "Shipping to Chile will cost 250 credits";
//             break;
//         case "Australia":
//             message = "Shipping to Australia will cost 170 credits";
//             break;
//         case "Jamaica":
//             message = "Shipping to Jamaica will cost 120 credits";
//             break;

//         default:
//             message = "Sorry, there is no delivery to your country";
//     }
//     return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

//TASK-30
//властивість length(довжина рядка)
// Якщо у змінній зберігається рядок: console.log(productName.length); // 12
// Якщо рядковий літерал: console.log("Repair droid".length); // 12

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`;
//     return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

//TASK-31
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length; // довжина рядка
// const firstElement = courseTopic[0];  // перший символ рядка
// const lastElement = courseTopic[courseTopic.length -1]; //останній символ рядка
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//TASK-32
//slice(startIndex, endIndex) - використовується для
//створення копії частини або всього рядка

               //"Hello world"
         //оригінальний рядок, кількість символів
// function getSubstring(string, length) {
//     const substring = string.slice(0, length);         //Присвой змінній substring вираз
//     return substring;                                 //створення підрядка довжиною length
// }                          // (0)      length        //символів (від початку (0)) з рядка string.
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

//TASK-33
// function formatMessage(message, maxLength) {
//     // let result;
//     // if (message.length <= maxLength){
//     // result = message;
//     // } else {
//     // result = message.slice(0, maxLength) + "...";
//     // }
//     // return result;
//     return message = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//TASK-34
//toLowerCase() - samsung
//toUpperCase() - SAMSUNG

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();
//     return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

//TASK-35
// includes(substring) перевіряє, чи входить підрядок substring у рядок
// повертає true або false

// function checkForName(fullname, name) {
//     const result = fullname.includes(name);
//     return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

//TASK-36
// function checkForSpam(message) {
//     let result;
//     result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//     return result;

//     return message = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? true : false;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?")); 

