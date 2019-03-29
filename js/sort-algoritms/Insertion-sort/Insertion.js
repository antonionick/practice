//node js/sort-algoritms/insertion-sort/insertion.js

class Insertion {
	constructor() {
		this._array = [];
	}

	sort() {
		for (let i = 0; i < this._array.length; i++) {
			let index = i;
			for (let j = i - 1; j >= 0; j--) {

				if (this._array[index] < this._array[j]) {
					let item = this._array[index];
					this._array[index] = this._array[j];
					this._array[j] = item;
					index--;
				}
			}
		}
	}

	set array(arr) {
		this._array = arr;
	}

	get array() {
		return this._array;
	}
}
