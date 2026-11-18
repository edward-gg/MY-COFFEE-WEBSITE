// ============ Hamburger Menu ============
const hamBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
if (hamBtn && navLinks) {
    hamBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        navLinks.classList.toggle('active');
        hamBtn.classList.toggle('active');
    });
}

// ============ Toastify Notification ============
function myNotiToast(message, type = 'info') {
    Toastify({
        text: message,
        duration: 1500,
        gravity: "top",
        position: "right",
        className: `toast-custom toast-${type}`,
    }).showToast();
}

// ============ Cart Badge ============
const cartBadge = document.getElementById("cartBadge");
const cartBtn = document.getElementById("cartToggleBtn");

if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        window.location.href = "cart.html";
    });
}

function updateBadgeUI() {
    if (!cartBadge) return;
    let totalItems = 0;
    const localShopCart = localStorage.getItem('beanboutique_cart');
    if (localShopCart) {
        let myCart = JSON.parse(localShopCart);
        for (const item of myCart) totalItems += item.quantity;
    }
    cartBadge.textContent = totalItems;
}

if (cartBadge) updateBadgeUI();