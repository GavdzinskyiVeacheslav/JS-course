"use strict"

/* function имя(параметры) {

}

*/

showMessage();

function showMessage() {
	console.log('Сообщение');
}

showMessage();

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}

	function getNumTwo() {
		numTwo = 2;
	}

	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);

}

getSumm();

/*
if (2 > 1) {
	function getSumm2() {
		let numOne1, numTwo1;

		function getNumOne1() {
			numOne1 = 1;
		}
		function getNumTwo1() {
			numTwo1 = 2;
		}
		getNumOne1();
		getNumTwo1();

		let numSumm2 = numOne1 + numTwo1;
		console.log(numSumm2);
		
	}
}

getSumm2();
*/

/*
function showMessage1() {
	let message1 = "Сообщение";
	console.log(message1);
	
}

console.log(message1);
*/

let message2;

function showMessage2() {
	message2 = "Сообщение";
}

showMessage2();
console.log(message2);

let message3 = "Сообщение №1";

function showMessage3() {
	let message3 = "Сообщение №2";
	console.log(message3);

}

console.log(message3);
showMessage3();

let globalVar = "Я глобальная переменная";

function getSumm3() {
	let numOne2, numTwo2;

	function getNumOne2() {
		numOne2 = 1;
		console.log(globalVar);
	}

	function getNumTwo2() {
		numTwo2 = 2;
	}
	getNumOne2();
	getNumTwo2();

	let numSumm3 = numOne2 + numTwo2;
	console.log(globalVar);
}
console.log(globalVar);

getSumm3();

function calcSumm(numOne3, numTwo3) {
	console.log(`Переменная numOne: ${numOne3}`);
	console.log(`Переменная numTwo: ${numTwo3}`);

	let numSumm4 = numOne3 + numTwo3;

	console.log(`Сумма: ${numSumm4}`);;


}

calcSumm(1, 2);

function calcSumm2(numOne4, numTwo4, more, less) {
	let numSumm5 = numOne4 + numTwo4;

	if (numSumm5 > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}

calcSumm2(1, 1, showMoreMessage, showLessMessage);

function calcSumm3(numOne5, numTwo5) {
	let numSumm6 = numOne5 + numTwo5;

	return numSumm6;
}

let funcRezult = calcSumm3(1, 2);

console.log(`Сумма: ${funcRezult}`);

function getSumm4(numOne6, numTwo6) {
	let numSumm7 = calcSumm4(numOne6, numTwo6);

	console.log(numSumm7);
}

function calcSumm4(numOne6, numTwo6) {
	return numOne6 + numTwo6;

}

getSumm4(5, 5);

function calcSumm5(numOne7, numTwo7) {
	let result = 1;

	for (let i = 0; i < numTwo7; i++) {
		result *= numOne7;
	}
	return result;
}
console.log(calcSumm5(2, 3));

function calcSumm6(numOne8, numTwo8) {
	if (numTwo8 === 1) {
		return numOne8;
	} else {
		return numOne8 * calcSumm6(numOne8, numTwo8 - 1);
	}
}
console.log(calcSumm6(2, 3));

let showMessage4 = function () {
	console.log('Привет!');
};

showMessage4();

function getSumm5() {
	let summ = 1 + 2;
	console.log(summ);

};

let someVar = getSumm5;

someVar();
getSumm5();

let getSumm6;

if (2 > 1) {
	getSumm6 = function () {
		let summ1 = 1 + 2;
		console.log(summ1);

	};
}

getSumm6();


/*
let имя переменной = function (параметр, ... параметр) {
	return выражение;
}

let имя переменной = (параметр, ...параметр) => выражение

*/

let getMessage = (text, name) => text + ', ' + name + '!';

console.log(getMessage('Привет', 'Вася'));

let getMessage1 = (text, name) => {
	let message4 = text + ', ' + name + '!';
	return message4;
};

console.log(getMessage1('Привет', 'Вася'));

/*
setTimeout(Функция или код, задержка, параметр, ...параметр);
setInterval(Функция или код, задержка, параметр, ...параметр);
*/

function showMessage5(text, name) {
	console.log(`${text}, ${name}!`);
}

//setTimeout(showMessage5, 5000, 'Привет', 'Вася');


function showMessage6(text, name) {
	console.log(`${text}, ${name}!`);
}

//setInterval(showMessage6, 500, 'Привет', 'Петя');

function showMessage6(text, name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage6, 500, text, name);
}

// setTimeout(showMessage6, 500, 'Привет', 'Петя');

function showNumber(num) {
	console.log(num);
	setTimeout(showNumber, 1000, ++num);
}

// setTimeout(showNumber, 1000, 1);


function showNumber(num) {
	console.log(num);
	if (num < 5) {
		setTimeout(showNumber, 1000, ++num);
	}
}

// setTimeout(showNumber, 1000, 1);

function showNumber2(num1) {
	console.log(num1);
	let timeId = setTimeout(showNumber2, 1000, ++num1);
	if (num1 === 6) {
		clearTimeout(timeId);
	}
}

// setTimeout(showNumber2, 1000, 1);

let result1 = 0;
function showNumber3(num2) {
	result1 += num2;
	console.log(result1);
	if (result1 === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber3, 1000, 1);

function createMassage(text1, name1) {
	return `${text1}, ${name1}!`;
}

function showMessage7(message5) {
	console.log(message5);
}

function initMessage(text1, name1) {
	showMessage7(createMassage(text1, name1));
}

initMessage("Привет", "Фрилансер");


 







































