const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

console.log(scrollWidth);
console.log(scrollHeight);

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);

function setScrollBy() {
	window.scrollBy(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}


function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		behavior: "smooth"
	});
}

function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}

const block = document.querySelector('.lesson__block');

const elementOffsetParent = block.offsetParent;

console.log(elementOffsetParent);

const elementOffsetLeft = block.offsetLeft;

const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);

const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);

function setElementScrollBy() {
	block.scrollBy({
		top: 20,
		left: 0,
		behavior: "smooth"
	})
}

const item = document.querySelector('.lesson__item');

/*
const getItemCoords = item.getBoundingClientRect();
console.log(getItemCoords);

const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);
*/

const getItemTopCoord = item.getBoundingClientRect().top;

const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);

const elem = document.elementFromPoint(100, 100);

console.log(elem);