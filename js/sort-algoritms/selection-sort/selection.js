//node js/sort-algoritms/selection-sort/selection.js

class Selection {
	constructor() {
		this._array = [];
	}

	sort() {
		for (let i = 0; i < this._array.length; i++) {
			let min = i; // define min index variable
			for (let j = i + 1; j < this._array.length; j++) {
				// if j item of array less then min array item
				if (this._array[j] < this._array[min]) {
					min = j;
				}
			}
			// if min isn't i, swap elements
			if (min !== i) {
				let item = this._array[i];
				this._array[i] = this._array[min];
				this._array[min] = item;
			}

		}
	}

	get array() {
		return this._array;
	}

	set array(arr) {
		this._array = arr;
	}

	createArr(length = 0) {
		this._array = [];

		for (let i = 0; i < length; i++) {
			this._array[i] = this._getRandom(0, i + i);
		}
	}

	_getRandom(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
}

let sec = new Selection();
sec.createArr(100);
sec.sort();
console.log(sec.array);