function AddEvent() {
}

AddEvent.prototype.add = function (elemClass, event = 0, func) {
	let elem = document.querySelector(`.${elemClass}`);

	if (func === undefined || typeof event !== "string") {
		return false;
	}
	elem.addEventListener(event, func);
};

function clickFunction(func, date) {
	if ({}.toString.call(date).slice(8, -1).toLowerCase() !== "date") {
		date = undefined;
	}
	date = date || new Date();
	alert(func(date));
}

function setFunction(clickFunc) {
	return clickFunction.bind(null, clickFunc);
}

let showFormatDate = setFunction(formatDate);
let showFormatDatePro = setFunction(formatDatePro);

let addEvents = new AddEvent();
addEvents.add("formDate", "click", showFormatDate);
addEvents.add("formDatePro", "click", showFormatDatePro);

function addZero(number, size) {
	if (number < size) {
		number = "0" + number;
	}
	return number;
}

function formatDate(d) {
	let day = d.getDate();
	let month = d.getMonth() + 1;
	let year = d.getFullYear().toString();
	day = addZero(day, 10);
	month = addZero(month, 10);
	year = year.slice(2);
	return day + "." + month + "." + year;
}

function formatDatePro(d) {
	let now = new Date();
	let computed = (now - d) / 1000;

	if (computed < 1) {
		return "Меньше секунды";
	} else if (computed < 60) {
		return Math.floor(computed) + " сек. назад";
	} else if (computed < 3600) {
		return Math.floor(computed / 60) + " мин. назад";
	}

	let hours = Math.floor(computed / 60 / 60);
	let minutes = Math.floor((computed - hours * 60 * 60) / 60);

	hours = addZero(hours, 10);
	minutes = addZero(minutes, 10);

	return formatDate(d) + " " + hours + ":" + minutes;
}