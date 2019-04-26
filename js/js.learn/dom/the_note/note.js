document.addEventListener("mouseover", e => {
	let target = e.target;
	while (!target.getAttribute("data-tooltip") && target !== document.documentElement) {
		target = target.parentElement;
	}
	if (!target.getAttribute("data-tooltip")) return;

	const coords = target.getBoundingClientRect();

	const tooltip = document.createElement("div");
	tooltip.innerHTML = target.getAttribute("data-tooltip");
	tooltip.classList.add("tooltip-12313");
	tooltip.style.cssText = "position: fixed; padding: 10px; border: 1px solid grey; background: #ececec; border-radius: 10px;";
	target.appendChild(tooltip);

	if (coords.top - tooltip.offsetHeight > 0) {
		tooltip.style.top = coords.top - tooltip.offsetHeight + "px";
	} else {
		tooltip.style.top = coords.bottom + "px";
	}

	tooltip.style.left = coords.left + (target.offsetWidth / 2 ) - tooltip.offsetWidth / 2+ "px";
});

document.addEventListener("mouseout", e => {
	let target = e.target;
	while (!target.getAttribute("data-tooltip") && target !== document.documentElement) {
		target = target.parentElement;
	}
	if (!target.getAttribute("data-tooltip")) return;

	const tooltip = target.querySelector(".tooltip-12313");
	target.removeChild(tooltip);
});
