let imgs = document.querySelectorAll("img:not([realsrc = \"\"])");

function downlImgs() {
	const heightPage = document.documentElement.clientHeight;
	for (let i = 0; i < imgs.length; i++) {
		const coords = imgs[i].getBoundingClientRect();
		if (coords.top > 0 && coords.top <= heightPage || coords.bottom > 0 && coords.bottom <= heightPage) {
			if (imgs[i].getAttribute("realsrc")) {
				imgs[i].src = imgs[i].getAttribute("realsrc");
				imgs[i].setAttribute("realsrc", "");
			}
		}
	}
}

downlImgs();
window.addEventListener("scroll", e => {
	downlImgs();
})