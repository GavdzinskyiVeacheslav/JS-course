
/*
const button = document.querySelector('.button');

button.onclick = function () {
	console.log('Клик!');
}


function showConsole() {
	console.log('Клик!');
}

button.onclick = showConsole;


button.onclick = function () {
	console.log('Клик!');
}

button.onclick = function () {
	console.log('Клак!');
}


button.addEventListener("click", function (e){
	console.log('Клик!');
});

button.addEventListener("click", function (e){
	console.log('Клак!');
});

const options = {
	"capture": false,
	"once": true,
	"passive": false
}

const button = document.querySelector('.button');

function showConsole(event) {
	//console.log(event.type);
	//console.log(event.target);
	//console.log(event.currentTarget);
	//console.log(event.clientX);
	//console.log(event.clientY);
	console.log(event);

}

button.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);
//button.removeEventListener("click", showConsole);



const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

block.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});

blockInner.addEventListener("click", function (event) {
	console.log('Клик на Блок второго уровня!');
	
},{"capture": false});

blockInnerInner.addEventListener("click", function (event) {
	console.log('Клик на Блок третьего уровня!');
	//event.stopPropagation();
});

const lesson = document.querySelector('.lesson');

function showConsole() {
	console.log('Ура!');
}

lesson.addEventListener("click", function (event){
	if (event.target.closest('.button')) {
		showConsole();
	}
});


button.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsole);
});

const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
	console.log('Наши действия');
	event.preventDefault();
});


const link = document.querySelector('.link');

link.onclick = function () {
	console.log('Наши действия');
	return false;
}

const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
	console.log('Наши действия');
	event.preventDefault();
}, {"passive": true});


const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
	console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
	console.log('Вызываю контекстное меню (не основная кнопка мыши)');
});

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function (event) {
	blockForMouse.innerHTML =
	`clienX - ${event.clientX} <br> clientY - ${event.clientY}`;
});

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event){
	//blockForMouse.innerHTML = `Курсор над элементом`;
	//console.log(event.target);
	//console.log(event.relatedTarget);
	console.log('Курсор над элементом');
});

blockForMouse.addEventListener("mouseleave", function (event) {
	//blockForMouse.innerHTML = `Курсор уходит с элемента`;
	//console.log(event.target);
	//console.log(event.relatedTarget);
	console.log('Курсор уходит с элемента');
});

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseentr", function (event) {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = `background-color: #77608d;`;
});

blockForMouse.addEventListener("mouseleave", function (event) {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = ``;
});

const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

	let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
	let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

	let gragItemSizes = {
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	let gragFieldSizes = {
		left: gragField.getBoundingClientRect().left + scrollX,
		top: gragField.getBoundingClientRect().top + scrollY,
		right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
		bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
	}

	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	moveItem(event.pageX, event.pageY);

	function moveItem(pageX, pageY) {
		let currentX = pageX - coordsItemX;
		let currentY = pageY - coordsItemY;

		if (
			currentX + gragItemSizes.width <= gragFieldSizes.right &&
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`;
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
	}

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drag-field__point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function (event) {
		document.removeEventListener('mousemove', onDragItem);
	}, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});

document.addEventListener("keydown", function (event) { 
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
		console.log('Отмена действия!');
	}
	
});

document.addEventListener("keyup", function (event){
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});

document.addEventListener("keydown", function (event) { 
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
	console.log(event.repeat);
});

const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}

const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event){
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if(!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

document.addEventListener('keyup', function (event){
	console.log(event.code);
	if (event.code === 'Escape') {
		menuBody.classList.remove('_active');
	}
});


window.addEventListener('scroll', function (event){
	console.log(`${scrollY}px`);
})

document.addEventListener("DOMContentLoaded", readyDom);

window.addEventListener("load", readyLoad);

function readyDom() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log('DOM загружен');
	console.log(image.offsetWidth);
}

function readyLoad() {
	console.log(document.readyState);
	const image = document.querySelector('.image');
	console.log('Страница загружена!');
	console.log(image.offsetWidth);
}


window.addEventListener("beforeunload", beforeUnload);

function beforeUnload(event) {
	event.preventDefault();
	event.returnValue = '';
}

*/

window.addEventListener("unload", function (e) {

});











