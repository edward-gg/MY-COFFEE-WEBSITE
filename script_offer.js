/* ===== Offer Page Logic — Plain JS, No Bootstrap ===== */

// ---- Open modal ----
function openModal(planName) {
    const modal = document.getElementById('subscribeModal');
    const title = modal.querySelector('.modal-title');
    title.textContent = 'Subscribe to ' + planName + ' Plan';
    modal.classList.add('active');
}

// ---- Close modal ----
function closeModal() {
    const modal = document.getElementById('subscribeModal');
    modal.classList.remove('active');
}

// ---- Modal: click outside to close ----
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('subscribeModal');

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ---- Escape key closes modal ----
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ---- Form submit ----
    const form = document.getElementById('subscribeForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show Toastify "Payment Completed" message
            myNotiToast('Payment Completed — Welcome to Bean Boutique ☕', 'success');

            // Save plan choice (optional)
            const planTitle = modal.querySelector('.modal-title').textContent;
            localStorage.setItem('beanboutique_subscription', JSON.stringify({
                plan: planTitle,
                startedAt: new Date().toISOString()
            }));

            // Close modal and reset form
            closeModal();
            form.reset();
        });
    }
});