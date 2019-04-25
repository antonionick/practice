const gallery = document.querySelector("#gallery");
gallery.addEventListener("click", e => {
	if (e.target.tagName !== "IMG") return;

	gallery.querySelector("#large").src = e.target.src;
});