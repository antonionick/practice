//node js/search-algoritms/interpolation-search/interpolation.js

class Interpolation {
	constructor() {
		this._array = [];
	}

	search(item) {
		return this._interpolationSearch(item, 0, this._array.length - 1);
	}

	_interpolationSearch(item, min, max) {
		// if element min element more the item or max element less then item, array doesn't have item
		if (this._array[min] > item || this._array[max] < item) {
			return null;
		}

		// compute approximate item index.
		const index = min + Math.floor(((item - this._array[min]) * (max - min)) / (this._array[max] - this._array[min]));

		// if element of index less then item, min equal index + 1
		// if element of index more then item, max equal index - 1
		if (this._array[index] < item) {
			return this._interpolationSearch(item, index + 1, max);
		} else if (this._array[index] > item) {
			return this._interpolationSearch(item, min, index - 1);
		} else {
			return index;
		}
	}

	setArray(arr) {
		this._array = arr;
	}

	getArray() {
		return this._array;
	}

}