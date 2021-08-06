function showGiftContainer() {
	const giftContainer = document.querySelector(".gift-container");
	const giftButton = document.querySelector(".gift-button");
	giftContainer.classList.add("gift-active");
	giftButton.addEventListener("click", () => {
		giftContainer.classList.remove("gift-active");
	});

	window.addEventListener('click', function (closeGiftContainer) {
		if (!giftContainer.contains(closeGiftContainer.target)) {
			giftContainer.classList.remove("gift-active");
		}
	});
}

setTimeout(showGiftContainer, 1000);

