let StringOne = 'Привет! Я строка';
let StringTwo = "Привет! Я строка";
let StringThree = `Привет! Я строка`;

console.log(StringOne);
console.log(StringTwo);
console.log(StringThree);

let texHi = "Привет!";
let texAll = `${texHi} Я строка!`;

console.log(texAll);

function someSum(a, b) {
	return a + b;
}

console.log(`Сумма: ${someSum(4, 7)}`);

let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;

console.log(text);

let String1 = "158";
let Num = 158;
console.log(String1);
console.log(typeof String1);
console.log(Num);
console.log(typeof Num);

console.log(String1 + Num);

let textOne = `Привет!
Вы на канале
Фрилансер по жизни
`;

console.log(textOne);

let textTwo = "Привет! \nВы на канале \nФрилансер по жизни!";
console.log(textTwo);

let text1 = "Привет! \n\tВы на канале \n\t\tФрилансер по жизни!";
console.log(text1);

let text2 = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text2);

let text3 = "Привет! Вы на канале \"Фрилансер по жизни!\""
console.log(text3);

let text4 = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text4);

let textOne1 = "Привет!";
console.log(textOne1.length);

let text5 = "Привет!";
let firstSymbol = text5[0];
let lastSymbol = text5[text5.length -1];
console.log(firstSymbol);
console.log(lastSymbol);

for (const char of text5) {
	console.log(char);
	
}

// Строка не меняеться 
let text6 = "Привет!";
text6[6] = ".";
console.log(text6);

let text7 = "Привет!";
console.log(text7.toUpperCase());
console.log(text7.toLowerCase());

let text8 = "Привет!";
console.log(text8.indexOf('рив'));
console.log(text8.indexOf('рив', 3));

let text9 = "Привет!";
console.log(text9.includes('рив'));
console.log(text9.includes('рив', 3));
console.log(text9.startsWith('рив'));
console.log(text9.endsWith('!'));

let text10 = "Привет!";
let searchText = "пР";

console.log(text10.toLowerCase().includes(searchText.toLowerCase()));

let text11 = "Привет!";
console.log(text11.slice(1, 2));
console.log(text11.slice(-2, -1));
console.log(text11.slice(1));

console.log("А" > "Б");
console.log("а" > "Б");
console.log('Скрипт' > 'Скрипка')
console.log('Слайдер' > 'Слайд')
console.log('Фрилансер' > 'фрилансер');




