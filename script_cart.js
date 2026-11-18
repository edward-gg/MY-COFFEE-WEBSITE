const shopCartList = document.getElementById("shopCartList");
const cartGrandTotal = document.getElementById("cartGrandTotal");
const cartSubtotal = document.getElementById("cartSubtotal");
const discountRow = document.getElementById("discountRow");
const discountAmount = document.getElementById("discountAmount");
const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoMessage = document.getElementById("promoMessage");

const VALID_PROMO = "WELCOME10";
const DISCOUNT_RATE = 0.10;

/* Function to show the items in the shopping cart basket */
function renderCart(){
    let storeCart = localStorage.getItem('beanboutique_cart');
    let cart = JSON.parse(storeCart) || [];

    shopCartList.innerHTML = "";
    let totalSum = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalSum += itemTotal;

        const cardEl = document.createElement('div');
        cardEl.className = "shop-cart-card";
        cardEl.innerHTML = `
            <div class="cart-top-row">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-unit-price">£${item.price.toFixed(2)} each</span>
                </div>
            </div>

            <div class="cart-bottom-row">
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>

                <div class="cart-right-group">
                    <span class="cart-subtotal">£${itemTotal.toFixed(2)}</span>
                    <button class="btn-danger-sm" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>
        `;

        shopCartList.appendChild(cardEl);
    });

    /* ===== Subtotal ===== */
    cartSubtotal.innerText = `£${totalSum.toFixed(2)}`;

    /* ===== Apply discount if promo is active ===== */
    const promoActive = localStorage.getItem('beanboutique_promo') === VALID_PROMO;
    let discountValue = 0;
    let finalTotal = totalSum;

    if (promoActive && totalSum > 0) {
        discountValue = totalSum * DISCOUNT_RATE;
        finalTotal = totalSum - discountValue;
        discountRow.classList.add("show");
        discountAmount.innerText = `−£${discountValue.toFixed(2)}`;
    } else {
        discountRow.classList.remove("show");
    }

    cartGrandTotal.innerText = `£${finalTotal.toFixed(2)}`;

    /* ===== Empty cart ===== */
    if (cart.length === 0) {
        shopCartList.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
                <div class="empty-cart-buttons">
                    <a href="beans.html" class="btn-primary empty-cart-btn">
                        Browse Beans
                    </a>
                    <a href="equipment.html" class="btn-primary empty-cart-btn">
                        Browse Machines
                    </a>
                </div>
            </div>
        `;
        cartGrandTotal.innerText = "£0.00";
        document.getElementById("cartSummary").classList.add("hidden");
        return;
    } else {
        document.getElementById("cartSummary").classList.remove("hidden");
    }
}

/* ===== Promo Code ===== */
function applyPromoCode() {
    const entered = promoInput.value.trim().toUpperCase();

    if (!entered) {
        promoMessage.className = "promo-message error";
        promoMessage.innerText = "Please enter a code.";
        return;
    }

    if (entered === VALID_PROMO) {
        localStorage.setItem('beanboutique_promo', VALID_PROMO);
        promoMessage.className = "promo-message success";
        promoMessage.innerText = "✓ Code applied — 10% off your order!";
        myNotiToast("Discount applied 🎉", "success");
        renderCart();
    } else {
        localStorage.removeItem('beanboutique_promo');
        promoMessage.className = "promo-message error";
        promoMessage.innerText = "Invalid code. Try WELCOME10.";
        myNotiToast("Invalid code", "danger");
        renderCart();
    }
}

if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', applyPromoCode);
}

if (promoInput) {
    promoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            applyPromoCode();
        }
    });
}

/* ===== Item removal / quantity ===== */
function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('beanboutique_cart')) || [];
    cart = cart.filter(i => i.id != itemId);
    localStorage.setItem('beanboutique_cart', JSON.stringify(cart));
    myNotiToast("Item removed from Cart", "danger");
    updateBadgeUI();
    renderCart();
}

function updateQty(itemId, changeAmt){
    let cart = JSON.parse(localStorage.getItem("beanboutique_cart")) || [];
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += changeAmt;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id != itemId);
        }
    }
    localStorage.setItem('beanboutique_cart', JSON.stringify(cart));
    updateBadgeUI();
    renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);

/* ============ Clear All Items (SweetAlert2) ============ */
const clearAllBtn = document.getElementById("clearAll");
if (clearAllBtn) {
    clearAllBtn.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem('beanboutique_cart')) || [];
        if (cart.length === 0) {
            myNotiToast("Cart is already empty", "info");
            return;
        }

        Swal.fire({
            title: "Remove all items?",
            text: "Your entire cart will be emptied. This can't be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove all",
            cancelButtonText: "Keep shopping",
            confirmButtonColor: "#A62D1F",
            cancelButtonColor: "#8B6F47",
            reverseButtons: true,
            background: "#FBF6F0",
            color: "#2B1810",
            customClass: { popup: "swal-coffee-popup" }
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('beanboutique_cart');
                localStorage.removeItem('beanboutique_promo');
                myNotiToast("All items removed", "danger");
                updateBadgeUI();
                renderCart();
            }
        });
    });
}

/* ============ Checkout (SweetAlert2) ============ */
const checkoutBtn = document.getElementById("checkout");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem('beanboutique_cart')) || [];
        if (cart.length === 0) {
            myNotiToast("Your cart is empty", "info");
            return;
        }

        const promoActive = localStorage.getItem('beanboutique_promo') === VALID_PROMO;

        const promoText = promoActive
            ? '<br><small class="promo-applied">✓ 10% discount applied</small>'
            : '';

        Swal.fire({
            title: "Order Placed!",
            html: "Thank you for shopping with Bean Boutique.<br>Your order is on its way ☕" + promoText,
            icon: "success",
            confirmButtonText: "Great!",
            confirmButtonColor: "#B8722C",
            background: "#FBF6F0",
            color: "#2B1810",
            customClass: { popup: "swal-coffee-popup" }
        }).then(() => {
            localStorage.removeItem('beanboutique_cart');
            localStorage.removeItem('beanboutique_promo');
            updateBadgeUI();
            renderCart();
        });
    });
}