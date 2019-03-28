class HashTable {
	constructor(count = 5) {
		this._array = new Array(count);
		this._length = 0;
	}

	add(element) {
		const hash = this._createHash(element);
		if (!this._array[hash]) {
			this._array[hash] = [];
		}

		this._array[hash].push(element);
		this._length++;
	}

	has(element) {
		const hash = this._createHash(element);
		if (!this._array[hash]) {
			return false;
		}

		let index = this._array[hash].indexOf(element);

		return index !== -1;
	}

	remove(element) {
		const hash = this._createHash(element);
		if (!this._array[hash]) {
			return false;
		}

		const index = this._array[hash].indexOf(element);

		if (index !== -1) {
			this._array[hash].splice(index, 1);
		}

		this._length--;
	}

	_createHash(element) {
		let result = 0;

		element = element.toString();
		for (let i = 0; i < element.length; i++) {
			result += element.charCodeAt(i);
		}

		return result % 5;
	}
}