const products = {
  deals: [
    ["Redmi 15C 5G 6 GB RAM 128 GB", "Rs. 15,499", "Rs. 18,999", "Hot Deal", "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80", "Redmi"],
    ["Samsung Galaxy M Series 5G Mobile", "Rs. 21,090", "Rs. 24,999", "Exchange", "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80", "Samsung"],
    ["Oppo Reno 5G 8 GB RAM 256 GB", "Rs. 29,499", "Rs. 34,999", "Best Seller", "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=700&q=80", "Oppo"],
    ["Apple iPhone 15 128 GB Blue", "Rs. 65,900", "Rs. 79,900", "No Cost EMI", "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80", "Apple"]
  ],
  televisions: [
    ["Sony 55 inch 4K Ultra HD Smart LED TV", "Rs. 54,990", "Rs. 72,900", "4K", "assets/tv.webp", "Sony"],
    ["Samsung 43 inch Crystal UHD Smart TV", "Rs. 31,990", "Rs. 44,900", "Smart TV", "assets/tv.webp", "Samsung"],
    ["LG 65 inch OLED AI ThinQ TV", "Rs. 1,34,990", "Rs. 1,89,900", "OLED", "assets/tv.webp", "LG"]
  ],
  washing: [
    ["LG 7 kg Fully Automatic Front Load Washer", "Rs. 38,390", "Rs. 46,990", "New", "assets/washing-machine-cutout.png", "LG"],
    ["IFB 6.5 kg Front Load Washing Machine", "Rs. 31,990", "Rs. 40,380", "EMI", "assets/washing-machine-cutout.png", "IFB"],
    ["Bosch 8 kg Inverter Front Load Washer", "Rs. 40,890", "Rs. 54,990", "Quiet Wash", "assets/washing-machine-cutout.png", "Bosch"]
  ],
  cooling: [
    ["Blue Star 1 Ton 5 Star Inverter AC", "Rs. 36,490", "Rs. 48,500", "5 Star", "assets/air-conditioner.png", "Blue Star"],
    ["Symphony 50 L Portable Air Cooler", "Rs. 8,290", "Rs. 12,999", "Summer", "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80", "Symphony"],
    ["Crompton 400 mm High Speed Table Fan", "Rs. 3,090", "Rs. 3,899", "Popular", "https://images.unsplash.com/photo-1565153532597-6be2f9c1d41e?auto=format&fit=crop&w=700&q=80", "Crompton"]
  ],
  kitchen: [
    ["Preethi Zodiac 750 W Mixer Grinder", "Rs. 10,250", "Rs. 13,245", "Best Seller", "assets/blender.png", "Preethi"],
    ["Butterfly 2 Burner Glass Top Gas Stove", "Rs. 3,790", "Rs. 5,449", "Offer", "assets/blender.png", "Butterfly"],
    ["LG 21 L Convection Microwave Oven", "Rs. 14,190", "Rs. 15,599", "Kitchen", "assets/blender.png", "LG"]
  ],
  waterHeater: [
    ["Crompton Versa 15 L Water Heater", "Rs. 7,350", "Rs. 12,400", "Storage", "assets/blender.png", "Crompton"],
    ["Bajaj Flora Instant 3 L Water Heater", "Rs. 3,950", "Rs. 6,140", "Instant", "assets/blender.png", "Bajaj"],
    ["Venus Lyra 25 L Water Heater", "Rs. 11,950", "Rs. 16,470", "Family", "assets/blender.png", "Venus"]
  ],
  brands: [
    ["Samsung Appliance Combos", "Rs. 19,990", "Rs. 27,990", "Samsung", "assets/refrigerator.webp", "Samsung"],
    ["LG Premium Home Electronics", "Rs. 24,990", "Rs. 34,990", "LG", "assets/washing-machine-cutout.png", "LG"],
    ["Sony Entertainment Zone", "Rs. 39,990", "Rs. 52,990", "Sony", "assets/home-theatre.webp", "Sony"]
  ]
};

const CART_KEY = "sekarCart";
const WISH_KEY = "sekarWishlist";
const USER_KEY = "sekarUser";
const ADMIN_KEY = "sekarAdminLoggedIn";
const ADMIN_PRODUCTS_KEY = "sekarAdminProducts";
const ADMIN_CATEGORIES_KEY = "sekarAdminCategories";
const CHECKOUT_KEY = "sekarCheckoutDraft";
const ADMIN_ID = "sekaradmin";
const ADMIN_PASSWORD = "Sekar@2026";

