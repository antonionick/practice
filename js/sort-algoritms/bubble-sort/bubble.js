// node js/sort-algoritms/bubble-sort/bubble.js

class Bubble {
	constructor() {
		this._array = [];
	}

	sort() {
		for (let i = 0; i < this._array.length; i++) {
			for (let j = this._array.length - 1; j > i; j--) {
				// if i array element bigger then j array element, swap them
				if (this._array[i] > this._array[j]) {
					let item = this._array[i];
					this._array[i] = this._array[j];
					this._array[j] = item;
				}
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