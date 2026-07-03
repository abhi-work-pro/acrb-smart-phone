// ==========================
// AR Smart Phones Wishlist
// ==========================

const wishlistContainer = document.getElementById("wishlistItems");

function loadWishlist() {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = 
            <div class="empty">
                <h2>❤️ Your Wishlist is Empty</h2>
                <a href="products.html">Shop Now</a>
            </div>
        ;
        return;
    }

    wishlist.forEach((item, index) => {

        wishlistContainer.innerHTML += 
            <div class="wish-card">
                <h3>${item}</h3>

                <button onclick="moveToCart('${item}')">
                    🛒 Add to Cart
                </button>

                <button onclick="removeWishlist(${index})">
                    ❌ Remove
                </button>
            </div>
        ;

    });

}

function removeWishlist(index) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    loadWishlist();

}

function moveToCart(name) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: 0,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added to Cart 🛒");

}

window.onload = loadWishlist;