const navMenus = [
  {
    label: "Mobiles",
    href: "special-offer.html",
    items: [
      ["All Mobile Phones", "special-offer.html"],
      ["Android Phones", "special-offer.html"],
      ["Feature Phones", "special-offer.html"],
      ["Flip and Fold Mobile Phones", "special-offer.html"],
      ["Gaming Mobile Phones", "special-offer.html"],
      ["iPhones", "special-offer.html"]
    ]
  },
  {
    label: "Laptop & Gadgets",
    href: "shop-by-brands.html",
    items: [
      ["Laptop", "shop-by-brands.html"],
      ["Tablet", "shop-by-brands.html"],
      ["Wearables", "shop-by-brands.html"],
      ["Speakers & Media Players", "shop-by-brands.html"],
      ["All Headphones & Earphones", "shop-by-brands.html"],
      ["Charger", "shop-by-brands.html"],
      ["Office Solutions", "shop-by-brands.html"],
      ["Printer", "shop-by-brands.html"],
      ["Power Bank", "shop-by-brands.html"],
      ["Trimmer", "shop-by-brands.html"]
    ]
  },
  {
    label: "Television",
    href: "televisions.html",
    items: [
      ["LED TV", "televisions.html"],
      ["Smart TV", "televisions.html"],
      ["4K Ultra HD TV", "televisions.html"],
      ["OLED TV", "televisions.html"],
      ["QLED TV", "televisions.html"]
    ]
  },
  {
    label: "Refrigerator",
    href: "special-offer.html",
    items: [
      ["Single Door", "special-offer.html"],
      ["Double Door", "special-offer.html"],
      ["Side by Side", "special-offer.html"],
      ["French Door", "special-offer.html"]
    ]
  },
  {
    label: "ACs",
    href: "air-conditioner.html",
    items: [
      ["Split AC", "air-conditioner.html"],
      ["Inverter AC", "air-conditioner.html"],
      ["Window AC", "air-conditioner.html"],
      ["Air Cooler", "air-conditioner.html"]
    ]
  },
  {
    label: "Washing Machine",
    href: "washing-machine.html",
    items: [
      ["Front Load", "washing-machine.html"],
      ["Top Load", "washing-machine.html"],
      ["Semi Automatic", "washing-machine.html"],
      ["Washer Dryer", "washing-machine.html"]
    ]
  },
  {
    label: "Small Appliances",
    href: "water-heaters.html",
    items: [
      ["Water Heaters", "water-heaters.html"],
      ["Fans", "water-heaters.html"],
      ["Vacuum Cleaners", "water-heaters.html"],
      ["Water Purifiers", "water-heaters.html"]
    ]
  },
  {
    label: "Kitchen Appliances",
    href: "kitchen-appliances.html",
    items: [
      ["Mixer Grinder", "kitchen-appliances.html"],
      ["Wet Grinder", "kitchen-appliances.html"],
      ["Gas Stove", "kitchen-appliances.html"],
      ["Microwave Oven", "kitchen-appliances.html"],
      ["Chimney", "kitchen-appliances.html"]
    ]
  },
  { label: "Furnitures", href: "shop-by-brands.html", items: [["Sofa", "shop-by-brands.html"], ["Cot", "shop-by-brands.html"], ["Dining Table", "shop-by-brands.html"]] },
  { label: "Solar", href: "special-offer.html", items: [["Solar Panel", "special-offer.html"], ["Solar Heater", "special-offer.html"], ["Inverter Battery", "special-offer.html"]] }
];

function initNavMenus() {
  document.querySelectorAll(".category-nav").forEach((nav) => {
    nav.innerHTML = `
      <button class="menu-btn" id="menuToggle" type="button">Menu</button>
      ${navMenus.map((menu) => `
        <div class="nav-item">
          <a class="nav-link" href="${menu.href}">${menu.label}<span></span></a>
          <div class="nav-dropdown">
            ${menu.items.map((item) => `<a href="${item[1]}">${item[0]}<span>›</span></a>`).join("")}
          </div>
        </div>
      `).join("")}
    `;
  });
}

function enhanceFilterPanels() {
  document.querySelectorAll(".filter-panel").forEach((panel) => {
    const brandLabels = [...panel.querySelectorAll(".brand-filter")].map((input) => {
      const text = input.parentElement ? input.parentElement.textContent.trim() : input.value;
      return `<label><input class="brand-filter" type="checkbox" value="${input.value}">${text}</label>`;
    }).join("");

    panel.innerHTML = `
      <div class="filter-heading">
        <strong>Filter :</strong>
        <button type="button" class="clear-filter">Clear All</button>
      </div>
      <div class="result-count">Result: 27 Products</div>
      <div class="filter-section">
        <div class="filter-section-title"><span>Price</span><button type="button">−</button></div>
        <div class="price-filter-card">
          <div class="price-inputs">
            <input class="min-price-box" value="900" aria-label="Minimum price">
            <span>-</span>
            <input class="max-price-box" value="50400" aria-label="Maximum price">
          </div>
          <div class="price-range-control">
            <div class="range-fill"></div>
            <input class="price-slider min-slider" type="range" min="900" max="50400" value="900" step="500" aria-label="Minimum price">
            <input class="price-slider max-slider" type="range" min="900" max="50400" value="50400" step="500" aria-label="Maximum price">
          </div>
        </div>
      </div>
      <div class="filter-section">
        <div class="filter-section-title"><span>Brand</span><button type="button">−</button></div>
        <div class="checkbox-list">${brandLabels}</div>
      </div>
    `;
    initPriceFilter(panel);
  });
}

