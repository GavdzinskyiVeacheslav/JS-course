/*
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px`);

console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
console.log(navigator.platform);

console.log(location.href);
/*

//location.href = "https://fls.guru";
//history.back();
//history.forward();

//alert("Привет");

/*
const confirmResult = confirm("Хочешь научиться верстать?");
console.log(confirmResult);
*/

/*
const promptResult = prompt("Кто ты по жизни?");
console.log(promptResult);
*/

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

/*
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);
*/

const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

/*
console.log(firstChildNode);
console.log(lastChildNode);
*/

const childNodes = bodyElement.childNodes;
//console.log(childNodes);

//console.log(bodyElement.hasChildNodes());

/*
for (let node of childNodes) {
	console.log(node);
}
*/

const previousSiblingNode = bodyElement.previousElementSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

//console.log(previousSiblingNode);
//console.log(nextSiblingNode);
//console.log(parentNode);

const bodyChildren = bodyElement.children;
//console.log(bodyChildren);

const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
//console.log(firstChild);
//log(lastChild);

const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

//console.log(previousSibling);
//console.log(nextSibling);
//console.log(parentElement);

const elemsOne = document.querySelectorAll('.lesson__list');
//console.log(elemsOne);

const elemsTwo = document.querySelectorAll('li');
//console.log(elemsTwo[2]);
//console.log(elemsTwo);
/*
for (const item of elemsTwo) {
	console.log(item);
}

elemsTwo.forEach(item => {
	console.log(item);
});
*/

const elemsThree = document.querySelectorAll('li.lesson__item-list');
//console.log(elemsThree);

const elemsFour = document.querySelectorAll('.lesson__list>li');
//console.log(elemsFour);

const elemsFive = document.querySelectorAll('.lesson__list, .lesson__text');
//console.log(elemsFive);

const elemsSix = document.querySelectorAll('.lesson__list .lesson__text');
//console.log(elemsSix);

const elemsSeven = document.querySelectorAll('#listItem');
//console.log(elemsSeven);

const elemsEight = document.querySelectorAll('[data-item]');
//console.log(elemsEight);

const elemsNine = document.querySelectorAll('[data-item="85"]');
//console.log(elemsNine);

const sublist = document.querySelectorAll('.lesson__sub-list');
const subItems = sublist[0].querySelectorAll('li');
//console.log(subItems);
const listItems = sublist[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
//console.log(listItems);

//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelectorAll('.lesson__list');
//console.log(lessonList);

const elem = document.getElementById('listItem');
//console.log(elem);

const elems = document.getElementsByTagName('li');
//console.log(elems);

const elems1 = document.getElementsByClassName('lesson__item-list');
//console.log(elems1);

const elems2 = document.getElementsByName('list');
//console.log(elems2);

const listStatic = document.querySelectorAll('.lesson__item-list');

const listLive = document.getElementsByClassName('lesson__item-list');

//console.log(listStatic);
//console.log(listLive);

const lessonList1 = document.querySelector('.lesson__list');
lessonList1.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новый пункт</li>'
);

const elems3 = document.querySelectorAll('.class');

const elem1 = document.querySelector('.lesson__item-sub-list');
const parentList = elem1.closest('.lesson__list');
//console.log(parentList);

/*
const elems4 = document.querySelectorAll('.lesson__item-list');
for (let elem of elems4) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Красный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}


const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);

const textElement = document.querySelector('.lesson__text');

const textElementContent = textElement.innerHTML;
console.log(textElementContent);


textElement.innerHTML = 
`<p>${textElementContent}</p> <p>Живи, а работай в 
<span class="yellow">свободное</span> время!<p/>`;

console.log(textElement.innerHTML);

const textElementContent1 = textElement.outerHTML;
console.log(textElementContent1);

textElement.outerHTML = 
`<p>Живи, а работай в 
<span class="yellow">свободное</span> время!<p/><br>`;

console.log(textElement.outerHTML);


const textElementContent2 = textElement.textContent;
console.log(textElementContent2);


textElement.textContent = `<p>Живи, а работай в 
<span class="yellow">свободное</span> время!<p/>`;
console.log(textElement.textContent);


const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);

getComment.data = 'Привет';
console.log(getComment.data);

const textElement1 = document.querySelector('.lesson__text');

const newElement = document.createElement('div');
console.log(newElement);


newElement.innerHTML = `<p>Живи, а работай в 
	<span class="yellow">свободное</span> время!<p/>`;

const newText = document.createTextNode('Привет');
console.log(newText);

textElement1.before(newElement);
textElement1.after(newElement);
textElement1.prepend(newElement);
textElement1.append(newElement);
textElement1.append(newElement, "Привет!");

textElement1.append(`<p>Живи, а работай в 
<span class="yellow">свободное</span> время!<p/>`);

textElement1.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);

textElement1.insertAdjacentText(
	'beforeend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);

newElement.innerHTML = `<p>Живи, а работай в 
	<span class="yellow">свободное</span> время!<p/>`;

textElement1.insertAdjacentElement(
	'beforeend',
	newElement
)	

const title = document.querySelector('h3');

lessonBlock.append(title);

const cloneTextElement = textElement.cloneNode(true);

const lessonBlock2 = document.querySelector('.lesson');
lessonBlock2.append(cloneTextElement);

const textElement = document.querySelector('.lesson__text');
textElement.remove();

const element = document.querySelector('.lesson__item-list_red');

const elementClassNames = element.className;
console.log(elementClassNames);

element.className = "red";

element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active');

element.classList.add('active');

if (element.classList.contains('active')) {
	console.log(`У element есть класс active!`);
}

for (let className of element.classList) {
	console.log(className);
}


element.style.color = "red";

element.style.marginBottom = "30px";
element.style.zIndex = "10";

console.log(element.style.marginBottom);

element.style.marginBottom = "";


const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
margin-bottom: 30px;
color: red;
`;

console.log(element.style.fontSize);

const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingLeft);

const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);

console.log(elementStyle.paddingLeft);
console.log(elementStyle.padding);

const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);

element.style.marginLeft = "20px";

const link = document.querySelector('.lesson__link');
const text = document.querySelector('.lesson__text');

console.log(link.href);
console.log(text.href);

const lessonText = document.querySelector('.lesson__text');


lessonText.hasAttribute('name');
lessonText.getAttribute('name');
lessonText.setAttribute('name', 'value');
lessonText.removeAttribute('name');


lessonText.setAttribute('some-attribute', 'some-value');

if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}

const text = document.querySelector('.lesson__text');


text.setAttribute('id', '123');
console.log(text.id);

text.id = "321";
console.log(text.getAttribute('id'));


text.setAttribute('value', 'Привет!');
console.log(text.value);

text.value = "Как дела?";
console.log(text.getAttribute('value'));

*/

const lessonText = document.querySelector('.lesson__text');

console.log(lessonText.dataset.size);

lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

console.log(lessonText.tagName);

lessonText.hidden = true;
console.log(lessonText.hidden);