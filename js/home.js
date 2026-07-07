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