function initPriceFilter(panel) {
  const minSlider = panel.querySelector(".min-slider");
  const maxSlider = panel.querySelector(".max-slider");
  const minBox = panel.querySelector(".min-price-box");
  const maxBox = panel.querySelector(".max-price-box");
  const fill = panel.querySelector(".range-fill");
  const count = panel.querySelector(".result-count");
  if (!minSlider || !maxSlider || !minBox || !maxBox || !fill || !count) return;

  const minLimit = Number(minSlider.min);
  const maxLimit = Number(minSlider.max);

  function updateRange(changed) {
    let minValue = Number(minSlider.value);
    let maxValue = Number(maxSlider.value);
    if (minValue > maxValue - 1000) {
      if (changed === "min") minValue = maxValue - 1000;
      else maxValue = minValue + 1000;
    }
    minSlider.value = minValue;
    maxSlider.value = maxValue;
    minBox.value = `Rs. ${minValue.toLocaleString("en-IN")}`;
    maxBox.value = `Rs. ${maxValue.toLocaleString("en-IN")}`;

    const left = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
    const right = 100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;
    fill.style.left = `${left}%`;
    fill.style.right = `${right}%`;

    const rangeRatio = (maxValue - minValue) / (maxLimit - minLimit);
    const productCount = Math.max(3, Math.round(27 * rangeRatio));
    count.textContent = `Result: ${productCount} Products`;
  }

  minSlider.addEventListener("input", () => updateRange("min"));
  maxSlider.addEventListener("input", () => updateRange("max"));
  updateRange();
}

function toProduct(item) {
  return { name: item[0], price: item[1], mrp: item[2], badge: item[3], img: item[4], brand: item[5] };
}

function moneyToNumber(value) {
  return Number(String(value).replace(/[^0-9]/g, "")) || 0;
}

function formatMoney(value) {
  return "Rs. " + Number(value).toLocaleString("en-IN") + ".00";
}

function getStored(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function setStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getDB() {
  return window.SekarDB || null;
}

async function saveUserRecord(payload) {
  const db = getDB();
  if (!db) return;
  try {
    await db.saveUser(payload);
  } catch (error) {
    console.warn("User save failed", error);
  }
}

async function loadAdminProducts() {
  const db = getDB();
  if (!db) return getStored(ADMIN_PRODUCTS_KEY);
  try {
    const items = await db.listProducts();
    setStored(ADMIN_PRODUCTS_KEY, items);
    return items;
  } catch (error) {
    console.warn("Product load failed", error);
    return getStored(ADMIN_PRODUCTS_KEY);
  }
}

async function loadAdminCategories() {
  const db = getDB();
  if (!db) return getStored(ADMIN_CATEGORIES_KEY);
  try {
    const items = await db.listCategories();
    setStored(ADMIN_CATEGORIES_KEY, items);
    return items;
  } catch (error) {
    console.warn("Category load failed", error);
    return getStored(ADMIN_CATEGORIES_KEY);
  }
}

function cardTemplate(item) {
  const product = toProduct(item);
  const stock = product.badge === "Hot Deal" ? "Only 5 left in stock" : product.badge === "No Cost EMI" ? "Only 2 left in stock" : "";
  return `
    <article class="product-card" data-name="${product.name.toLowerCase()}" data-brand="${product.brand.toLowerCase()}" data-product='${JSON.stringify(product)}'>
      <div class="media">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <button type="button" class="wish-product" aria-label="Add to wishlist">&#9825;</button>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <div class="product-buy-row">
          <div class="price">${product.price}</div>
          <button type="button" class="add-cart" aria-label="Add to cart">
            <img class="cart-icon-img" src="assets/cart-icon.png" alt="">
            <span class="cart-added-icon">✓</span>
          </button>
        </div>
        ${stock ? `<p class="stock-note">${stock}</p>` : `<p class="stock-note muted-stock">In stock</p>`}
      </div>
    </article>
  `;
}

function fillGrid(id, items) {
  const grid = document.getElementById(id);
  if (grid) grid.innerHTML = items.map(cardTemplate).join("");
}

function renderProducts() {
  const adminProducts = getStored(ADMIN_PRODUCTS_KEY).map((item) => [item.name, item.price, item.mrp, "Admin", item.img, item.brand]);
  fillGrid("dealGrid", adminProducts.concat(products.deals));
  fillGrid("coolingGrid", products.cooling);
  fillGrid("washingGrid", products.washing);
  fillGrid("televisionGrid", products.televisions);
  fillGrid("kitchenGrid", products.kitchen);
  fillGrid("waterHeaterGrid", products.waterHeater);

  const category = document.body.dataset.category;
  if (category && products[category]) {
    fillGrid("categoryGrid", products[category].concat(products[category]));
  }
}

async function syncStoreProducts() {
  const needsStoreGrid = document.getElementById("dealGrid") || document.getElementById("categoryGrid");
  if (!needsStoreGrid) return;
  const items = await loadAdminProducts();
  const adminProducts = items.map((item) => [item.name, item.price, item.mrp, item.stock || "Admin", item.img, item.brand]);
  fillGrid("dealGrid", adminProducts.concat(products.deals));
}

function updateAccountHeader() {
  const user = JSON.parse(localStorage.getItem(USER_KEY) || "null");
  if (!user) return;
  document.querySelectorAll(".account-link").forEach((link) => {
    link.href = "dashboard.html";
    const small = link.querySelector("small");
    const name = link.querySelector(".account-name");
    if (small) small.textContent = "Welcome";
    if (name) name.textContent = user.name;
  });
}

function initAuthPages() {
  const loginForm = document.getElementById("customerLoginForm");
  const registerForm = document.getElementById("registerForm");
  const adminLoginForm = document.getElementById("adminLoginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = document.getElementById("loginEmail").value.trim();
      const name = value.includes("@") ? value.split("@")[0] : value;
      const user = { name: name || "customer", email: value, type: "customer", source: "login" };
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      saveUserRecord(user).finally(() => {
        window.location.href = "dashboard.html";
      });
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("registerEmail").value.trim();
      const user = { name: email.split("@")[0] || "customer", email, type: "customer", source: "register" };
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      saveUserRecord(user).finally(() => {
        window.location.href = "dashboard.html";
      });
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const id = document.getElementById("adminId").value.trim();
      const password = document.getElementById("adminPassword").value;
      if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
        localStorage.setItem(ADMIN_KEY, "yes");
        saveUserRecord({ name: "Sekar Admin", email: "admin@sekarandco.local", type: "admin", source: "admin-login" });
        window.location.href = "admin.html";
      } else {
        alert("Invalid admin ID or password");
      }
    });
  }
}

