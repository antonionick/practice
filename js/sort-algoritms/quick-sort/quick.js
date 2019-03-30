// node js/sort-algoritms/quick-sort/quick.js

class Quick {
	constructor() {
		this._array = [];
	}

	sort() {
		this._array = this._recursiveSort(this._array);
	}

	_recursiveSort(arr) {
		// if arr has one element or doesn't have element
		if (arr.length <= 1) {
			return arr;
		}
		// compute middle element
		const m = Math.floor(arr.length / 2);
		const less = [];
		const more = [];
		// if element less than middle element add to less array
		// if element more than middle element add to more array
		for (let i = 0; i < arr.length; i++) {
			if (i !== m) {
				if (arr[i] <= arr[m]) {
					less.push(arr[i]);
				} else {
					more.push(arr[i]);
				}
			}
		}
		// call this function for less arr, current element and more arr
		return [].concat(this._recursiveSort(less), arr[m], this._recursiveSort(more));
	}

	get array() {
		return this._array;
	}

	set array(arr) {
		this._array = arr;
	}
}