// ===============================
// AR Smart Phones - Checkout JS
// ===============================

// Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Price Elements
const itemsPrice = document.getElementById("itemsPrice");
const gstPrice = document.getElementById("gstPrice");
const discountPrice = document.getElementById("discountPrice");
const totalPrice = document.getElementById("totalPrice");

// Coupon
let discount = 0;

// Total Calculate
function calculateTotal() {

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += (item.price || 0) * (item.quantity || 1);
    });

    let gst = Math.round(subtotal * 0.18);

    let delivery = subtotal > 0 ? 99 : 0;

    let total = subtotal + gst + delivery - discount;

    if(itemsPrice) itemsPrice.innerText = "₹" + subtotal;
    if(gstPrice) gstPrice.innerText = "₹" + gst;
    if(discountPrice) discountPrice.innerText = "₹" + discount;
    if(totalPrice) totalPrice.innerText = "₹" + total;

}

calculateTotal();

// Coupon Apply
function applyCoupon(){

    const couponInput = document.querySelector(".coupon input");

    if(!couponInput) return;

    const code = couponInput.value.trim().toUpperCase();

    if(code === "ACRB100"){

        discount = 100;

        alert("Coupon Applied Successfully ✅");

    }else{

        discount = 0;

        alert("Invalid Coupon ❌");

    }

    calculateTotal();

}

// Coupon Button
const couponBtn = document.querySelector(".coupon button");

if(couponBtn){

    couponBtn.addEventListener("click", applyCoupon);

}

// Place Order
function placeOrder(){

    const checkbox = document.querySelector(".terms input");

    if(!checkbox.checked){

        alert("Please accept Terms & Conditions.");

        return;

    }

    if(cart.length===0){

        alert("Your Cart is Empty.");

        return;

    }

    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href="order-success.html";

    function buyNow(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "checkout.html";
}

}