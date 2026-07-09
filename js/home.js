// AR Smart Phones

console.log("AR Smart Phones Loaded");

// Shop Now Button
const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("click", function () {
        window.location.href = "products.html";
    });
}

  
    // ===============================
// Professional Search System
// ===============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const suggestions = document.getElementById("suggestions");
const cards = document.querySelectorAll(".card");

function searchProducts() {

    const value = searchInput.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    let found = 0;

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const image = card.querySelector("img").getAttribute("src");

        if (title.includes(value)) {

            card.style.display = "block";
            found++;

            if (value !== "") {

                const item = document.createElement("div");
                item.className = "suggestion-item";

                item.innerHTML = 
                    <img src="${image}" alt="">
                    <span>${card.querySelector("h3").textContent}</span>
                ;

                item.onclick = function () {

                    searchInput.value = card.querySelector("h3").textContent;

                    cards.forEach(c => c.style.display = "none");

                    card.style.display = "block";

                    suggestions.style.display = "none";

                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                };

                suggestions.appendChild(item);

            }

        } else {

            card.style.display = "none";

        }

    });

    if (value === "") {

        cards.forEach(card => card.style.display = "block");
        suggestions.style.display = "none";

    } else {

        suggestions.style.display = found ? "block" : "none";

    }

}

// Live Search
searchInput.addEventListener("input", searchProducts);

// Enter Search
searchInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        searchProducts();

    }

});

// Search Icon
searchBtn.addEventListener("click", searchProducts);

// Hide Suggestions
document.addEventListener("click", function (e) {

    if (!document.querySelector(".search").contains(e.target)) {

        suggestions.style.display = "none";

    }

});

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

window.onclick = function(e){

    if(!e.target.matches('.menu-btn')){

        let menu = document.getElementById("navMenu");

        if(menu.classList.contains("active")){
            menu.classList.remove("active");
        }

    }

}