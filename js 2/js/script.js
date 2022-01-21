let age;
let info123;
let $size;
let _color;

/* Неверное обьявление 
let 123info;
let my-age;
*/

//Вместо 
let s;
let sdkljghfasdfkg;
let leftsidebarsize;

//Лучше писать
let size;
let age2;
let leftSidebarSize

//let myLifeStyle;

//myLifeStyle = 'freelance';

let myLifeStyle = 'freelance';
console.log(myLifeStyle);

//ОБЪЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ

//В строку через запятую
let myName = 'Фрилансер по жизни', myAge = 36, myMessage = 'Живи, а работай в свободное время!';

//Через запятую с новой строки
let myName_1 = 'Фрилансер по жизни',
	myAge_1 = 36,
	myMessage_1 = 'Живи, а работай в свободное время!';

//Отдельно
let myName_2 = 'Фрилансер по жизни';
let myAge_2 = 36;
let myMessage_2 = 'Живи, а работай в свободное время!';

let myAge_3 = 36;
myAge_3 = 18;
console.log(myAge_3);

let myAge_4 = 36;
let myNewAge = 18;

myAge_4 = myNewAge;
console.log(myAge_4);

//USE STRICT И ПЕРЕМЕННЫЕ

/*
// "use strict" строгий режим отключен

myAge = 36;
console.log(myAge);
*/

/*
"use strict" //строгий режим включен

let myAge = 36;
console.log(myAge);
*/

function testBlock() {
	console.log('Учим');
	console.log('JS');
}

testBlock();


function testBlock_1() {
	let myAge_5 = 36;
	console.log(myAge_5);
}

testBlock_1()

// console.log(myAge_5); // Вне блока переменная не видна 

let myAge_6 = 36;

function testBlock_2() {
	let myAge_6 = 18;
	console.log(myAge_6);
}

testBlock_2();

console.log(myAge_6);

/* Ошибка, мы не можем использовать
переменную перед объявлением

console.log(myAge_7);
let myAge_7 = 18; */

let myAge_8 = 36;
// let myAge_8 = 15; // Ошибка - переменная уже объявлена


//В то же время внутри блока (например цикла) проблем нет
for (let i = 0; i < 3; i++) {
	//Тут своя переменная i
	console.log(i);
}

for (let i = 0; i < 3; i++) {
	//И тут своя переменная i
	console.log(i);
}

/*
Нельзя изменить константу
const myAge_9 = 36;
myAge_9 = 19;
*/

const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

const summSizes = 25 + 30;

const userProfile = {
	name: 'Фрилансер',
	age: 36,
	message: 'Живи, a работай в свободное время!'
}
console.log(userProfile);

userProfile.age = 18;
console.log(userProfile);

age1 = 35;
console.log(age1);

var age1;

function testBlockLet() {
	let myAgeLet = 36;
}
testBlockLet();

//Переменная НЕ видна за пределами блока
//console.log(myAgeLet);

function testBlockVar() {
	let myAgeVar = 36;
}
testBlockVar();

//Переменная НЕ видна за пределами блока
//console.log(myAgeVar);

if (true) {
	let sizeLet = 50;
}

//Переменная НЕ видна за пределами блока
//console.log(sizeLet);

if (true) {
	var sizeVar = 50;
}

//Переменная ВИДНА за пределами блока
console.log(sizeVar);

let userName = 'Фрилансер по жизни';

userName = 36;

userName = "Живи, а работай в свободное время!";

let userName = 'Фрилансер по жизни';
let userAge = 36;
let userMassage = 'Живи, а работай в свободное время!';

