// compute coords for elements when they position change to absolute
function computeCoord(e) {
	const coords = e.target.getBoundingClientRect();
	e.target.style.position = "absolute";
	// page scroll plus coord of window and subtract the position of mouse relative element
	e.target.style.left = window.pageXOffset + e.clientX - (e.clientX - coords.left) + "px";
	e.target.style.top = window.pageYOffset + e.clientY - (e.clientY - coords.top) + "px";
}

document.addEventListener("mousedown", e => {
	if (!e.target.classList.contains("draggable")) return;

	computeCoord(e);
	e.target.ondragstart = function () {
		return false;
	};

	document.onmousemove = function (event) {
		e.target.style.left = window.pageXOffset + event.clientX - e.layerX + "px";
		e.target.style.top = window.pageYOffset + event.clientY - e.layerY + "px";
	};

	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	};
});