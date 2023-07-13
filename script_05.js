//---------------------------------------- LESSON 5 --------------------------------------------
//TASK-1
//Всередині функцій можна використовувати зарезервоване ключове слово this.
//Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана.
//Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

//TASK-2
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],

//     getBalance() {
//     return this.balance;
//     },
//     getDiscount() {
//     return this.discount;
//     },
//     setDiscount(value) {
//     this.discount = value;
//     },
//     getOrders() {
//     return this.orders;
//     },
//     addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//     },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount());
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance());
// console.log(customer.getOrders());

//TASK-3
// const historyService = {
//     orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     getOrdersLog() {
//     return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//     },
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

//TASK-4
//Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук
//властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає
//спеціальна прихована властивість[[Prototype]], яка в консолі браузера відображається як __proto__.
//Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.
//Об'єкт, на який вказує посилання в __proto__, називається прототипом.
//Тобто прототип - це резервне сховище властивостей і методів об'єкта, що автоматично використовується
//під час їх пошуку.Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.
//Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить,
//то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу.
//Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// const child = Object.create(parent); //об'єкт parent став прототипом для об'єкта у змінній сhild.
// child.name = "Jason";
// child.age = 27;

//TASK-5
//ЛАНЦЮЖОК ПРОТОТИПІВ

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

//TASK-6
//часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними.
//З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
//Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і
//фігурні дужки - його тіло.Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.
//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// class Car { };

//TASK-7
//Для ініціалізації екземпляра в класі є метод constructor.
//Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.
//class User {
  // Синтаксис оголошення методу класу
  //constructor(name, email) {} }
//Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта.
//Тобто this всередині конструктора буде посилатися на новостворений об'єкт.
//Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра
//і до них можна буде отримати доступ, звернувшись через крапку.

// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand; //Клас Car створює об'єкт з однойменними властивостями brand, model і price,
//         this.model = model; //значеннями яких повинні бути передані аргументи.
//         this.price = price;
//     }
// }
// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));

//TASK-8
//Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
//Якщо параметрів багато(більше 2 - х), то, як правило, застосовують патерн «Об'єкт параметрів».
//Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями.
//Значення властивостей такого об'єкта замінять набір аргументів.

// class Car {  //Виконала рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
//     constructor({ brand, model, price }) {   //Деструктуризувала об'єкт в сигнатурі (підписі) конструктора.
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

//TASK-9
//Для роботи з властивостями майбутнього екземпляра використовуються методи класу.
//Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getPrice() {
//         return this.price;
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }

//TASK-10
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.items.splice((this.items.indexOf(itemToRemove)), 1);
//     }   //видали мені items, indexOf якого = itemToRemove.
// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
// storage.addItem("Droid");
// console.log(storage.getItems());
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

//TASK-11
// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padStart(str) {
//         this.value = str + this.value; //до поточного value спереду додала str
//     }
//     padEnd(str) {
//         this.value = this.value + str; //до поточного value ззаду додала str
//     }
//     padBoth(str) {
//         this.value = str + this.value + str; //до поточного value спереду і ззаду додала str
//     }                                           // padBoth(str) {
// }                                               //   this.padStart(str);
//                                                //    this.padEnd(str);
// const builder = new StringBuilder(".");       //  }
// console.log(builder.getValue());
// builder.padStart("^");
// console.log(builder.getValue());
// builder.padEnd("^");
// console.log(builder.getValue());
// builder.padBoth("=");
// console.log(builder.getValue());

//TASK-12
//Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас.
//Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу.
//Решта методів і властивостей(не публічних) повинні бути недоступні.
//В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.
//Додаючи до імені властивості символ #, ми робимо її приватною.
//Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.
//Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

// class Car {
//     #brand; //Private field '#brand' must be declared in an enclosing class.
//     constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

//TASK-13
// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         this.#items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
// storage.addItem("Droid");
// console.log(storage.getItems());
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

//TASK-14
// class StringBuilder {
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue());
// builder.padStart("^");
// console.log(builder.getValue());
// builder.padEnd("^");
// console.log(builder.getValue());
// builder.padBoth("=");
// console.log(builder.getValue());

//TASK-15
//Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії з властивостями.
//Геттер і сетер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом.
//Геттер виконується при спробі отримати значення властивості, а сетер - при спробі його змінити.
//Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.
//Оголошується гетер і сетер, ставлячи перед ім'ям властивості ключові слова get і set.
//Всередині цих методів ми або повертаємо значення приватної властивості, або змінюємо її значення.
//Геттер і сетер застосовуються в парі та повинні називатися однаково.
//Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код (наприклад, з будь-якими перевірками).

// class Car {
//     #brand;
//     #model;
//     #price;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }
//     get brand() {
//         return this.#brand;
//     }
//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }
//     get model() {
//         return this.#model;
//     }
//     set model(newModel) {
//         this.#model = newModel;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         this.#price = newPrice;
//     }
// }

//TASK-16
//в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static).
//Вони корисні для зберігання інформації, що стосується класу.
//Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static.
//Статичні властивості також можуть бути приватними, тобто доступними тільки всередині класу. Для цього ім'я властивості повинно починатися з символу #.
//Звернення до приватної статичної властивості за межами тіла класу викличе помилку.

// class Car {
//     static MAX_PRICE = 50000;
//     #price;
//     constructor({ price }) {
//         this.#price = price;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (newPrice < Car.MAX_PRICE) {
//             this.#price = newPrice;
//         }
//             return this.#price;
//     }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price);

// audi.price = 49000;
// console.log(audi.price);

// audi.price = 51000;
// console.log(audi.price);

//TASK-17
//В класі можна оголосити також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні.
//Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.
//Особливість статичних методів полягає у тому, що під час їх виклику ключове слово this посилається на сам клас.
//Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра.
//Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.

// class Car {
//     static #MAX_PRICE = 50000;
//     static checkPrice(price) {
//         if (price > this.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum";
//         }
//         return "Success! Price is within acceptable limits";
//     }
//     constructor({ price }) {
//         this.price = price;
//     }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

//TASK-18
//Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас
//(дочірній, похідний) наслідує властивості та методи іншого класу(батьківського).
// class Child extends Parent {}
//У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent.
//Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики і методи для групи похідних класів,
//які наслідують властивості і методи батьківського, але також додають свої унікальні.
//Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.

// class User {
//     constructor(email) {
//         this.email = email;
//     }
//     get email() {
//         return this.email;
//     }
//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     }
// }

//TASK-19
//Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу.
//В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка.
//Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {
//     email;
//     constructor(email) {
//         this.email = email;
//     }
//     get email() {
//         return this.email;
//     }
//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

//     class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//         };
//         constructor({ email, accessLevel }) {
//             super(email);
//             this.accessLevel = accessLevel;
//     }
//     }
//     const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email);
// console.log(mango.accessLevel);

//TASK-20
//В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

// class User {
//     email;
//     constructor(email) {
//         this.email = email;
//     }
//     get email() {
//         return this.email;
//     }
//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
    
//     class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
//     constructor({ email, accessLevel, blacklistedEmails}) {
//         super(email);
//         this.accessLevel = accessLevel;
//         this.blacklistedEmails = [];
//         }
//         blacklist(email) {
//             this.blacklistedEmails.push(email);
//         }
//         isBlacklisted(email) {
//             if (this.blacklistedEmails.includes(email)) {
//                 return true;
//             }
//             return false;
//         }
//     }
//     const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); 
// console.log(mango.accessLevel); 
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); 
// console.log(mango.isBlacklisted("mango@mail.com")); 
// console.log(mango.isBlacklisted("poly@mail.com")); 


