class Selection {

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