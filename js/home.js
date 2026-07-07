// AR Smart Phones

console.log("AR Smart Phones Loaded");

// Shop Now Button
const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("click", function () {
        window.location.href = "products.html";
    });
}

// Search Button
const searchBtn = document.querySelector(".search button");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {

        const searchInput = document.querySelector(".search input");

        if (!searchInput) return;

        const searchText = searchInput.value.trim();

        if (searchText === "") {
            alert("Please enter a phone name.");
            return;
        }

        window.location.href =
            "products.html?search=" + encodeURIComponent(searchText);

    });
}

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!slides.length) return;

    let index = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slides[i].classList.add("active");
        if (dots[i]) dots[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    if (next) next.onclick = nextSlide;
    if (prev) prev.onclick = prevSlide;

    dots.forEach((dot, i) => {
        dot.onclick = () => {
            index = i;
            showSlide(index);
        };
    });

    showSlide(0);

    setInterval(nextSlide, 3000);

});