function initDashboard() {
  const user = JSON.parse(localStorage.getItem(USER_KEY) || "null");
  const name = user ? user.name : "customer";
  document.querySelectorAll("#dashboardName, #dashboardNameSmall").forEach((node) => {
    node.textContent = name;
  });
  document.querySelectorAll("#logoutButton, #logoutTextButton").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.removeItem(USER_KEY);
      window.location.href = "login.html";
    });
  });
}

function initAdminTopbar() {
  const actions = document.querySelector(".admin-top-actions");
  if (!actions) return;
  actions.innerHTML = `
    <button class="admin-icon-btn" type="button" aria-label="India"><span class="flag-india"><i></i><i></i><i></i></span></button>
    <button class="admin-icon-btn" type="button" aria-label="Theme"><img src="assets/admin-dark-mode.png" alt=""></button>
    <button class="admin-icon-btn has-dot" type="button" data-admin-popup="notifications" aria-label="Notifications"><img src="assets/admin-chat-notification.png" alt=""></button>
    <button class="admin-icon-btn has-dot" type="button" data-admin-popup="messages" aria-label="Messages"><img src="assets/admin-chat-notification.png" alt=""></button>
    <button class="admin-icon-btn" type="button" aria-label="Fullscreen"><img src="assets/admin-expand.png" alt=""></button>
    <button class="admin-icon-btn" type="button" data-admin-popup="apps" aria-label="Apps"><img src="assets/admin-grid.png" alt=""></button>
    <div class="admin-user">
      <img src="assets/admin-user.png" alt="">
      <div><strong>Sekar Admin</strong><small>Sale Administrator</small></div>
    </div>
    <a class="admin-gear" href="admin-settings.html" aria-label="Settings"><img src="assets/admin-gear.png" alt=""></a>
    <div class="admin-popover" id="adminPopupNotifications">
      <h3>Notifications</h3>
      <div class="admin-pop-list">
        <div><img src="assets/admin-user.png" alt=""><span><strong>New order received</strong><small>Customer placed an order</small></span><time>10:13 PM</time></div>
        <div><img src="assets/admin-user.png" alt=""><span><strong>Product stock alert</strong><small>Some products need update</small></span><time>09:45 PM</time></div>
        <div><img src="assets/admin-user.png" alt=""><span><strong>Firebase sync ready</strong><small>Data will store after config</small></span><time>Today</time></div>
      </div>
      <a href="admin-orders.html">View all</a>
    </div>
    <div class="admin-popover" id="adminPopupMessages">
      <h3>Messages</h3>
      <div class="admin-pop-list">
        <div><img src="assets/admin-user.png" alt=""><span><strong>Sekar Customer</strong><small>Need AC installation support.</small></span><time>Now</time></div>
        <div><img src="assets/admin-user.png" alt=""><span><strong>Store team</strong><small>Washing machine stock updated.</small></span><time>1 hr</time></div>
        <div><img src="assets/admin-user.png" alt=""><span><strong>Sales desk</strong><small>New EMI enquiry received.</small></span><time>2 hr</time></div>
      </div>
      <a href="admin-users.html">View all</a>
    </div>
    <div class="admin-popover admin-apps-popover" id="adminPopupApps">
      <h3>Related apps</h3>
      <div class="admin-app-grid">
        <a href="admin-products.html"><span>P</span>Products</a>
        <a href="admin-categories.html"><span>C</span>Category</a>
        <a href="admin-orders.html"><span>O</span>Orders</a>
        <a href="admin-users.html"><span>U</span>Users</a>
        <a href="admin-reports.html"><span>R</span>Reports</a>
        <a href="admin-settings.html"><span>S</span>Settings</a>
      </div>
      <a href="admin.html">View all app</a>
    </div>
  `;

  document.addEventListener("click", (event) => {
    const periodButton = event.target.closest("[data-period-menu]");
    if (periodButton) {
      const menu = periodButton.parentElement.querySelector(".period-menu");
      if (menu) menu.classList.toggle("open");
      return;
    }
    if (!event.target.closest(".period-menu")) {
      document.querySelectorAll(".period-menu.open").forEach((menu) => menu.classList.remove("open"));
    }
    const popupButton = event.target.closest("[data-admin-popup]");
    const insidePopup = event.target.closest(".admin-popover");
    if (!popupButton && !insidePopup) {
      document.querySelectorAll(".admin-popover.open").forEach((popup) => popup.classList.remove("open"));
      return;
    }
    if (!popupButton) return;
    const target = document.getElementById(`adminPopup${popupButton.dataset.adminPopup[0].toUpperCase()}${popupButton.dataset.adminPopup.slice(1)}`);
    document.querySelectorAll(".admin-popover.open").forEach((popup) => {
      if (popup !== target) popup.classList.remove("open");
    });
    if (target) target.classList.toggle("open");
  });
}

