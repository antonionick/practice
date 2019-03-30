//node js/sort-algoritms/shell-sort/shell.js

class ShellSort {
	constructor() {
		this._array = [];
	}

	sort() {
		// define step for division into subarrays
		let step = this._array.length;
		while (step > 0) {
			// compute step
			step = Math.floor(step / 2);

			for (let i = 0; i < this._array.length; i++) {
				// index is pointer to an array element
				let index = i, current = this._array[index];
				// if previous subarray element more than current subarray element
				// then previous element equal current and index equal previous index
				while (index > 0 && this._array[index - step] > current) {
					this._array[index] = this._array[index - step];
					index -= step;
				}

				this._array[index] = current;
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