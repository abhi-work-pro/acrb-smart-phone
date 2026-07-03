// ===============================
// ACRB Smart Phones - Order Success
// ===============================

// Order ID
const orderId = document.getElementById("orderId");

if(orderId){

    const random = Math.floor(Math.random()*900000)+100000;

    orderId.innerText = "#ACRB" + random;

}

// Order Date
const orderDate = document.getElementById("orderDate");

if(orderDate){

    const today = new Date();

    orderDate.innerText = today.toLocaleString();

}

// Customer Details
document.getElementById("customerName").innerText =
"Name : " + (localStorage.getItem("customerName") || "Guest User");

document.getElementById("customerPhone").innerText =
"Phone : " + (localStorage.getItem("customerPhone") || "Not Available");

document.getElementById("customerEmail").innerText =
"Email : " + (localStorage.getItem("customerEmail") || "Not Available");

document.getElementById("customerAddress").innerText =
"Address : " + (localStorage.getItem("customerAddress") || "Not Available");

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let subtotal = 0;

cart.forEach(item=>{

    subtotal += item.price * item.quantity;

});

let gst = Math.round(subtotal * 0.18);

let delivery = subtotal > 0 ? 99 : 0;

let discount = 0;

let total = subtotal + gst + delivery - discount;

// Price Summary
document.getElementById("itemsPrice").innerText = "₹" + subtotal;

document.getElementById("gstPrice").innerText = "₹" + gst;

document.getElementById("discountPrice").innerText = "₹" + discount;

document.getElementById("totalPrice").innerText = "₹" + total;

// Payment Status
document.getElementById("paymentStatus").innerText = "Pending";

// Download Invoice
document.getElementById("downloadInvoice").addEventListener("click",function(){

    alert("Invoice Download feature will be available soon.");

});

// Track Order
document.getElementById("trackOrder").addEventListener("click",function(){

    alert("Order Tracking feature coming soon.");

});