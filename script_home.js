/* ===== Home Page — Slideshow + Discount Modal ===== */
// ---- Swiper slideshow ----
new Swiper('.home-swiper', {
    loop: true,
    speed: 600,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.home-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.home-swiper .swiper-button-next',
        prevEl: '.home-swiper .swiper-button-prev',
    },
});

// ---- Discount Modal ----
document.addEventListener("DOMContentLoaded", () => {
    const modal               = document.getElementById("discountModal");
    const closeModalBtn       = document.getElementById("closeModalBtn");
    const discountForm        = document.getElementById("discountForm");
    const modalFormContent    = document.getElementById("modalFormContent");
    const modalSuccessContent = document.getElementById("modalSuccessContent");
    const continueBtn         = document.getElementById("continueBtn");

    // ⛔ Don't show the modal if the user already claimed the discount
    const alreadyClaimed = localStorage.getItem('beanboutique_discount_claimed');

    if (alreadyClaimed !== 'true') {
    modal.classList.add("open");
    }

    // Form submit → show success view AND remember the claim
    discountForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const strEmail = document.getElementById("emailInput").value.trim();
        if (strEmail) {
            modalFormContent.classList.add("hidden");
            modalSuccessContent.classList.add("show");

            // Save email
            localStorage.setItem('bb_discount_email', strEmail);

            // Mark as claimed so the modal doesn't show again
            localStorage.setItem('beanboutique_discount_claimed', 'true');
        }
    });

    // Dismiss handlers
    function dismissModal() {
    modal.classList.remove("open");
    }

    continueBtn.addEventListener("click", dismissModal);
    closeModalBtn.addEventListener("click", dismissModal);

    // Click outside modal box closes it
    modal.addEventListener("click", (e) => {
        if (e.target === modal) dismissModal();
    });

    // Escape key closes it
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            dismissModal();
        }
    });
});