/* ===== Coffee Beans Page — Data, Render, Filter (Fuse.js), Cart ===== */

const products = [
  { 
    id: 16, 
    name: "Ethiopia Yirgacheffe", 
    category: "Single Origin", 
    price: 12.50, 
    notes: ["Jasmine", "Bergamot", "Stone Fruit"],
    brew: ["Pour-Over", "Chemex", "AeroPress"],
    desc: "A bright, floral single-origin from the birthplace of coffee. Light roast, 250g bag.", 
    tooltip: "Light roast · 250g · Whole bean or ground", 
    image: "bean-images/Ethiopia-Yirgacheffe.jpg" 
  },
  { 
    id: 17, 
    name: "Colombia Huila", 
    category: "Single Origin", 
    price: 11.00, 
    notes: ["Caramel", "Red Apple", "Milk Chocolate"],
    brew: ["Espresso", "Moka Pot", "French Press"],
    desc: "A well-balanced, medium-roast Colombian — sweet, smooth and endlessly drinkable.", 
    tooltip: "Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/Colombia-Huila.jpg" 
  },
  { 
    id: 18, 
    name: "Brazil Cerrado", 
    category: "Single Origin", 
    price: 10.50, 
    notes: ["Hazelnut", "Dark Chocolate", "Molasses"],
    brew: ["Espresso", "Moka Pot"],
    desc: "A rich, nutty Brazilian — perfect as a base for espresso or a comforting French press.", 
    tooltip: "Medium-Dark roast · 250g · Whole bean or ground", 
    image: "bean-images/Brazil-Cerrado.jpg" 
  },
  { 
    id: 19, 
    name: "Kenya AA Nyeri", 
    category: "Single Origin", 
    price: 14.00, 
    notes: ["Blackcurrant", "Grapefruit", "Brown Sugar"],
    brew: ["Pour-Over", "AeroPress"],
    desc: "A vibrant, juicy Kenyan AA — one of the most complex coffees in the world.", 
    tooltip: "Light-Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/Kenya-AA-Nyeri.jpg" 
  },
  { 
    id: 20, 
    name: "House Espresso Blend", 
    category: "Blends", 
    price: 10.00, 
    notes: ["Chocolate", "Caramel", "Almond"],
    brew: ["Espresso", "Moka Pot"],
    desc: "Our signature blend — chocolatey, sweet and consistent. The same beans we use in-store.", 
    tooltip: "Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/House-Espresso-Blend.jpg" 
  },
  { 
    id: 21, 
    name: "Winter Blend", 
    category: "Blends", 
    price: 12.00, 
    notes: ["Cinnamon", "Orange", "Dark Chocolate"],
    brew: ["Espresso", "French Press"],
    desc: "A seasonal blend with notes of warming spice — perfect for cold mornings.", 
    tooltip: "Medium roast · 250g · Limited edition", 
    image: "bean-images/Winter-Blend.jpg" 
  },
  { 
    id: 22, 
    name: "Decaf Colombia", 
    category: "Decaf", 
    price: 11.50, 
    notes: ["Cocoa", "Roasted Nut", "Dried Fruit"],
    brew: ["Espresso", "French Press", "Pour-Over"],
    desc: "All the flavour, none of the caffeine. Swiss Water decaf — smooth and full-bodied.", 
    tooltip: "Medium roast · 250g · Decaf · Whole bean or ground", 
    image: "bean-images/Decaf-Colombia.jpg" 
  },
  { 
    id: 23, 
    name: "Guatemala Antigua", 
    category: "Single Origin", 
    price: 12.00, 
    notes: ["Milk Chocolate", "Cinnamon", "Orange"],
    brew: ["Pour-Over", "Espresso", "Moka Pot"],
    desc: "A smooth, medium-roast Guatemalan with a velvety body — sweet spice and citrus in every cup.", 
    tooltip: "Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/Guatemala-Antigua.jpg" 
  },
  { 
    id: 24, 
    name: "Costa Rica Tarrazú", 
    category: "Single Origin", 
    price: 13.00, 
    notes: ["Honey", "Peach", "Almond"],
    brew: ["Pour-Over", "Chemex", "AeroPress"],
    desc: "A clean, bright Central American — honey-sweet with a delicate stone-fruit finish.", 
    tooltip: "Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/Costa-Rica-Tarrazu.jpg" 
  },
  { 
    id: 25, 
    name: "Sumatra Mandheling", 
    category: "Single Origin", 
    price: 12.50, 
    notes: ["Dark Chocolate", "Cedar", "Tobacco"],
    brew: ["French Press", "Moka Pot"],
    desc: "A bold, full-bodied Indonesian with earthy, herbal notes — the classic Sumatra profile.", 
    tooltip: "Dark roast · 250g · Whole bean or ground", 
    image: "bean-images/Sumatra-Mandheling.jpg" 
  },
  { 
    id: 26, 
    name: "Panama Geisha", 
    category: "Single Origin", 
    price: 24.00, 
    notes: ["Jasmine", "Lychee", "Bergamot"],
    brew: ["Pour-Over", "Chemex"],
    desc: "The most prized coffee in the world — intensely floral, tea-like and unforgettable.", 
    tooltip: "Light roast · 250g · Limited availability", 
    image: "bean-images/Panama-Geisha.jpg" 
  },
  { 
    id: 27, 
    name: "Rwanda Nyungwe", 
    category: "Single Origin", 
    price: 11.50, 
    notes: ["Red Berry", "Black Tea", "Lime"],
    brew: ["Pour-Over", "AeroPress"],
    desc: "A bright, complex African coffee — juicy berries balanced by a clean tea-like finish.", 
    tooltip: "Light-Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/Rwanda-Nyungwe.jpg" 
  },
  { 
    id: 28, 
    name: "Peru Organic", 
    category: "Single Origin", 
    price: 12.00, 
    notes: ["Milk Chocolate", "Walnut", "Plum"],
    brew: ["Pour-Over", "Espresso", "French Press"],
    desc: "A certified organic Peruvian with a smooth body — nutty, sweet and gently fruity.", 
    tooltip: "Medium roast · 250g · Organic · Whole bean or ground", 
    image: "bean-images/Peru-Organic.jpg" 
  },
  { 
    id: 29, 
    name: "Mocha Java Blend", 
    category: "Blends", 
    price: 11.00, 
    notes: ["Dark Chocolate", "Winey", "Cherry"],
    brew: ["Espresso", "French Press", "Moka Pot"],
    desc: "The world's oldest coffee blend — Yemeni and Javan beans in perfect harmony.", 
    tooltip: "Medium-Dark roast · 250g · Whole bean or ground", 
    image: "bean-images/Mocha-Java-Blend.jpg" 
  },
  { 
    id: 30, 
    name: "India Monsooned Malabar", 
    category: "Single Origin", 
    price: 13.50, 
    notes: ["Tobacco", "Dark Chocolate", "Spice"],
    brew: ["Espresso", "French Press", "Moka Pot"],
    desc: "A unique Indian coffee aged in monsoon winds — heavy body, low acidity and complex spice.", 
    tooltip: "Medium-Dark roast · 250g · Whole bean or ground", 
    image: "bean-images/India-Monsooned-Malabar.jpg" 
  },
  { 
    id: 31, 
    name: "Espresso Blend Decaf", 
    category: "Espresso", 
    price: 11.50, 
    notes: ["Dark Chocolate", "Hazelnut", "Brown Sugar"],
    brew: ["Espresso", "Moka Pot"],
    desc: "Our signature espresso blend, decaffeinated — rich crema, chocolatey body, no caffeine.", 
    tooltip: "Medium-Dark roast · 250g · Decaf · Whole bean or ground", 
    image: "bean-images/Decaf-Colombia.jpg" 
  },
  { 
    id: 32, 
    name: "Espresso Extra Dark", 
    category: "Espresso", 
    price: 12.00, 
    notes: ["Bitter Cocoa", "Molasses", "Toasted Nut"],
    brew: ["Espresso", "Moka Pot"],
    desc: "A bold, extra-dark espresso blend for those who like it strong — thick crema, deep flavour.", 
    tooltip: "Dark roast · 250g · Whole bean or ground", 
    image: "bean-images/Brazil-Cerrado.jpg" 
  },
  { 
    id: 33, 
    name: "Filter House Blend", 
    category: "Filter", 
    price: 11.00, 
    notes: ["Caramel", "Almond", "Citrus"],
    brew: ["Pour-Over", "Chemex", "French Press"],
    desc: "A smooth, everyday filter blend — balanced sweetness with a clean citrus finish.", 
    tooltip: "Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/House-Espresso-Blend.jpg" 
  },
  { 
    id: 34, 
    name: "Kenya Filter Reserve", 
    category: "Filter", 
    price: 14.50, 
    notes: ["Blackcurrant", "Tomato Leaf", "Brown Sugar"],
    brew: ["Pour-Over", "Chemex"],
    desc: "A reserve Kenyan filter roast — bright, complex, with a juicy berry sweetness.", 
    tooltip: "Light-Medium roast · 250g · Whole bean or ground", 
    image: "bean-images/Kenya-AA-Nyeri.jpg" 
  },
  { 
    id: 35, 
    name: "Ethiopia Guji Natural", 
    category: "Limited Edition", 
    price: 18.00, 
    notes: ["Blueberry", "Dark Cherry", "Cocoa"],
    brew: ["Pour-Over", "Chemex"],
    desc: "A rare natural-process Ethiopian micro-lot — intense fruit, rich body, unforgettable finish.", 
    tooltip: "Light roast · 250g · Limited micro-lot", 
    image: "bean-images/Ethiopia-Yirgacheffe.jpg" 
  },
  { 
    id: 36, 
    name: "Colombia Pink Bourbon", 
    category: "Limited Edition", 
    price: 16.50, 
    notes: ["Rose", "Lychee", "Red Apple"],
    brew: ["Pour-Over", "AeroPress"],
    desc: "A rare Pink Bourbon variety from Colombia — floral, sweet and beautifully balanced.", 
    tooltip: "Light roast · 250g · Limited availability", 
    image: "bean-images/Colombia-Huila.jpg" 
  }
];

