const serviceImg = document.getElementById("services-img");

let i = 1;

serviceImg.addEventListener("click", () => {
	nextImg();
});

function nextImg() {
	if (i < 4) i += 1;
	else if (i === 4) i = 1;
	serviceImg.setAttribute("src", `haircut-${i}.png`);
}

let interval;
window.onload = () => {
	interval = setInterval(() => {
		nextImg();
	}, 3000);
};
window.onunload = () => {
	clearInterval(interval);
};
