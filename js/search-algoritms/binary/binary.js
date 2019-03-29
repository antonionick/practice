// /search-algoritms/binary/binary.js

class Binary {
	constructor() {
		this._array = [];
	}

	search(item) {
		return this._binarySearch(item, 0, this._array.length);
	}

	_binarySearch(item, min, max) {
		// compute middle element
		const middle = Math.floor((max - min) / 2) + min;

		// if min + 1 equal max, arr doesn't have searching element
		if (min + 1 >= max) {
			return null;
		}

		// if middle element more then searching element, we need a smaller middle element
		// if middle element less then searching element, we need a bigger middle element
		if (this._array[middle] > item) {
			return this._binarySearch(item, min, middle);
		} else if (this._array[middle] < item) {
			return this._binarySearch(item, middle, max);
		} else if (this._array[middle] === item){
			return middle;
		}
	}

	setArray(arr) {
		this._array = arr;
	}

	getArray() {
		return this._array;
	}
}