const catContainer = document.getElementById("categoryContainer");
const prodGrid = document.getElementById("productGrid");
const searchBox = document.getElementById("searchBox");

let shopCart = [];
let activeCategory = "All";
let fuse = null;

/* ===== Initialize Fuse.js ===== */
function initFuse() {
    fuse = new Fuse(products, {
        keys: [
            { name: 'name', weight: 0.5 },
            { name: 'category', weight: 0.2 },
            { name: 'notes', weight: 0.2 },
            { name: 'brew', weight: 0.15 },
            { name: 'desc', weight: 0.1 }
        ],
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 2,
        includeScore: true
    });
}

/* ===== Category buttons ===== */
function renderCategoryButtons() {
    const cat = ["All"];

    for (const p of products) {
        if (!cat.includes(p.category))
            cat.push(p.category);
    }

    catContainer.innerHTML = "";
    cat.forEach(c => {
        const btn = document.createElement("button");
        btn.className = `category-btn ${c === activeCategory ? 'active' : ''}`;
        btn.textContent = c;

        btn.addEventListener('click', () => {
            activeCategory = c;
            renderCategoryButtons();
            applyFilters();
        });

        catContainer.appendChild(btn);
    });
}

/* ===== Render product cards ===== */
function renderProducts(items) {
    prodGrid.innerHTML = "";

    if (items.length === 0) {
        prodGrid.innerHTML = `<div class="no-results">NO BEANS FOUND</div>`;
        return;
    }

    items.forEach(product => {
        const notesHTML = product.notes.map(n =>
            `<span class="note-chip">${n}</span>`).join("");
        const brewHTML = product.brew.map(b =>
            `<span class="brew-chip">${b}</span>`).join("");

        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image-container">
                <img class="product-image" src="${product.image}" 
                     alt="${product.name}" loading="lazy"
                     width="250" height="230">
            </div>
            <div class="product-details">
                <div>
                    <div class="category">${product.category}</div>
                    <div class="product-title-wrapper">
                        <h2 class="product-name">${product.name}</h2>
                        <div class="tooltip-container" tabindex="0">
                            <span class="info-icon">i</span>
                            <span class="tooltip-text">${product.tooltip}</span>
                        </div>
                    </div>

                    <div class="notes-block">
                        <span class="block-label">Tasting Notes</span>
                        <div class="chip-row">${notesHTML}</div>
                    </div>

                    <div class="notes-block">
                        <span class="block-label">Recommended Brew</span>
                        <div class="chip-row">${brewHTML}</div>
                    </div>

                    <p class="product-desc">${product.desc}</p>
                </div>
                <div>
                    <div class="product-price">£${product.price.toFixed(2)}</div>
                    <button class="buy-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        prodGrid.appendChild(card);
    });
}

