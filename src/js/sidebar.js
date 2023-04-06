const btnOpen = document.getElementById("open-sidebar");
const btnClose = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar-link");

btnOpen.addEventListener("click", () => {
	sidebar.classList.remove("translate-x-full");
});

btnClose.addEventListener("click", () => {
	sidebar.classList.add("translate-x-full");
});

links.forEach((link) =>
	link.addEventListener("click", () => {
		// link.scrollIntoView({ behaviour: "smooth" });
		sidebar.classList.add("translate-x-full");
	})
);
