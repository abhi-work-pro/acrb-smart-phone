// ===============================
// ACRB Smart Phones - Products JS
// ===============================

console.log("Products JS Loaded");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// -------------------------------
// Add To Cart
// -------------------------------
document.querySelectorAll(".cart-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const product = {
            name: card.dataset.name,
            price: parseInt(card.dataset.price),
            image: card.dataset.image,
            quantity: 1
        };

        const existing = cart.find(item => item.name === product.name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(product.name + " added to Cart 🛒");

    });

});

// -------------------------------
// Wishlist
// -------------------------------
document.querySelectorAll(".wishlist-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const product = {
            name: card.dataset.name,
            price: parseInt(card.dataset.price),
            image: card.dataset.image
        };

        const existing = wishlist.find(item => item.name === product.name);

        if (existing) {

            alert("Already in Wishlist ❤️");
            return;

        }

        wishlist.push(product);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        alert(product.name + " Added to Wishlist ❤️");

    });

});

// -------------------------------
// Buy Now
// -------------------------------
document.querySelectorAll(".buy-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const product = [{
            name: card.dataset.name,
            price: parseInt(card.dataset.price),
            image: card.dataset.image,
            quantity: 1
        }];

        localStorage.setItem("cart", JSON.stringify(product));

        window.location.href = "checkout.html";

    });

});

// -------------------------------
// Search
// -------------------------------
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// -------------------------------
// Cart Count
// -------------------------------
function updateCartCount() {

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    const cartLink = document.querySelector('a[href="cart.html"]');

    if (cartLink) {
        cartLink.innerHTML = "Cart (" + count + ")";
    }

}

updateCartCount();

// -------------------------------
// Dark Mode
// -------------------------------
const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}

console.log("Products JS Loaded Successfully");
console.log("Cards:", document.querySelectorAll(".card").length);
console.log("Cart Buttons:", document.querySelectorAll(".cart-btn").length);
console.log("Wishlist Buttons:", document.querySelectorAll(".wishlist-btn").length);