function initAdminDashboard() {
  const adminForm = document.getElementById("adminProductForm");
  const productRows = document.getElementById("adminProductRows");
  const categoryForm = document.getElementById("adminCategoryForm");
  const categoryRows = document.getElementById("adminCategoryRows");
  const orderRows = document.getElementById("adminOrderRows");
  const userRows = document.getElementById("adminUserRows");
  const isAdminPage = document.body.classList.contains("admin-shell-page") || adminForm || productRows || categoryForm || categoryRows || orderRows || userRows;
  if (!isAdminPage) return;
  if (localStorage.getItem(ADMIN_KEY) !== "yes") {
    window.location.href = "login.html";
    return;
  }

  async function renderAdminProducts() {
    const items = await loadAdminProducts();
    const productCount = document.getElementById("adminProductCount");
    if (productCount) productCount.textContent = String(items.length + Object.values(products).flat().length);
    if (!productRows) return;
    productRows.innerHTML = items.length
      ? items.map((item, index) => `
        <tr data-admin-name="${String(item.name || "").toLowerCase()}">
          <td><div class="admin-product-cell"><img src="${item.img || "assets/tv.webp"}" alt=""><div><strong>${item.name}</strong><small>${item.category || "Store Product"}</small></div></div></td>
          <td>#${item.id || index + 1001}</td>
          <td>${item.price}</td>
          <td>${item.brand}</td>
          <td><span class="status-pill">${item.stock || "In Stock"}</span></td>
          <td><div class="admin-actions"><button type="button" title="View">View</button><button type="button" title="Edit">Edit</button><button data-admin-remove="${item.id || index}" data-admin-index="${index}" type="button" title="Delete">Delete</button></div></td>
        </tr>
      `).join("")
      : '<tr><td colspan="6" class="admin-empty">No admin products added yet.</td></tr>';
  }

  async function renderAdminCategories() {
    const seed = [
      { id: "mobile", name: "Mobile Phones", qty: 27, sale: 18, date: "2026-06-09" },
      { id: "ac", name: "Air Conditioner", qty: 12, sale: 9, date: "2026-06-09" },
      { id: "washing", name: "Washing Machine", qty: 14, sale: 11, date: "2026-06-09" }
    ];
    const items = (await loadAdminCategories()).concat(seed);
    if (!categoryRows) return;
    categoryRows.innerHTML = items.map((item, index) => `
      <tr data-admin-name="${String(item.name || "").toLowerCase()}">
        <td><strong>${item.name}</strong></td>
        <td>${item.qty || item.quantity || 0}</td>
        <td>${item.sale || 0}</td>
        <td>${item.date || new Date().toISOString().slice(0, 10)}</td>
        <td><div class="admin-actions"><button type="button">View</button><button type="button">Edit</button>${item.id && !["mobile", "ac", "washing"].includes(item.id) ? `<button data-category-remove="${item.id}" data-category-index="${index}" type="button">Delete</button>` : ""}</div></td>
      </tr>
    `).join("");
  }

  async function renderAdminOrders() {
    const db = getDB();
    let orders = getStored("sekarFirebaseOrders");
    let users = getStored("sekarFirebaseUsers");
    try {
      if (db && db.listOrders) {
        orders = await db.listOrders();
        setStored("sekarFirebaseOrders", orders);
      }
      if (db && db.listUsers) {
        users = await db.listUsers();
        setStored("sekarFirebaseUsers", users);
      }
    } catch (error) {
      console.warn("Order load failed", error);
    }
    const cart = getStored(CART_KEY);
    const rows = orders.length ? orders : (cart.length ? [{ customer: "Current customer", items: cart, total: cart.reduce((sum, item) => sum + moneyToNumber(item.price) * item.qty, 0) }] : []);
    const orderCount = document.getElementById("adminOrderCount");
    const totalEarnings = document.getElementById("adminTotalEarnings");
    const promoValue = document.getElementById("adminPromoValue");
    const userCount = document.getElementById("adminUserCount");
    const revenueValue = document.getElementById("adminRevenueValue");
    const orderValue = document.getElementById("adminOrderValue");
    const topSaleRows = document.getElementById("adminTopSaleRows");
    const orderRange = document.getElementById("adminOrderRange");
    const total = rows.reduce((sum, order) => sum + Number(order.total || 0), 0);
    if (orderCount) orderCount.textContent = String(rows.length);
    if (totalEarnings) totalEarnings.textContent = formatMoney(total);
    if (revenueValue) revenueValue.textContent = formatMoney(total);
    if (orderValue) orderValue.textContent = formatMoney(total);
    if (promoValue) promoValue.textContent = String(cart.reduce((sum, item) => sum + item.qty, 0));
    if (userCount) userCount.textContent = String(users.length);
    if (orderRange) orderRange.textContent = `Showing ${rows.length ? 1 : 0}-${Math.min(5, rows.flatMap((order) => order.items || []).length)} of ${rows.flatMap((order) => order.items || []).length}`;
    if (topSaleRows) {
      const saleMap = new Map();
      rows.forEach((order) => {
        (order.items || []).forEach((item) => {
          const current = saleMap.get(item.name) || { ...item, qty: 0, amount: 0 };
          current.qty += Number(item.qty || 1);
          current.amount += moneyToNumber(item.price) * Number(item.qty || 1);
          saleMap.set(item.name, current);
        });
      });
      const topItems = [...saleMap.values()].sort((a, b) => b.qty - a.qty || b.amount - a.amount).slice(0, 6);
      topSaleRows.innerHTML = topItems.length
        ? topItems.map((item) => `
          <div>
            <img src="${item.img || "assets/tv.webp"}" alt="">
            <span><strong>${item.name}</strong><small>${formatMoney(moneyToNumber(item.price))}</small></span>
            <b>${item.qty}<small>Sales</small></b>
          </div>
        `).join("")
        : '<p class="admin-empty">No sale data yet.</p>';
    }
    if (!orderRows) return;
    orderRows.innerHTML = rows.length
      ? rows.flatMap((order, orderIndex) => (order.items || []).map((item, itemIndex) => `
        <tr>
          <td><div class="admin-product-cell"><img src="${item.img || "assets/tv.webp"}" alt=""><div><strong>${item.name}</strong><small>#${order.id || orderIndex + 5001}-${itemIndex + 1}</small></div></div></td>
          <td>${order.customer || order.user || "Sekar customer"}</td>
          <td>${order.id ? String(order.id).slice(0, 6) : 1452 + orderIndex}</td>
          <td>${item.qty || 1}</td>
          <td>${formatMoney(moneyToNumber(item.price) * (item.qty || 1))}</td>
          <td><span class="order-status ${orderIndex % 4 === 1 ? "pending" : orderIndex % 4 === 2 ? "cancel" : orderIndex % 4 === 3 ? "processing" : "paid"}">${order.status || (orderIndex % 4 === 1 ? "Pending" : orderIndex % 4 === 2 ? "Cancel" : orderIndex % 4 === 3 ? "Processing" : "Paid")}</span></td>
        </tr>
      `)).join("")
      : '<tr><td colspan="6" class="admin-empty">No orders yet.</td></tr>';
  }

  async function renderAdminUsers() {
    if (!userRows) return;
    const db = getDB();
    let users = getStored("sekarFirebaseUsers");
    try {
      if (db && db.listUsers) {
        users = await db.listUsers();
        setStored("sekarFirebaseUsers", users);
      }
    } catch (error) {
      console.warn("User load failed", error);
    }
    userRows.innerHTML = users.length
      ? users.map((user) => `
        <tr data-admin-name="${String(user.name || user.email || "").toLowerCase()}">
          <td><strong>${user.name || "Customer"}</strong></td>
          <td>${user.email || "-"}</td>
          <td><span class="status-pill">${user.type || "customer"}</span></td>
          <td>${user.source || "login"}</td>
          <td>${String(user.updatedAt || "").slice(0, 10) || "-"}</td>
        </tr>
      `).join("")
      : '<tr><td colspan="5" class="admin-empty">No users yet.</td></tr>';
  }

  function filterAdminRows(inputId, rowSelector) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      document.querySelectorAll(rowSelector).forEach((row) => {
        row.style.display = !query || row.dataset.adminName.includes(query) ? "" : "none";
      });
    });
  }

  if (adminForm) {
    adminForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const item = {
        name: document.getElementById("adminProductName").value,
        category: document.getElementById("adminProductCategory").value,
        price: document.getElementById("adminProductPrice").value,
        mrp: document.getElementById("adminProductMrp").value,
        brand: document.getElementById("adminProductBrand").value,
        stock: document.getElementById("adminProductStock").value,
        img: document.getElementById("adminProductImage").value
      };
      const db = getDB();
      if (db) await db.saveProduct(item);
      else {
        const items = getStored(ADMIN_PRODUCTS_KEY);
        items.unshift({ id: Date.now().toString(), ...item });
        setStored(ADMIN_PRODUCTS_KEY, items);
      }
      adminForm.reset();
      await renderAdminProducts();
    });
  }

  if (categoryForm) {
    categoryForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const item = {
        name: document.getElementById("adminCategoryName").value,
        qty: document.getElementById("adminCategoryQty").value,
        sale: document.getElementById("adminCategorySale").value,
        date: document.getElementById("adminCategoryDate").value || new Date().toISOString().slice(0, 10)
      };
      const db = getDB();
      if (db) await db.saveCategory(item);
      else {
        const items = getStored(ADMIN_CATEGORIES_KEY);
        items.unshift({ id: Date.now().toString(), ...item });
        setStored(ADMIN_CATEGORIES_KEY, items);
      }
      categoryForm.reset();
      await renderAdminCategories();
    });
  }

  document.addEventListener("click", async (event) => {
    if (event.target.dataset.adminRemove) {
      const id = event.target.dataset.adminRemove;
      const index = Number(event.target.dataset.adminIndex);
      const db = getDB();
      if (db && id) await db.removeProduct(id);
      else {
        const items = getStored(ADMIN_PRODUCTS_KEY);
        items.splice(index, 1);
        setStored(ADMIN_PRODUCTS_KEY, items);
      }
      await renderAdminProducts();
    }
    if (event.target.dataset.categoryRemove) {
      const id = event.target.dataset.categoryRemove;
      const index = Number(event.target.dataset.categoryIndex);
      const db = getDB();
      if (db && id) await db.removeCategory(id);
      else {
        const items = getStored(ADMIN_CATEGORIES_KEY);
        items.splice(index, 1);
        setStored(ADMIN_CATEGORIES_KEY, items);
      }
      await renderAdminCategories();
    }
  });

  const logout = document.getElementById("adminLogoutButton");
  if (logout) {
    logout.addEventListener("click", () => {
      localStorage.removeItem(ADMIN_KEY);
      window.location.href = "login.html";
    });
  }
  filterAdminRows("adminProductSearch", "#adminProductRows tr");
  filterAdminRows("adminCategorySearch", "#adminCategoryRows tr");
  renderAdminProducts();
  renderAdminCategories();
  renderAdminOrders();
  renderAdminUsers();
}

