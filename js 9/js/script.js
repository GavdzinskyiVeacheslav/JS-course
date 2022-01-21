let someNum = 458;
console.log(someNum);

let someNums = 4.58;
console.log(someNums);

let someBigNum = 1000000;
console.log(someBigNum);

let someLittleNum = 0.000001;
console.log(someLittleNum);

let someBigNum1 = 1e6;
console.log(someBigNum1);

let someLittleNum1 = 1e-6;
console.log(someLittleNum1);

console.log(0xFF);

console.log(0b11111111);

console.log(0o377);

let num = 255;

console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

let numOne1 = Math.ceil(5.8);
let numTwo1 = Math.ceil(2.2);
let numThree1 = Math.ceil(-2.2);

console.log(numOne1);
console.log(numTwo1);
console.log(numThree1);

let numOne2 = Math.round(5.8);
let numTwo2 = Math.round(2.2);
let numThree2 = Math.round(-2.2);

console.log(numOne2);
console.log(numTwo2);
console.log(numThree2);

let numOne3 = Math.round(5.845);
console.log(numOne3);

let numOne4 = Math.round(5.845 * 10) / 10;
console.log(numOne4);

let numTwo3 = Math.round(5.845 * 100) / 100;
console.log(numTwo3);

let numThree3 = Math.round(5.8449 * 100) / 100;
console.log(numThree3);

let numOne5 = 5.845;
console.log(numOne5.toFixed(1));

console.log(+numOne5.toFixed(1));
console.log(Number(numOne5.toFixed(1)));

let numOne6 = Math.round(1.005 * 100) / 100;
console.log(numOne6);

let numTwo4 = 12.35;
console.log(numTwo4.toFixed(1));

let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);

let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

console.log(Number(25 + "Привет!"));
console.log(isNaN(25 + "Привет!"));

if (25 + "Привет" !== NaN) {
	console.log('Я не NaN');	
}

console.log(NaN === NaN);

console.log(isFinite("25"));
console.log(isFinite("Привет!"));
console.log(isFinite(10 / 0));

let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);


let valueOne1 = parseInt("150.58px");
console.log(valueOne1);
console.log(typeof valueOne1);

let valueTwo1 = parseFloat("150.58px");
console.log(valueTwo1);
console.log(typeof valueTwo1);

let valueTwo2 = parseInt("a150.58px");
console.log(valueTwo2);
console.log(typeof valueTwo2);

console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));

let num1 = -58;
console.log(Math.abs(num1));

console.log(Math.pow(5, 8));







