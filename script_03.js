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

//TASK-4
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

//TASK-5
//Після того як об'єкт створений, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ім'ям, наприклад
//«через крапку», і присвоїти нове значення.

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push( "trusted");

console.log(apartment.price);
console.log(apartment.rating);
console.log(apartment.owner.name);
console.log(apartment.tags);