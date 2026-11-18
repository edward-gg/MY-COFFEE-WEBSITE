/* ===== Equipment Page — Cards + Lightbox Swiper + AOS + Cart ===== */

const products = [
  { 
    id: 101, 
    name: "Barista Pro Espresso Machine", 
    category: "Espresso Machines", 
    price: 249.00, 
    tags: ["Best Seller"],
    images: [
        "machine-images/Espresso-Machine-1.jpg",
        "machine-images/Espresso-Machine-2.jpg",
        "machine-images/Espresso-Machine-3.jpg"
    ],
    specs: [
        { label: "Pressure", value: "15 bar" },
        { label: "Water Tank", value: "1.8 L" },
        { label: "Best For", value: "Latte, Cappuccino, Espresso" }
    ],
    rating: "★★★★★",
    reviewCount: "4.9 (128 reviews)",
    desc: "A 15-bar pump espresso machine with a built-in milk frother — pulls rich, café-quality shots with a thick, golden crema.", 
    tip: "Preheat the portafilter with hot water for a better shot."
  },
  { 
    id: 102, 
    name: "Classic French Press", 
    category: "Brewers", 
    price: 29.00, 
    tags: [],
    images: [
        "machine-images/French-Press-1.jpg",
        "machine-images/French-Press-2.jpg",
        "machine-images/French-Press-3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "1 L (8 cups)" },
        { label: "Material", value: "Borosilicate glass + steel" },
        { label: "Best For", value: "Everyday brewing" }
    ],
    rating: "★★★★☆",
    reviewCount: "4.6 (94 reviews)",
    desc: "A 1-litre borosilicate glass French press with a stainless steel plunger — full-bodied, rich coffee with no paper filters needed.", 
    tip: "Use coarse ground coffee and steep for 4 minutes."
  },
  { 
    id: 103, 
    name: "Ceramic Pour-Over Kit", 
    category: "Brewers", 
    price: 34.50, 
    tags: [],
    images: [
        "machine-images/Ceramic-Pour-Over-Kit-1.jpg",
        "machine-images/Ceramic-Pour-Over-Kit-2.jpg",
        "machine-images/Ceramic-Pour-Over-Kit-3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "600 ml" },
        { label: "Filter", value: "Reusable stainless steel" },
        { label: "Best For", value: "Single-origin coffee" }
    ],
    rating: "★★★★★",
    reviewCount: "4.8 (67 reviews)",
    desc: "A ceramic dripper with matching glass carafe and reusable stainless steel filter — bright, clean, filter-style coffee.", 
    tip: "Rinse the filter with hot water before brewing."
  },
  { 
    id: 104, 
    name: "Burr Coffee Grinder", 
    category: "Grinders", 
    price: 69.00, 
    tags: [],
    images: [
        "machine-images/Burr-Coffee-Grinder-1.jpg",
        "machine-images/Burr-Coffee-Grinder-2.jpg",
        "machine-images/Burr-Coffee-Grinder-3.jpg"
    ],
    specs: [
        { label: "Settings", value: "18 grind sizes" },
        { label: "Burr Type", value: "Conical stainless steel" },
        { label: "Best For", value: "All brew methods" }
    ],
    rating: "★★★★★",
    reviewCount: "4.7 (152 reviews)",
    desc: "A conical burr grinder with 18 adjustable settings — from fine espresso to coarse French press, with consistent grind size every time.", 
    tip: "Grind just before brewing to preserve aroma."
  },
  { 
    id: 105, 
    name: "Stainless Steel Moka Pot", 
    category: "Brewers", 
    price: 39.00, 
    tags: [],
    images: [
        "machine-images/Stainless-Steel-Moka-Pot1.jpg",
        "machine-images/Stainless-Steel-Moka-Pot2.jpg",
        "machine-images/Stainless-Steel-Moka-Pot3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "6 cups (300 ml)" },
        { label: "Material", value: "Stainless steel" },
        { label: "Best For", value: "Stovetop espresso" }
    ],
    rating: "★★★★☆",
    reviewCount: "4.5 (88 reviews)",
    desc: "A classic 6-cup stovetop espresso maker — produces a strong, rich coffee that pairs beautifully with milk.", 
    tip: "Never tamp the coffee — fill loosely."
  },
  { 
    id: 106, 
    name: "Gooseneck Electric Kettle", 
    category: "Accessories", 
    price: 79.00, 
    tags: [],
    images: [
        "machine-images/Gooseneck-Electric-Kettle-1.jpg",
        "machine-images/Gooseneck-Electric-Kettle-2.jpg",
        "machine-images/Gooseneck-Electric-Kettle-3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "1 L" },
        { label: "Temp Range", value: "40–100°C" },
        { label: "Best For", value: "Pour-over, tea" }
    ],
    rating: "★★★★★",
    reviewCount: "4.8 (203 reviews)",
    desc: "A variable-temperature electric kettle with a precision gooseneck spout — the must-have tool for pour-over brewing.", 
    tip: "Heat water to 92–96°C for pour-over."
  },
  { 
    id: 107, 
    name: "Bamboo Matcha Whisk Set", 
    category: "Accessories", 
    price: 24.00, 
    tags: [],
    images: [
        "machine-images/Bamboo-Matcha-Whisk-Set-1.jpg",
        "machine-images/Bamboo-Matcha-Whisk-Set-2.jpg"
    ],
    specs: [
        { label: "Includes", value: "Whisk, bowl, scoop" },
        { label: "Material", value: "Bamboo + ceramic" },
        { label: "Best For", value: "Matcha, Matcha Latte" }
    ],
    rating: "★★★★★",
    reviewCount: "4.9 (76 reviews)",
    desc: "Traditional bamboo whisk (chasen) with ceramic bowl and measuring scoop — everything you need for ceremonial-grade matcha at home.", 
    tip: "Whisk in a W motion until frothy."
  },
  { 
    id: 108, 
    name: "Cold Brew Maker", 
    category: "Brewers", 
    price: 44.00, 
    tags: [],
    images: [
        "machine-images/Cold-Brew-Maker-1.jpg",
        "machine-images/Cold-Brew-Maker-2.jpg"
    ],
    specs: [
        { label: "Capacity", value: "1 L" },
        { label: "Filter", value: "Fine mesh stainless steel" },
        { label: "Best For", value: "Cold Brew" }
    ],
    rating: "★★★★☆",
    reviewCount: "4.7 (112 reviews)",
    desc: "A 1-litre glass cold brew maker with a fine mesh filter for smooth, low-acid coffee — steep overnight and enjoy for days.", 
    tip: "Steep for 12–16 hours in the fridge."
  },
  { 
    id: 109, 
    name: "Glass Tea Infuser", 
    category: "Accessories", 
    price: 19.00, 
    tags: [],
    images: [
        "machine-images/Glass-Tea-Infuser-1.jpg",
        "machine-images/Glass-Tea-Infuser-2.jpg"
    ],
    specs: [
        { label: "Capacity", value: "400 ml" },
        { label: "Material", value: "Borosilicate glass + steel" },
        { label: "Best For", value: "Loose-leaf tea" }
    ],
    rating: "★★★★☆",
    reviewCount: "4.6 (58 reviews)",
    desc: "A glass infuser with a removable stainless steel filter for loose-leaf tea — perfect for English Breakfast, Earl Grey and green tea.", 
    tip: "Steep green tea for 2–3 minutes at 80°C."
  },
  { 
    id: 110, 
    name: "Siphon Coffee Maker", 
    category: "Brewers", 
    price: 89.00, 
    tags: ["Premium"],
    images: [
        "machine-images/Siphon-Coffee-Maker1.jpg",
        "machine-images/Siphon-Coffee-Maker2.jpg",
        "machine-images/Siphon-Coffee-Maker3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "5 cups (500 ml)" },
        { label: "Material", value: "Borosilicate glass + steel" },
        { label: "Best For", value: "Theatre brewing, filter coffee" }
    ],
    rating: "★★★★★",
    reviewCount: "4.8 (42 reviews)",
    desc: "A vacuum-style siphon brewer that uses vapour pressure to brew a clean, tea-like coffee — the showpiece of any home bar.", 
    tip: "Use a cloth or paper filter with medium grind for best results."
  },
  { 
    id: 111, 
    name: "AeroPress Go", 
    category: "Brewers", 
    price: 39.50, 
    tags: [],
    images: [
        "machine-images/AeroPress-Go1.jpg",
        "machine-images/AeroPress-Go2.jpg",
        "machine-images/AeroPress-Go3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "1–3 cups" },
        { label: "Material", value: "BPA-free plastic" },
        { label: "Best For", value: "Travel, quick brewing" }
    ],
    rating: "★★★★★",
    reviewCount: "4.9 (287 reviews)",
    desc: "A portable immersion brewer that makes a smooth, rich cup in under two minutes — perfect for travel, camping or small kitchens.", 
    tip: "Use 15g of fine-medium grind and press slowly for 30 seconds."
  },
  { 
    id: 112, 
    name: "Manual Coffee Grinder", 
    category: "Grinders", 
    price: 45.00, 
    tags: [],
    images: [
        "machine-images/Manual-Coffee-Grinder1.jpg",
        "machine-images/Manual-Coffee-Grinder2.jpg",
        "machine-images/Manual-Coffee-Grinder3.jpg"
    ],
    specs: [
        { label: "Settings", value: "Stepped adjustment" },
        { label: "Burr Type", value: "Stainless steel conical" },
        { label: "Best For", value: "Travel, pour-over, AeroPress" }
    ],
    rating: "★★★★☆",
    reviewCount: "4.6 (118 reviews)",
    desc: "A compact hand grinder with stainless steel conical burrs — quiet, portable and consistent for pour-over or AeroPress.", 
    tip: "Take it travelling — no power required."
  },
  { 
    id: 113, 
    name: "Chemex Pour-Over", 
    category: "Brewers", 
    price: 54.00, 
    tags: ["Iconic"],
    images: [
        "machine-images/Chemex-Pour-Over-1.jpg",
        "machine-images/Chemex-Pour-Over-2.jpg",
        "machine-images/Chemex-Pour-Over-3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "6 cups (900 ml)" },
        { label: "Material", value: "Borosilicate glass + wood collar" },
        { label: "Best For", value: "Bright, clean filter coffee" }
    ],
    rating: "★★★★★",
    reviewCount: "4.8 (198 reviews)",
    desc: "A design-classic hourglass brewer with a wooden collar — produces a clean, bright cup thanks to its thick paper filters.", 
    tip: "Use Chemex-brand filters for the best flow rate."
  },
  { 
    id: 114, 
    name: "Nespresso Capsule Machine", 
    category: "Espresso Machines", 
    price: 129.00, 
    tags: [],
    images: [
        "machine-images/Nespresso-Capsule-Machine1.jpg",
        "machine-images/Nespresso-Capsule-Machine2.jpg",
        "machine-images/Nespresso-Capsule-Machine3.jpg"
    ],
    specs: [
        { label: "Pressure", value: "19 bar" },
        { label: "Heating", value: "25 seconds" },
        { label: "Best For", value: "Quick espresso, convenience" }
    ],
    rating: "★★★★☆",
    reviewCount: "4.5 (356 reviews)",
    desc: "A compact capsule machine that pulls rich espresso shots in under 30 seconds — no grinding, no tamping, no mess.", 
    tip: "Descale every 3 months for consistent pressure."
  },
  { 
    id: 115, 
    name: "Milk Frother", 
    category: "Accessories", 
    price: 34.00, 
    tags: [],
    images: [
        "machine-images/Milk-Frother1.jpg",
        "machine-images/Milk-Frother2.jpg",
        "machine-images/Milk-Frother3.jpg"
    ],
    specs: [
        { label: "Capacity", value: "240 ml" },
        { label: "Heating", value: "Auto shut-off" },
        { label: "Best For", value: "Cappuccino, latte, hot chocolate" }
    ],
    rating: "★★★★★",
    reviewCount: "4.7 (241 reviews)",
    desc: "An electric milk frother that heats and whips milk to the perfect foam in 60 seconds — no steam wand needed.", 
    tip: "Use whole milk for the thickest foam; oat milk works best at lower heat."
  }
];

