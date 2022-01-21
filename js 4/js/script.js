let userAge = 30 - 6;

h = 5;

y = 4;

let userHeight = h - y;

let userAge1_ = 30 - 6;

let userAge_2 = -800;

let x;

x = 5 + 8;
console.log(`Результат сложения: ${x}`);

x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

x = 2 * 3;
console.log(`Результат умножения: ${x}`);

x = 10 / 2;
console.log(`Результат деления: ${x}`);

x = 11 % 3; 
console.log(`Результат взятия остатка от деления: ${x}`);

x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);

let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

let resultThree = 58 + " Фрилансер";
console.log(resultThree);
console.log(typeof resultThree);

let resultFour = 2 + "2";
console.log(resultFour);
console.log(typeof resultFour);

let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);
console.log(typeof resultFive);

let result_1 = "25" - 5;
console.log(result_1);
console.log(typeof result_1);

let result_2 = 10 * "80";
console.log(result_2);
console.log(typeof result_2);

let result_3 = 3 * "Фрилансер";
console.log(result_3);
console.log(typeof result_3);

let result1 = +"25";
console.log(result1);
console.log(typeof result1);

let result2 = +10;
console.log(result2);
console.log(typeof result2);

let users = "25";
let admins = "10";
console.log(users + admins);
console.log(+users + +admins);

console.log(Number(users) + Number(admins));

let resulT = 2 - 1 * 5;
console.log(resulT);

let resulT1 = (2 - 1) * 5;
console.log(resulT1);

let resulT2 = 2 - 1 + 5;
console.log(resulT2);

let a = 1 + 2;
let b = 2;

let result_4 = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result_4);

let result_5 = result_6 = result_7 = 1 + 2;
console.log(result_5);
console.log(result_6);
console.log(result_7);

let result_8 = 1 + 2;
 
result_9 = result_8;
result_10 = result_8;

console.log(result_8);
console.log(result_9);
console.log(result_10);

let users_1 = 5;
console.log(users_1);

users_1 = users_1 + 3;
console.log(users_1);

users_1 = users_1 * 2;
console.log(users_1);


let users_2 = 5;
console.log(users_2);
users_2 += 3;
console.log(users_2);
users_2 *= 2;
console.log(users_2);

let users_3 = 5;
console.log(users_3);
users_3 += 1 + 2;
console.log(users_3);

let addUser = 2;
addUser ++;
console.log(addUser);


let removeUser = 2;
removeUser--;
console.log(removeUser);

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

let usersCounter_1 = 0;
usersCounter_1++;
console.log(usersCounter_1);

let usersCounter_2 = 0;
console.log(++usersCounter_2);

let usersCounter_3 = 0;
console.log(usersCounter_3++);
console.log(usersCounter_3);

let usersCounter_4 = 0;
let newUsers_1 = 2 * ++usersCounter_4;
console.log(newUsers_1);

let usersCounter_5 = 0;
++usersCounter_5;
let newUsers_2 = 2 * usersCounter_5;
console.log(newUsers_2);

let usersCounter_6 = (8 + 2, 19 + 1);
console.log(usersCounter_6);

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

let result = 11 > 10;
console.log(result);

console.log('Б' > 'А');
console.log('Скрипт' > 'Скрипка');
console.log('Слайдер' > 'Слайд');
console.log('Фрилансер' > 'фрилансер');

console.log('58' > 10);
console.log('007' == 7);
console.log(true == 1);
console.log(false == 0);

let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);

console.log(null === undefined);
console.log(null == undefined);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(true || true); 
console.log(false || true); 
console.log(true || false); 
console.log(false || false); 

console.log(1 || 0); 
console.log(true || 'Фрилансер'); 
console.log(null || 58); 
console.log(null || 'Фрилансер' || 0);
console.log(undefined || '' || null || 0); 

let userName = '';
let userNickName = 'Фрилансер';

let user = userName || userNickName || "Без имени";
console.log(user);

let admins_1 = 0;
let users_4 = 5;
admins_1 > users_4 || users_4++;
console.log(users_4);

console.log(true && true);
console.log(false && true);
console.log(true && false); 
console.log(false && false);

console.log('Фрилансер' && 0 && 2 && 3);
console.log(1 && 2 && null && 3); 
console.log('15' && '42'); 

 console.log(1 && 0 || 2 && 1); 

 let usersS = 1;
 (usersS > 0) && console.log(`Пользователей ${usersS}`);
 
console.log(!true);

console.log(!null); 
console.log(!1); 
console.log(!'');
console.log(!'Фрилансер'); 

console.log(!true && 58 || 18 && !1); 

console.log(!!'Фрилансер');
console.log(Boolean('Фрилансер'));

let name;
console.log(name ?? "Без имени");









 







