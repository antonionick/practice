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
}