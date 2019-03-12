let carts = document.querySelectorAll(".cart");
let error = document.querySelectorAll(".error");

carts.forEach(function (item) {
	item.addEventListener("click", function () {
		document.querySelector(".not-page").style.display = "block";
	})
});

error.forEach(function (item) {
	item.addEventListener("click", function () {
		let elem = this;
		if (!elem.classList.contains("not-page")) {
			elem = elem.parentElement;
		}
		elem.style.display = "none";
	})
});