function addToCart(product) {
  const cart = getStored(CART_KEY);
  const existing = cart.find((item) => item.name === product.name);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  setStored(CART_KEY, cart);
  updateBadges();
}

function addToWishlist(product) {
  const list = getStored(WISH_KEY);
  if (!list.some((item) => item.name === product.name)) list.push(product);
  setStored(WISH_KEY, list);
  updateBadges();
}

function updateBadges() {
  const cartTotal = getStored(CART_KEY).reduce((sum, item) => sum + item.qty, 0);
  const wishTotal = getStored(WISH_KEY).length;
  document.querySelectorAll("#cartCount").forEach((node) => (node.textContent = cartTotal));
  document.querySelectorAll("#wishCount").forEach((node) => (node.textContent = wishTotal));
}

function filterProducts(query) {
  const normalized = query.trim().toLowerCase();
  document.querySelectorAll(".product-card").forEach((card) => {
    const match = !normalized || card.dataset.name.includes(normalized) || card.dataset.brand.includes(normalized);
    card.style.display = match ? "" : "none";
  });
}

function renderCartPage() {
  const wrap = document.getElementById("cartItems");
  if (!wrap) return;
  const cart = getStored(CART_KEY);
  if (!cart.length) {
    wrap.innerHTML = '<div class="empty-state">Your cart is empty. Add products from any category page.</div>';
    updateCartSummary(0);
    return;
  }
  wrap.innerHTML = cart.map((item, index) => {
    const price = moneyToNumber(item.price);
    const gst = Math.round(price * 0.18);
    const subtotal = price * item.qty;
    return `
      <div class="cart-row">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-name"><strong>${item.name}</strong><small>${item.brand}</small></div>
        <div>${formatMoney(price - gst)}</div>
        <div><strong>${formatMoney(gst)}</strong><small>GST: 18%</small></div>
        <div class="qty-box"><button data-qty="${index}" data-change="-1">-</button><span>${item.qty}</span><button data-qty="${index}" data-change="1">+</button></div>
        <div><strong>${formatMoney(subtotal)}</strong></div>
        <button class="remove-item" data-remove="${index}" aria-label="Remove item">Delete</button>
      </div>
    `;
  }).join("");
  updateCartSummary(cart.reduce((sum, item) => sum + moneyToNumber(item.price) * item.qty, 0));
}

