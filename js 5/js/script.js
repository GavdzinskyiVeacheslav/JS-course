let message = "Привет, Фрилансер";

if (2 > 1) {

	console.log(message);
	
}

let message_1 = "Привет, Фрилансер";

let first = 5;
let second = 5;

if (first === second) {
	console.log(message_1);
	
}

let message_2 = "Привет, Фрилансер";

if (2 + 1 === 3 && "1" || 10 > 5 && 10 === 1) {
	console.log(message_2);
	
}


let message_4 = "Привет, Фрилансер";

if ("") {
	console.log(message_4);

	
}

let message_5 = "Привет, Фрилансер";
if ( 2 > 1) console.log(message_5);


let message_6 = "Привет, Фрилансер";
let number = 5;

if (number > 1) {
	console.log(message_6);
	
} else {
	console.log('Условие не выполнено :(');
	
}

let message_7 = "Привет, Фрилансер";
let number_1 = 5;

if (number_1 > 50) {
	console.log('5 больше 50');	
} else if (number_1 > 30) {
	console.log('5 больше 30');	
} else if (number_1 > 10) {
	console.log('5 больше 10');
}	else if (number > 1) {
	console.log('5 больше 1');
} else {
	console.log('Условие не выполнено :(');
	
}


let message_8 = "Привет";
let messageEnd;

if (5 > 1) {
	messageEnd = ", Вася!";
} else {
	messageEnd = ", Оля!";
}

message_8 += messageEnd;
console.log(message_8);


let message_9 = "Привет";

let messageEnd_1 = (5 > 1) ? ", Вася!" : ", Оля!";

message_9 += messageEnd_1
console.log(message_9);

let message_10 = "Привет";
let messageEnd_2;

if (5 > 50) {
	messageEnd_2 = ", Вася!";
} else if (5 > 30) {
	messageEnd_2 = ", Оля!";
} else if (5 > 10) {
	messageEnd_2 = ", Миша!";
} else if ( 5 > 1) {
	messageEnd_2 = ", Андрей!";
} else {
	messageEnd_2 = ", Иннокентий!";
}

messageEnd_2 = 5 > 10 ? ", Вася!" : 
	5 > 30 ?  ", Оля!" :
		5 > 10 ? ", Миша!" :
			5 > 1 ? ", Андрей!" : ", Иннокентий!"


message_10 += messageEnd_2;
console.log(message_10);

5 > 10 ? console.log("Приве, Вася!") :
	console.log("Привет, Оля!");

if (5 > 10) {
	console.log("Привет, Вася!");
} else {
	console.log("Привет, Оля!");
}


let message_11 = 5 > 10 ? "Привет, Вася!" : "Привет, Оля!";
console.log(message_11);
