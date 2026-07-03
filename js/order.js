// ======================================
// ACRB Smart Phones - Orders JS
// ======================================

// Orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Elements
const ordersContainer = document.getElementById("ordersContainer");
const totalOrders = document.getElementById("totalOrders");
const pendingOrders = document.getElementById("pendingOrders");
const deliveredOrders = document.getElementById("deliveredOrders");
const cancelledOrders = document.getElementById("cancelledOrders");

// Load Orders
function loadOrders(){

    if(!ordersContainer) return;

    ordersContainer.innerHTML = "";

    if(orders.length===0){

        ordersContainer.innerHTML=
        <div style="text-align:center;padding:60px;">
            <h2>No Orders Found 📦</h2>
            <p>Start Shopping Now</p>
        </div>
        ;

        updateSummary();

        return;

    }

    orders.forEach((order,index)=>{

        ordersContainer.innerHTML += 

<div class="order-card">

<div class="order-header">

<h3>${order.id}</h3>

<span class="status ${order.status.toLowerCase()}">
${order.status}
</span>

</div>

<div class="order-body">

<img src="${order.image}" alt="${order.name}">

<div class="order-info">

<h3>${order.name}</h3>

<p><b>Brand :</b> ${order.brand}</p>

<p><b>Price :</b> ₹${order.price}</p>

<p><b>Quantity :</b> ${order.quantity}</p>

<p><b>Payment :</b> ${order.payment}</p>

<p><b>Date :</b> ${order.date}</p>

</div>

</div>

<div class="order-buttons">

<button class="track-btn"
onclick="trackOrder(${index})">

🚚 Track

</button>

<button class="invoice-btn"
onclick="downloadInvoice(${index})">

📄 Invoice

</button>

<button class="buy-btn"
onclick="buyAgain(${index})">

🔁 Buy Again

</button>

<button class="cancel-btn"
onclick="cancelOrder(${index})">

❌ Cancel

</button>

<button class="review-btn"
onclick="reviewProduct(${index})">

⭐ Review

</button>

</div>

</div>

;

    });

    updateSummary();

}

// ======================================
// Order Summary
// ======================================

function updateSummary(){

    totalOrders.innerText = orders.length;

    pendingOrders.innerText =
    orders.filter(order=>order.status==="Pending").length;

    deliveredOrders.innerText =
    orders.filter(order=>order.status==="Delivered").length;

    cancelledOrders.innerText =
    orders.filter(order=>order.status==="Cancelled").length;

}

// ======================================
// Search Orders
// ======================================

const searchOrder = document.getElementById("searchOrder");

if(searchOrder){

searchOrder.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    const cards=document.querySelectorAll(".order-card");

    cards.forEach(card=>{

        const text=card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

}

// ======================================
// Filter Orders
// ======================================

const statusFilter=document.getElementById("statusFilter");

if(statusFilter){

statusFilter.addEventListener("change",function(){

    const value=this.value.toLowerCase();

    const cards=document.querySelectorAll(".order-card");

    cards.forEach(card=>{

        if(value==="all"){

            card.style.display="block";

        }else{

            const status=card.querySelector(".status").innerText.toLowerCase();

            if(status===value){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        }

    });

});

}

// ======================================
// Track Order
// ======================================

function trackOrder(index){

    alert("🚚 Your order is on the way!");

}

// ======================================
// Download Invoice
// ======================================

function downloadInvoice(index){

    alert("📄 Invoice download will be available soon.");

}

// ======================================
// Buy Again
// ======================================

function buyAgain(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const order = orders[index];

    cart.push({
        name: order.name,
        price: order.price,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("🛒 Product added to Cart!");

}

// ======================================
// Cancel Order
// ======================================

function cancelOrder(index){

    if(confirm("Are you sure you want to cancel this order?")){

        orders[index].status = "Cancelled";

        localStorage.setItem("orders", JSON.stringify(orders));

        loadOrders();

    }

}

// ======================================
// Rate & Review
// ======================================

function reviewProduct(index){

    let review = prompt("⭐ Rate this product (1-5)");

    if(review){

        alert("🙏 Thank you for your feedback!");

    }

}

// ======================================
// Payment Filter
// ======================================

const paymentFilter = document.getElementById("paymentFilter");

if(paymentFilter){

paymentFilter.addEventListener("change",function(){

    const value = this.value.toLowerCase();

    document.querySelectorAll(".order-card").forEach(card=>{

        if(value==="all"){

            card.style.display="block";

            return;

        }

        const payment = card.innerText.toLowerCase();

        if(payment.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

}

// ======================================
// Auto Load
// ======================================

window.onload = loadOrders;