function updateCartSummary(total) {
  const priceNode = document.getElementById("summaryPrice");
  const totalNode = document.getElementById("summaryTotal");
  const checkoutNode = document.getElementById("checkoutTotal");
  if (priceNode) priceNode.textContent = formatMoney(total);
  if (totalNode) totalNode.textContent = formatMoney(total);
  if (checkoutNode) checkoutNode.textContent = formatMoney(total);
}

function renderWishlistPage() {
  const grid = document.getElementById("wishlistGrid");
  if (!grid) return;
  const list = getStored(WISH_KEY);
  grid.innerHTML = list.length ? list.map((item) => cardTemplate([item.name, item.price, item.mrp, "Wishlist", item.img, item.brand])).join("") : '<div class="empty-state">Your wishlist is empty.</div>';
}

function renderCheckoutSummary() {
  const wrap = document.getElementById("checkoutOrderItems");
  if (!wrap) return;
  const draft = getStored(CHECKOUT_KEY);
  const cart = getStored(CART_KEY).length ? getStored(CART_KEY) : draft;
  const total = cart.reduce((sum, item) => sum + moneyToNumber(item.price) * item.qty, 0);

  if (!cart.length) {
    wrap.innerHTML = '<div class="order-line"><span>Your cart is empty</span><strong>Rs. 0.00</strong></div>';
    updateCartSummary(0);
    return;
  }

  wrap.innerHTML = cart.map((item) => `
    <div class="order-line">
      <span>${item.name} <strong>× ${item.qty}</strong></span>
      <strong>${formatMoney(moneyToNumber(item.price) * item.qty)}</strong>
    </div>
  `).join("");
  updateCartSummary(total);
}

