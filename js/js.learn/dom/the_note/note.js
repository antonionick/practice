document.addEventListener("mouseover", e => {
	if (!e.target.getAttribute("data-tooltip")) return;

	const coords = e.target.getBoundingClientRect();

	const tooltip = document.createElement("div");
	tooltip.innerHTML = e.target.getAttribute("data-tooltip");
	tooltip.classList.add("tooltip-12313");
	tooltip.style.cssText = "position: fixed; padding: 10px; border: 1px solid grey; background: #ececec; border-radius: 10px;" +
		" left: " + coords.left + "px;";
	e.target.appendChild(tooltip);

	if (coords.top - tooltip.offsetHeight > 0) {
		tooltip.style.top = coords.top - tooltip.offsetHeight + "px";
	} else {
		tooltip.style.top = coords.bottom + "px";
	}
});

document.addEventListener("mouseout", e => {
	if (!e.target.getAttribute("data-tooltip")) return;

	const tooltip = e.target.querySelector(".tooltip-12313");
	e.target.removeChild(tooltip);
});
