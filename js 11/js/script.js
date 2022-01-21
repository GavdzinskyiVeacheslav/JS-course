let arr = new Array();
let arr1 = [];

let arrOne = [
	'Ваня',
	'Иштван',
	'Оля',
];

let arrOne1 = ['Ваня', 'Иштван', 'Оля',];

let arrTwo = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');

	}
];

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

let arrOne2 = [
	'Ваня',
	'Иштван',
	'Оля',
];

console.log(arrOne2[1]);
console.log(arrOne2[5]);

let arrTwo2 = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');

	}
];

console.log(arrTwo2);
console.log(arrTwo2[0]);
console.log(arrTwo2[1].type);
console.log(arrTwo2[2]);
arrTwo2[3]();

let matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(matrix1);
console.log(matrix1[0][1]);

let arrOne3 = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne3);
console.log(arrOne3.length);

let arr2 = ['Ваня', 'Иштван', 'Оля',];

console.log(arr2);

let arrNew = arr2;

arrNew.length = 2;

console.log(arr2);


let arr3 = ['Ваня', 'Иштван', 'Оля',];

arr3[0] = 'Коля';
console.log(arr3);

arr3[3] = 'Ваня';
console.log(arr3);

let arr4 = ['Ваня', 'Иштван', 'Оля',];
arr4.push('Вася');
console.log(arr4);

arr4.push('Дима', 'Катя');
console.log(arr4);

let arr5 = ['Ваня', 'Иштван', 'Оля',];
arr5.shift();
console.log(arr5);

let arr6 = ['Ваня', 'Иштван', 'Оля',];
arr6.pop();
console.log(arr6);

let arr7 = ['Ваня', 'Иштван', 'Оля',];
arr7.unshift('Вася');
console.log(arr7);

arr7.unshift('Дима', 'Катя');
console.log(arr7);

let arr8 = ['Ваня', 'Иштван', 'Оля',];

delete arr8[1];
console.log(arr8);
console.log(arr8[1]);
console.log(arr8.length);


let arr9 = ['Ваня', 'Иштван', 'Оля',];
arr9.splice(1, 1);
console.log(arr9);

let arr10 = ['Ваня', 'Иштван', 'Оля',];
let removed = arr10.splice(1, 1);
console.log(removed);


let arr11 = ['Ваня', 'Иштван', 'Оля',];
arr11.splice(0, 1, 'Коля');
console.log(arr11);


let arr12 = ['Ваня', 'Иштван', 'Оля',];
arr12.splice(1, 0, 'Коля', 'Маша');
console.log(arr12);

let arr13 = ['Ваня', 'Иштван', 'Оля',];
arr13.splice(-1, 1);
console.log(arr13);

let arr14 = ['Ваня', 'Иштван', 'Оля',];
let arr15 = arr14.slice(1, 2);
console.log(arr15);

let arr16 = arr14.slice(-2, -1);
console.log(arr16);

let arr17 = arr14.slice();
console.log(arr17);

let arr18 = ['Ваня', 'Иштван', 'Оля',];
let arr19 = arr18.concat('Петя');
console.log(arr19);


let arr20 = ['Ваня', 'Иштван', 'Оля',];

console.log(arr20.indexOf('Иштван'));
console.log(arr20.indexOf('Вася'));
console.log(arr20.indexOf('Иштван', 2));

console.log(arr20.includes('Иштван'));
console.log(arr20.includes('Вася'));
console.log(arr20.includes('Иштван', 2));

let arr21 = [
	{ name: 'Вася', age: 36},
	{ name: 'Коля', age: 18},
	{ name: 'Оля', age: 'Не скажу'},
]

let resultOne = arr21.find(function (item, index, array) {
	return item.age === 18;
});

console.log(resultOne);

let resultTwo = arr21.findIndex(item => item.age === 18);
console.log(resultTwo);

let arr22 = [
	{ name: 'Вася', age: 36},
	{ name: 'Коля', age: 18},
	{ name: 'Оля', age: 'Не скажу'},
]

let result = arr22.filter(function (item, index, array){
	return item.age >= 18;
});

console.log(result);

let arr23 = ['Иштван', 'Ваня', 'Оля',];
console.log(arr23.sort());

let arr24 = [8, 22, 1,];
console.log(arr24.sort());

console.log("8" > "22");


let arr25 = [8, 22, 1,];
console.log(arr25.sort());

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;	

	// a - b
}

console.log(arr25.sort(compareNumeric));

console.log(arr25.sort((a, b) => a - b));

let arr26 = ['Ваня', 'Иштван', 'Оля',];
console.log(arr26.reverse());

let arr27 = ['Ваня', 'Иштван', 'Оля',];

let result1 = arr27.map(function (item, index, array) {
	return item[0];
});

let result2 = arr27.map(item => item[0]);

console.log(arr27);
console.log(result1);
console.log(result2);

let str = 'Ваня,Иштван,Оля';

let arr28 = str.split(',');
console.log(arr28);

let arr29 = str.split(',', 2);
console.log(arr29);

let arr30 = ['Ваня', 'Иштван', 'Оля',];
let srt = arr30.join(',');
console.log(srt);

let arr31 = ['Ваня', 'Иштван', 'Оля',];
console.log(String(arr31));

let obj = {};
let arr32 = [];

console.log(typeof obj);
console.log(typeof arr32);

if (Array.isArray(arr32)) {
	console.log('Это массив!');	
} else {
	console.log('Это не массив!');
}

let arr33 = ['Ваня', 'Иштван', 'Оля',];
console.log(arr33.length);

for (let i = 0; i < arr33.length; i++) {
	console.log(arr33[i]);
}

for (let arrItem of arr33) {
	console.log(arrItem);
}

arr33.forEach(function (item, index, array){
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

arr33.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
	
});

arr33.forEach(show);

function show(item) {
	console.log(item);
}

/*
let value = arr.reduce(function(previousValue, item, index, array) {

}, [initial]);
*/

let arr34 = [1, 2, 3, 4];
let reduceValueOne = arr34.reduce(function (previousValue, item, index, array){
	return item + previousValue;
}, 0);
console.log(reduceValueOne);

let reduceValueTwo = arr33.reduce(function (previousValue, item, index, arraay) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});

console.log(`Пользователи: ${reduceValueTwo}`);

console.log(typeof arr33);

arr33.name = "Коля";
console.log(arr33);
