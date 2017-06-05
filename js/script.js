
var link = document.querySelector(".about-btn-write");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

var link_map = document.querySelector(".js-map-show");
var popup_map = document.querySelector(".modal-content-map");
var close_map = popup_map.querySelector(".modal-content-close");

link_map.addEventListener("click", function (event) {
	event.preventDefault();
	popup_map.classList.add("modal-content-map-show");
});

close_map.addEventListener("click", function (event) {
	event.preventDefault();
	popup_map.classList.remove("modal-content-map-show");
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");

if (n >slides.length) {
	slideIndex = 1
}
if (n < 1) {
	slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";

}