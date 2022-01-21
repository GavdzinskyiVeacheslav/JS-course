let userInfo = new Object();
let userInfo1 = {};

let userInfo2 = {
	name: "Вася",
	age: 30,
};

console.log(userInfo2);
console.log(userInfo2.name);

let userInfo3 = {
	name: "Петя",
	age: 30,
	"likes javascript": true,
};

console.log(userInfo3.name);
console.log(userInfo3['name']);
console.log(userInfo3["likes javascript"]);


let firstPart = "likes";
let userInfo4 = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};

console.log(userInfo4["likes javascript"]);

let firstPart1 = "likes";
let userInfo5 = {
	name: "Вася",
	age: 30,
	[firstPart1]: true,
};

console.log(userInfo5[firstPart1]);

let key = "name";
console.log(userInfo5[key]);

let userInfo6 = {
	let: "Петя",
	for: 30,
};

console.log(userInfo6.let);
console.log(userInfo6.for);

let userInfo7 = {
	0: "Вася",
};

console.log(userInfo7[0]);
console.log(userInfo7["0"]);

let id = Symbol("id");
let userInfo8 = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};

console.log(userInfo8);

let userInfo9 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo9);
console.log(userInfo9.address);
console.log(userInfo9.address.city);

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
	};
}
let user = makeUserInfo("Vasya", 30);
console.log(user);

function makeUserInfo2(name, age) {
	return {
		name,
		age,
		"likes javascript": true,
	};
}
let user2 = makeUserInfo2("Vasya", 30);
console.log(user2);

let userInfo10 = {
	name: "Vasya",
}

console.log(userInfo10);

userInfo10.age = 30;

console.log(userInfo10);

userInfo10['likes javascript'] = true;

console.log(userInfo10);

userInfo10.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo10);


let userInfo11 = {
	name: "Vasya",
	age: 30,
	"likes javascript": true,
}

console.log(userInfo11);

delete userInfo11.age;

console.log(userInfo11);

delete userInfo11["likes javascript"];

console.log(userInfo11);

let userInfo12 = {
	name: "Vasya",
	age: 30,
}

console.log(userInfo12);

userInfo12.age = 18;

console.log(userInfo12);


let userInfo13 = {
	name: "Petya",
	age: 30,
}

console.log(userInfo13);

let user3 = userInfo13;

console.log(user3);

user3.age = 18;

console.log(userInfo13);
console.log(user3);



// Object.assign(куда(объект), что(свойство №1), что(свойство №2), ...);

let userInfo14 = {
	name: "Vasya",
	age: 20,
}

let user4 = Object.assign({}, userInfo14);

 user4.age = 15;

console.log(userInfo14);
console.log(user4);

let userInfo15 = {
	name: "Petya",
	age: 30,
}

Object.assign(userInfo15, { ['likes javascript']: true, city:"Uzhhorod"});
console.log(userInfo15);

let userInfo16 = {
	name: "Vasya",
	age: 30,
}

//console.log(userInfo16.age);

if (userInfo16.age) {
	console.log(userInfo16.age);
}

let userInfo17 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo17.address.street);

let userInfo18 = {
	name: "Vasya",
	age: 30,
	// address: {
	// 	city: "Uzhhorod",
	// 	street: "Freedom",
	// }
}
console.log(userInfo18?.address?.street);


let userInfo19 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo19) {
	console.log(userInfo19.name);
	
}

let userInfo20 = {
	name: undefined,
}

if ("name" in userInfo20) {
	console.log(userInfo20.name);
}

/*
for (let key in object) {

}
*/

let userInfo21 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo21) {
	console.log(key);
   console.log(userInfo21[key]);
}

for (let key in userInfo21.address) {
	console.log(key);
	console.log(userInfo21.address[key]);
}

let userInfo22 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},

showInfo: function () {
	console.log(`${userInfo22.name}, ${userInfo22.age} лет. Адресс: г.${userInfo22.address.city}, ул.${userInfo22.address.street}`);
	}
}
userInfo22.showInfo();


let userInfo23 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo2() {
		console.log(`${this.name}, ${this.age} лет. Адресс: г.${this.address.city}, ул.${this.address.street}`);
		
	}
}
userInfo23.showInfo2();

let userInfo24 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo3() {
		let show = () => console.log(`${this.name}, ${this.age} лет. Адресс: г.${this.address.city}, ул.${this.address.street}`);

		show();
	}
}
userInfo24.showInfo3();


let userInfo25 = {
	name: "Vasya",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo4() {
		console.log(`${this.name}, ${this.age} лет. Адресс: г.${this.address.city}, ул.${this.address.street}`);
		
	}
}
userInfo25.showInfo4();

let user5 = userInfo25;
userInfo25 = null;
user5.showInfo4();

function UserInfo(name) {

	this.name = name;
	this.age = 30;

}

console.log(new UserInfo('Vasya'));
console.log(new UserInfo('Lena'));