initNavMenus();
enhanceFilterPanels();
renderProducts();
syncStoreProducts();
renderCartPage();
renderCheckoutSummary();
renderWishlistPage();
updateBadges();
updateAccountHeader();
initAuthPages();
initDashboard();
initAdminTopbar();
initAdminDashboard();

document.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  const addButton = event.target.closest(".add-cart");
  const checkoutButton = event.target.closest(".checkout-btn");
  if (checkoutButton && checkoutButton.getAttribute("href") === "checkout.html") {
    setStored(CHECKOUT_KEY, getStored(CART_KEY));
  }
  if (checkoutButton && checkoutButton.closest(".order-card")) {
    event.preventDefault();
    const items = getStored(CART_KEY).length ? getStored(CART_KEY) : getStored(CHECKOUT_KEY);
    const total = items.reduce((sum, item) => sum + moneyToNumber(item.price) * item.qty, 0);
    if (!items.length || total <= 0) {
      alert("Your cart is empty. Please add a product before placing order.");
      return;
    }
    const user = JSON.parse(localStorage.getItem(USER_KEY) || "null");
    const order = {
      customer: user ? user.name : "Guest customer",
      email: user ? user.email : "",
      items,
      total
    };
    const db = getDB();
    Promise.resolve(db ? db.saveOrder(order) : null).finally(() => {
      const orders = getStored("sekarFirebaseOrders");
      if (!orders.some((item) => item.total === total && JSON.stringify(item.items) === JSON.stringify(items))) {
        orders.unshift({ id: Date.now().toString(), ...order, updatedAt: new Date().toISOString() });
        setStored("sekarFirebaseOrders", orders);
      }
      localStorage.removeItem(CART_KEY);
      localStorage.removeItem(CHECKOUT_KEY);
      updateBadges();
      alert("Order placed successfully. Admin dashboard-la order show aagum.");
      window.location.href = "dashboard.html";
    });
  }
  if (addButton && card) {
    addToCart(JSON.parse(card.dataset.product));
    addButton.classList.add("added");
  }
  if (event.target.matches(".wish-product") && card) {
    addToWishlist(JSON.parse(card.dataset.product));
    event.target.classList.add("active");
  }
  if (event.target.dataset.qty) {
    const cart = getStored(CART_KEY);
    const index = Number(event.target.dataset.qty);
    cart[index].qty += Number(event.target.dataset.change);
    if (cart[index].qty < 1) cart.splice(index, 1);
    setStored(CART_KEY, cart);
    renderCartPage();
    updateBadges();
  }
  if (event.target.dataset.remove) {
    const cart = getStored(CART_KEY);
    cart.splice(Number(event.target.dataset.remove), 1);
    setStored(CART_KEY, cart);
    renderCartPage();
    updateBadges();
  }
});

const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("open");
  });
}

const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterProducts(document.getElementById("searchInput").value);
  });
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (event) => filterProducts(event.target.value));
}

document.querySelectorAll(".brand-filter").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checked = [...document.querySelectorAll(".brand-filter:checked")].map((item) => item.value.toLowerCase());
    document.querySelectorAll(".product-card").forEach((card) => {
      card.style.display = checked.length === 0 || checked.includes(card.dataset.brand) ? "" : "none";
    });
  });
});