/* ===== Add to Cart ===== */
function addToCart(pid) {
    const selProd = products.find(p => p.id === pid);
    const localShopCart = localStorage.getItem('beanboutique_cart');
    if (localShopCart) shopCart = JSON.parse(localShopCart);

    const existProd = shopCart.find(item => item.id === pid);
    if (existProd) existProd.quantity += 1;
    else shopCart.push({ ...selProd, quantity: 1 });

    localStorage.setItem('beanboutique_cart', JSON.stringify(shopCart));
    myNotiToast(`Added ${selProd.name} to Shopping Cart`);
    updateBadgeUI();
}

/* ===== Search + Category filter (Fuse.js powered) ===== */
function applyFilters() {
    const searchValue = searchBox.value.trim();
    let results = products;

    if (searchValue.length >= 2 && fuse) {
        const fuseResults = fuse.search(searchValue);
        results = fuseResults.map(r => r.item);
    }

    if (activeCategory !== "All") {
        results = results.filter(p => p.category === activeCategory);
    }

    renderProducts(results);
}

searchBox.addEventListener('input', applyFilters);

/* ===== Typed.js — animated placeholder ===== */
const typedSearch = new Typed('#searchBox', {
    strings: [
        'Search by origin...',
        'Search by roast...',
        'Search by tasting note...',
        'Try "Ethiopia"...',
        'Try "Caramel"...',
        'Try "Espresso"...'
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1800,
    startDelay: 400,
    loop: true,
    smartBackspace: true,
    attr: 'placeholder'
});

searchBox.addEventListener('focus', () => {
    typedSearch.stop();
    searchBox.placeholder = '';
});
searchBox.addEventListener('blur', () => {
    if (searchBox.value.trim() === '') {
        typedSearch.start();
    }
});

/* ===== Initial render ===== */
initFuse();
renderCategoryButtons();
renderProducts(products);