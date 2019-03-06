let elements = document.querySelectorAll(".list .icon:not(.article)");

elements.forEach(function (item, index) {
	item.addEventListener("click", function (e) {
		e = e.path[2];
		let text = e.querySelector(`.text p`);
		let style = getComputedStyle(text);

		if (style.display === "block") {
			text.style.display = "none";
		} else {
			text.style.display = "block";
		}
	})
});