const equipList = document.getElementById("equipList");
const searchBox = document.getElementById("searchBox");
const modal = document.getElementById("imageModal");
const lightboxWrapper = document.getElementById("lightboxWrapper");

let activeCategory = "All";
let searchValue = "";
let lightboxSwiper = null;

function renderProducts(items) {
    equipList.innerHTML = "";

    if (items.length === 0) {
        equipList.innerHTML = `<div class="no-results">NO EQUIPMENT FOUND</div>`;
        return;
    }

    items.forEach((product, index) => {
        const specsHTML = product.specs.map(s => 
            `<tr><td>${s.label}</td><td>${s.value}</td></tr>`
        ).join("");

        const tagHTML = product.tags.length > 0 
            ? `<span class="equip-tag">${product.tags[0]}</span>` 
            : "";

        const card = document.createElement("article");
        card.className = "equip-row";
        card.setAttribute("data-category", product.category);
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-delay", (index * 100).toString());

        card.innerHTML = `
            <div class="equip-row-image">
                <img src="${product.images[0]}" alt="${product.name}" 
                     class="zoomable-img"
                     data-product-id="${product.id}"
                     loading="lazy">
                ${tagHTML}
            </div>
            <div class="equip-row-content">
                <span class="equip-category">${product.category}</span>
                <h2 class="equip-name">${product.name}</h2>
                <div class="equip-rating">
                    <span class="stars">${product.rating}</span>
                    <span class="rating-text">${product.reviewCount}</span>
                </div>
                <p class="equip-desc">${product.desc}</p>
                <table class="equip-specs">${specsHTML}</table>
                <div class="equip-tip">
                    <strong>Tip:</strong> ${product.tip}
                </div>
                <div class="equip-row-footer">
                    <span class="equip-price">£${product.price.toFixed(2)}</span>
                    <button class="equip-btn" onclick="addEquipmentToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;

        equipList.appendChild(card);
    });

    if (typeof AOS !== 'undefined') AOS.refresh();
}

function addEquipmentToCart(id) {
    const selProd = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem('beanboutique_cart')) || [];

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...selProd,
            image: selProd.images[0],
            quantity: 1
        });
    }

    localStorage.setItem('beanboutique_cart', JSON.stringify(cart));
    myNotiToast(`Added ${selProd.name} to Shopping Cart`);
    updateBadgeUI();
}

function applyFilters() {
    const search = searchValue.toLowerCase().trim();
    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch =
            p.name.toLowerCase().includes(search) ||
            p.desc.toLowerCase().includes(search) ||
            p.category.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
    });
    renderProducts(filtered);
}

document.querySelectorAll('.equip-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.equip-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        activeCategory = this.dataset.category;
        applyFilters();
    });
});

if (searchBox) {
    searchBox.addEventListener('input', function () {
        searchValue = this.value;
        applyFilters();
    });
}

/* ===== Open Lightbox on Image Click ===== */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("zoomable-img")) {
        const productId = parseInt(e.target.dataset.productId, 10);
        const product = products.find(p => p.id === productId);
        if (!product) return;

        lightboxWrapper.innerHTML = product.images.map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `).join("");

        modal.classList.add("open");

        if (lightboxSwiper) {
            lightboxSwiper.destroy(true, true);
            lightboxSwiper = null;
        }

        lightboxSwiper = new Swiper('.lightbox-swiper', {
            loop: true,
            speed: 400,
            navigation: {
                nextEl: '.lightbox-swiper .swiper-button-next',
                prevEl: '.lightbox-swiper .swiper-button-prev',
            },
        });
    }

    if (e.target.classList.contains("close-btn") || e.target === modal) {
        modal.classList.remove("open");
        if (lightboxSwiper) {
            lightboxSwiper.destroy(true, true);
            lightboxSwiper = null;
        }
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
        modal.classList.remove("open");
        if (lightboxSwiper) {
            lightboxSwiper.destroy(true, true);
            lightboxSwiper = null;
        }
    }
});

/* ===== Initial Render + AOS ===== */
renderProducts(products);
AOS.init({
    duration: 400,
    easing: 'ease-out',
    once: true,
    offset: 40
});