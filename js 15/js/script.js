/*
console.log(document.forms);

const mainForm = document.forms[0];
console.log(mainForm);

console.log(document.querySelectorAll('form'));
console.log(document.forms);

document.body.insertAdjacentHTML(
	"beforeend",
	`<form name="some" class="some-form" action="#"></form>`
)


//const mainForm = document.forms.main;
//console.log(mainForm.elements);

const mainFormInput = mainForm.nameInput;

//console.log(mainFormInput);

const mainFormRadioButtons = mainForm.nameRadio;
//console.log(mainFormRadioButtons);

//console.log(mainFormInput.form);

const mainFormTextarea = mainForm.nameTextarea;

//mainFormInput.value = "Пока";
//mainFormTextarea.value = "До встречи!"

//console.log(mainFormInput.value);
//console.log(mainFormTextarea.value);

const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;


console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);


//console.log(mainFormCheckBox.value);
//console.log(mainFormCheckBox.checked);

//console.log(mainFormFile.value);

mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = "true";

mainFormCheckBox.value = "save";
mainFormCheckBox.checked = "true";

const mainFormSelect = mainForm.nameSelect;


console.log(mainFormSelect.options);

const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);

const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);

const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);


//mainFormSelect.options[1].selected = true;
//mainFormSelect.selectedIndex = 1;
//mainFormSelect.value = 2;

//let newOption = new Option("100", "4", true, true);
//mainFormSelect.append(newOption);

let selectedOptions = Array.from(mainFormSelect.options)
	.filter(option => option.selected)
	.map(option => option.value);

console.log(selectedOptions);



const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function (e) {
	mainFormInput.placeholder = "";
});

mainFormInput.addEventListener("blur", function (e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 2000);

const lesson = document.querySelector('.lesson');

lesson.addEventListener("focus", function (e) {
	lesson.classList.add('_focus');
	console.log('Див lesson в фокусе!');
});

lesson.addEventListener("blur", function (e) {
	lesson.classList.remove('_focus');
});

mainForm.addEventListener("focusin", function (e) {
	mainForm.classList.add('_active');
}); //{"capture": true});

*/

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;

/*
mainFormInput.addEventListener("change", function (e){
	console.log('Сработало change в input');
});

mainFormSelect.addEventListener("change", function (e){
	console.log('Сработало change в select');
});

mainFormFile.addEventListener("change", function (e){
	console.log('Сработало change в file');
});

mainFormInput.addEventListener("input", function (event){
	console.log(`value: ${mainFormInput.value}`);
});

const txtItem = document.querySelector('.tetarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.tetarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSelector);
txtItem.addEventListener("keydown", function (event){
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}

mainFormInput.addEventListener("input", function (event) {
	console.log(`value: ${mainFormInput}`);
});


mainFormInput.addEventListener("copy", function (event){
	console.log(`Копируем`);
});

mainFormInput.addEventListener("paste", function (event){
	console.log(`Вставляем`);
});

mainFormInput.addEventListener("cut", function (event){
	console.log(`Вырезаем`);
});

mainFormInput.addEventListener("paste", function (event){
	console.log(`Нельзя вставить`);
	event.preventDefault();
});

mainForm.addEventListener("submit", function (event){
	console.log('Форма отправляется...');

	if(!mainFormInput.value) {
		console.log('Поле nameInput не заполнено');
		event.preventDefault();
	}
});


mainFormInput.addEventListener("blur", function (e) {
	mainForm.submit();
});

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event){
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.w{2,8})+$/.test(input.value);
}

*/

mainFormFile.addEventListener("change", function (e){
	let selectedFile = mainFormFile.files[0];
	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});



