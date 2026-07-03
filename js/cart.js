// ===============================
// AR Smart Phones - Cart JS
// ===============================

// Cart Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

// ===============================
// Load Cart
// ===============================
function loadCart() {

    if (!cartItems || !totalPrice) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML =` 
            <div class="empty-cart">
                <h2>🛒 Your Cart is Empty</h2>
                <a href="products.html">Continue Shopping</a>
            </div>
        `;
        totalPrice.innerText = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += 
            `<div class="cart-card">

                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>Price : ₹${item.price}</p>;
                    <p>Quantity : ${item.quantity}</p>
                    <p><strong>Total : ₹${item.price * item.quantity}</strong></p>
                </div>

                <div class="cart-buttons">
                    <button onclick="increaseQuantity(${index})">➕</button>
                    <button onclick="decreaseQuantity(${index})">➖</button>
                    <button onclick="removeCart(${index})">❌ Remove</button>
                </div>

            </div>
        ;
    });

    totalPrice.innerText = total;
}

// ===============================
// Increase Quantity
// ===============================
function increaseQuantity(index) {

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

// ===============================
// Decrease Quantity
// ===============================
function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

// ===============================
// Remove Product
// ===============================
function removeCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

// ===============================
// Checkout
// ===============================
function checkout() {

    if (cart.length === 0) {
        alert("Your Cart is Empty 🛒");
        return;
    }

    window.location.href = "checkout.html";
}

// ===============================
// Page Load
// ===============================
window.onload = loadCart;