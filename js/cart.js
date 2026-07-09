// =====================================
// AR Smart Phones - Professional Cart
// Part 1
// =====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save Cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

// Cart Badge
function updateCartBadge() {

    const badge = document.querySelector(".badge");

    if (!badge) return;

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    badge.textContent = count;

    badge.style.display = count > 0 ? "flex" : "none";
}

// Add To Cart
function addToCart(name, price, image) {

    const index = cart.findIndex(item => item.name === name);

    if (index > -1) {

        cart[index].quantity++;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            quantity: 1
        });

    }

    saveCart();

    alert(name + " added to cart successfully!");

}

// Load Cart
function loadCart() {

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems || !totalPrice) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = 
            <div class="empty-cart">
                <h2>🛒 Your Cart is Empty</h2>
                <a href="products.html">Continue Shopping</a>
            </div>
        ;

        totalPrice.innerHTML = "₹0";

        updateCartBadge();

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += 
        <div class="cart-card">

            <div class="cart-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>Price : ₹${item.price.toLocaleString()}</p>
                <p>Total : ₹${itemTotal.toLocaleString()}</p>
            </div>

            <div class="cart-buttons">

                <button onclick="decreaseQuantity(${index})">−</button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${index})">+</button>

                <button class="remove-btn"
                    onclick="removeCart(${index})">
                    Remove
                </button>

            </div>

        </div>
        ;

    });

    totalPrice.innerHTML = "₹" + total.toLocaleString();

    updateCartBadge();

}

// Increase Quantity
function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    loadCart();

}

// Decrease Quantity
function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    loadCart();

}

// Remove Item
function removeCart(index) {

    if (confirm("Remove this product from cart?")) {

        cart.splice(index, 1);

        saveCart();

        loadCart();

    }

}

// =====================================
// Checkout
// =====================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    const confirmOrder = confirm(
        "Total Amount : ₹" +
        total.toLocaleString() +
        "\n\nDo you want to place the order?"
    );

    if (confirmOrder) {

        alert("🎉 Order Placed Successfully!");

        cart = [];

        saveCart();

        loadCart();

    }

}

// =====================================
// Clear Cart
// =====================================

function clearCart() {

    if (cart.length === 0) {

        alert("Cart is already empty.");

        return;

    }

    if (confirm("Clear all items from cart?")) {

        cart = [];

        saveCart();

        loadCart();

    }

}

// =====================================
// Buy Now
// =====================================

function buyNow(name, price, image) {

    addToCart(name, price, image);

    window.location.href = "cart.html";

}

// =====================================
// Page Load
// =====================================

window.addEventListener("load", () => {

    updateCartBadge();

    loadCart();

});

// =====================================
// Export (Optional)
// =====================================

window.addToCart = addToCart;
window.buyNow = buyNow;
window.checkout = checkout;
window.clearCart = clearCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeCart = removeCart;