// ===============================
// AR Smart Phones
// ===============================

console.log("AR Smart Phones Loaded");

// ===============================
// Shop Now Button
// ===============================

const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        window.location.href = "products.html";
    });
}

// ===============================
// Search System
// ===============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const suggestions = document.getElementById("suggestions");
const cards = document.querySelectorAll(".card");

function searchProducts() {

    if (!searchInput || !suggestions) return;

    const value = searchInput.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    let found = 0;

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const image = card.querySelector("img").src;

        if (value === "" || title.includes(value)) {

            card.style.display = "";

            if (value !== "") {

                found++;

                const item = document.createElement("div");
                item.className = "suggestion-item";

                item.innerHTML = 
                    <img src="${image}" alt="">
                    <span>${card.querySelector("h3").textContent}</span>
                ;

                item.onclick = () => {

                    searchInput.value = card.querySelector("h3").textContent;

                    suggestions.style.display = "none";

                    cards.forEach(c => c.style.display = "none");

                    card.style.display = "";

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

    suggestions.style.display =
        (value !== "" && found > 0) ? "block" : "none";

}

if (searchInput) {

    searchInput.addEventListener("input", searchProducts);

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){
            searchProducts();
        }

    });

}

if(searchBtn){

    searchBtn.addEventListener("click", searchProducts);

}

document.addEventListener("click", function(e){

    const search = document.querySelector(".search");

    if(search && !search.contains(e.target)){

        suggestions.style.display="none";

    }

});

// ===============================
// Mobile Menu
// ===============================

function toggleMenu(){

    document.getElementById("navMenu").classList.toggle("active");

}

document.addEventListener("click",function(e){

    const menu=document.getElementById("navMenu");
    const btn=document.querySelector(".menu-btn");

    if(!menu || !btn) return;

    if(!menu.contains(e.target) && !btn.contains(e.target)){

        menu.classList.remove("active");

    }

});