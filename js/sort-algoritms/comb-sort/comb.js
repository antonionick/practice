// node js/sort-algoritms/comb-sort/comb.js

class Comb {
	constructor() {
		this._array = [];
	}

	sort() {
		// number for division step
		const factor = 1.247;
		let step = this._array.length;

		while (step > 0) {
			step = Math.floor(step / factor);

			for (let i = 0, j = step; j < this._array.length; i++, j++) {
				// if i array element more than j array element, swap
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