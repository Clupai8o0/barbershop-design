const quotes = document.querySelectorAll("p.quote");
const review = document.getElementById("review");

ScrollReveal({
	distance: "64px",
	easing: "cubic-bezier(0.65,0.05,0.36,1)",
	duration: 800,
});
ScrollReveal().reveal(quotes, {
	interval: 200,
});
ScrollReveal().reveal(review, { delay: 600 });

const chairImg = document.getElementById("chair-img");
const chairDetails = document.getElementById("chair-details");
const servicesImg = document.getElementById("services-img");
const servicesDetails = document.getElementById("services-details");

ScrollReveal({ distance: "124px", duration: 1000 });
ScrollReveal().reveal(chairImg, { origin: "left" });
ScrollReveal().reveal(chairDetails, { origin: "right" });
ScrollReveal().reveal(servicesImg, { origin: "right" });
ScrollReveal().reveal(servicesDetails, { origin: "left" });

const galleryImgs = document.querySelectorAll(".gallery-img");

ScrollReveal({ distance: "36px", duration: 600 });
ScrollReveal().reveal(galleryImgs, { origin: "bottom", delay: 200 });

const contactImg = document.getElementById("contact-img");
const contactDetails = document.getElementById("contact-details");

ScrollReveal({ distance: "124px", duration: 1000, delay: 500 });
ScrollReveal().reveal(contactImg, { origin: "right" });
ScrollReveal().reveal(contactDetails, { origin: "left" });
