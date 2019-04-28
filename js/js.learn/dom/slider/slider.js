const elem = document.querySelector(".thumb");

elem.onmousedown = function (e) {
	const parent = e.target.parentElement;

	console.log(e.clientX - e.target.getBoundingClientRect().left);
	console.log(e.layerX);
	document.onmousemove = function (event) {
		let offset = event.clientX - e.layerX - parent.getBoundingClientRect().left;

		if (offset < 0) {
			offset = 0;
		} else if (offset > parent.offsetWidth - e.target.offsetWidth) {
			offset = parent.offsetWidth - e.target.offsetWidth;
		}
		elem.style.left = offset + "px";
	};

	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	};
};