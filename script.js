/* Nabou Shop — fonctionnalités de démonstration */
"use strict";

// Numéro WhatsApp de la boutique, format international sans + ni espaces (ex. "221771234567").
// Tant qu'il est vide, la commande reste en mode démonstration.
const WHATSAPP_NUMBER = "221776366092";

const PRODUCTS = [
  {id:1,name:"Huile d’olive 1 L",category:"Huiles",price:6000,tag:"HUILE",desc:"Huile d’olive en format 1 litre, idéale pour compléter votre sélection de produits.",image:"images/huile-olive.jpg"},
  {id:2,name:"Huile Nila",category:"Huiles",price:2500,tag:"NILA",desc:"Huile Nila à intégrer à votre routine de soin selon les indications du produit.",image:"images/huile-nila.jpg"},
  {id:3,name:"Savon à l’aloe vera — pot",category:"Savons",price:2000,tag:"SAVON",desc:"Savon à l’aloe vera en pot, pour votre routine quotidienne de toilette.",image:"images/savon-aloe-vera-pot.jpg"},
  {id:4,name:"Savon aux extraits de carotte — pot",category:"Savons",price:2000,tag:"SAVON",desc:"Savon aux extraits de carotte présenté en pot.",image:"images/savon-carotte-pot.jpg"},
  {id:5,name:"Huile de rose de Damas",category:"Huiles",price:7000,tag:"SOIN",desc:"Huile de rose de Damas proposée pour compléter votre routine de soin. Vérifiez les conseils d’utilisation sur l’emballage.",image:"images/huile-rose-damas.jpg"},
  {id:6,name:"Huile musquée",category:"Huiles",price:7000,tag:"SOIN",desc:"Huile musquée pour votre routine de soin. Consultez l’étiquette pour connaître la composition et le mode d’emploi.",image:"images/huile-musquee.jpg"},
  {id:7,name:"Crème à la rose",category:"Soins",price:2000,tag:"CRÈME",desc:"Crème à la rose pour compléter votre rituel de soin quotidien.",image:"images/creme-rose.jpg"},
  {id:8,name:"Gants de douche",category:"Accessoires",price:1500,tag:"ACCESSOIRE",desc:"Gants de douche pratiques à utiliser pendant la toilette.",image:"images/gants-douche.jpg"},
  {id:9,name:"Savon au curcuma — sachet",category:"Savons",price:1500,tag:"SAVON",desc:"Savon au curcuma en format sachet, facile à ranger et à transporter.",image:"images/savon-curcuma-sachet.jpg"},
  {id:10,name:"Savon à l’huile d’argan — sachet",category:"Savons",price:1500,tag:"SAVON",desc:"Savon à l’huile d’argan en format sachet pour la toilette quotidienne.",image:"images/savon-argan-sachet.jpg"},
  {id:11,name:"Huile de glycérine",category:"Huiles",price:1000,tag:"SOIN",desc:"Huile de glycérine à utiliser conformément aux indications figurant sur le produit.",image:"images/huile-glycerine.jpg"},
  {id:12,name:"Savon au citron — pot",category:"Savons",price:2000,tag:"SAVON",desc:"Savon au citron présenté en pot pour votre routine de toilette.",image:"images/savon-citron-pot.jpg"},
  {id:13,name:"Savon au curcuma — pot",category:"Savons",price:2000,tag:"SAVON",desc:"Savon au curcuma en pot, une autre option pour votre routine de toilette.",image:"images/savon-curcuma-pot.jpg"},
  {id:14,name:"Savon au Nila bleu — pot",category:"Savons",price:2000,tag:"NILA BLEU",desc:"Savon au Nila bleu présenté en pot. Suivez les indications d’utilisation sur l’emballage.",image:"images/savon-nila-bleu-pot.jpg"},
  {id:15,name:"Savon beldi à l’Aker Fassi — sachet",category:"Savons",price:1500,tag:"SAVON",desc:"Savon beldi à l’Aker Fassi en format sachet, pour préparer la peau au gommage corporel.",image:"images/savon-aker-fomi.jpg"},
  {id:16,name:"Savon à la rose — pot",category:"Savons",price:2000,tag:"SAVON",desc:"Savon à la rose en pot pour compléter votre sélection de produits de toilette.",image:"images/savon-rose-pot.jpg"},
  {id:17,name:"Savon à l’huile d’argan — pot",category:"Savons",price:2000,tag:"SAVON",desc:"Savon à l’huile d’argan en pot pour votre routine quotidienne.",image:"images/savon-argan-pot.jpg"},
  {id:18,name:"Huile de menthe poivrée",category:"Huiles",price:3500,tag:"HUILE",desc:"Huile de menthe poivrée. Vérifiez sa composition et ses précautions d’emploi avant utilisation.",image:"images/huile-menthe-poivree.jpg"},
  {id:19,name:"Savon au coquelicot — 1 kg",category:"Savons",price:5000,tag:"FORMAT 1 KG",desc:"Savon au coquelicot vendu au format 1 kg, pratique pour disposer d’une plus grande quantité.",image:"images/savon-coquelicot-1kg.jpg"},
  {id:20,name:"Savon au citron — 1 kg",category:"Savons",price:5000,tag:"FORMAT 1 KG",desc:"Savon au citron proposé au format 1 kg.",image:"images/savon-citron-1kg.jpg"},
  {id:21,name:"Gamme Nila — coffret complet",category:"Soins",price:20000,tag:"COFFRET",desc:"Coffret Nila comprenant : gommage, masque, savon de visage, sérum de visage, crème de visage, baume à lèvres, gel douche, lait de corps et eau de Nila.",image:"images/gamme-nila.jpg"},
  {id:22,name:"Huile de ricin",category:"Huiles",price:1000,tag:"HUILE",desc:"Huile de ricin. Consultez l’étiquette pour connaître la composition et les conseils d’utilisation.",image:"images/huile-ricin.jpg"},
  {id:23,name:"Savon à l’huile de Nila — sachet",category:"Savons",price:1500,tag:"NILA",desc:"Savon à l’huile de Nila en format sachet.",image:"images/savon-huile-nila-sachet.jpg"},
  {id:24,name:"Huile de carotte",category:"Huiles",price:1000,tag:"HUILE",desc:"Huile de carotte nourrissante et satinante, flacon de 60 ml.",image:"images/huile-carotte.jpg"},
  {id:25,name:"Savon aux carottes — sachet",category:"Savons",price:2000,tag:"SAVON",desc:"Savon beldi aux carottes en format sachet, pour éliminer les cellules mortes de la peau.",image:"images/savon-carotte-sachet.jpg"},
  {id:26,name:"Savon au coquelicot — sachet",category:"Savons",price:2000,tag:"SAVON",desc:"Savon beldi au coquelicot en format sachet, pour préparer la peau au gommage corporel.",image:"images/savon-coquelicot-sachet.jpg"},
];

// Image de remplacement si une photo est absente ou introuvable
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 330"><rect width="300" height="330" fill="#efe9dd"/><text x="150" y="175" font-family="sans-serif" font-size="20" text-anchor="middle" fill="#9a8f7a">Photo bientôt</text></svg>');

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const formatPrice = (value) => `${new Intl.NumberFormat("fr-FR").format(value)} FCFA`;
const storage = {
  get(key, fallback) {
    try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { /* Le site reste utilisable si le stockage est désactivé. */ }
  }
};

let activeCategory = "Tout";
let cart = storage.get("nabou-cart", []);
let currentUser = storage.get("nabou-user", null);
let authMode = "login";
let toastTimer;

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("show"), 4500);
}

function getFilteredProducts() {
  const query = $("#search-input").value.trim().toLocaleLowerCase("fr");
  let products = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "Tout" || product.category === activeCategory;
    const searchable = `${product.name} ${product.category} ${product.desc}`.toLocaleLowerCase("fr");
    return matchesCategory && searchable.includes(query);
  });
  const sort = $("#sort-select").value;
  if (sort === "low") products.sort((a,b) => a.price - b.price);
  if (sort === "high") products.sort((a,b) => b.price - a.price);
  if (sort === "name") products.sort((a,b) => a.name.localeCompare(b.name, "fr"));
  return products;
}

function renderProducts() {
  const products = getFilteredProducts();
  $("#results-count").textContent = `${products.length} produit${products.length > 1 ? "s" : ""}`;
  $("#product-grid").innerHTML = products.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 55}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src=PLACEHOLDER">
        <span class="product-tag">${product.tag}</span>
        <button class="quick-add" data-add="${product.id}" aria-label="Ajouter ${product.name} au panier" title="Ajouter au panier">+</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <div class="product-title-row"><h3 class="product-title">${product.name}</h3><span class="product-price">${formatPrice(product.price)}</span></div>
        <p class="product-desc">${product.desc}</p>
      </div>
    </article>`).join("");
  $("#empty-state").hidden = products.length !== 0;
  $("#product-grid").hidden = products.length === 0;
}

function saveCart() {
  storage.set("nabou-cart", cart);
  renderCart();
}

function addToCart(id) {
  const product = PRODUCTS.find(item => item.id === Number(id));
  if (!product) return;
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity += 1;
  else cart.push({id:product.id, quantity:1});
  saveCart();
  toast(`${product.name} ajouté au panier`);
}

function cartDetails() {
  return cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return product ? {...product, quantity:item.quantity} : null;
  }).filter(Boolean);
}

function cartTotal() {
  return cartDetails().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  const items = cartDetails();
  const count = items.reduce((sum,item) => sum + item.quantity, 0);
  $("#cart-count").textContent = count;
  $("#panel-cart-count").textContent = `(${count})`;
  $("#cart-subtotal").textContent = formatPrice(cartTotal());
  $("#checkout-total").textContent = formatPrice(cartTotal());
  $("#cart-empty").hidden = items.length > 0;
  $("#cart-footer").hidden = items.length === 0;
  $("#cart-items").innerHTML = items.map(item => `
    <article class="cart-row">
      <img src="${item.image}" alt="" onerror="this.onerror=null;this.src=PLACEHOLDER">
      <div><h3>${item.name}</h3><span class="cart-price">${formatPrice(item.price * item.quantity)}</span>
        <div class="qty-controls"><button data-qty="${item.id}" data-delta="-1" aria-label="Retirer une unité de ${item.name}">−</button><span>${item.quantity}</span><button data-qty="${item.id}" data-delta="1" aria-label="Ajouter une unité de ${item.name}">+</button></div>
      </div><button class="remove-item" data-remove="${item.id}" aria-label="Supprimer ${item.name}">×</button>
    </article>`).join("");
}

function openCart() {
  closeModals();
  $("#overlay").hidden = false;
  $("#cart-panel").classList.add("open");
  $("#cart-panel").setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $("#cart-panel").classList.remove("open");
  $("#cart-panel").setAttribute("aria-hidden","true");
  if ($("#account-modal").hidden && $("#checkout-modal").hidden) {
    $("#overlay").hidden = true;
    document.body.style.overflow = "";
  }
}
function openModal(id) {
  closeCart();
  $("#overlay").hidden = false;
  $(id).hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModals() {
  $("#account-modal").hidden = true;
  $("#checkout-modal").hidden = true;
  $("#overlay").hidden = true;
  document.body.style.overflow = "";
}

function setAuthMode(mode) {
  authMode = mode;
  $$(".auth-tab").forEach(button => button.classList.toggle("active", button.dataset.authTab === mode));
  const register = mode === "register";
  $("#name-label").hidden = !register;
  $("#account-name").hidden = !register;
  $("#account-name").required = register;
  $("#account-password").autocomplete = register ? "new-password" : "current-password";
  $("#account-title").textContent = register ? "Créer un compte." : "Votre espace.";
  $("#account-submit").innerHTML = register ? "Créer mon compte <span>→</span>" : "Me connecter <span>→</span>";
  $("#account-message").textContent = "";
}

function handleAccountSubmit(event) {
  event.preventDefault();
  const email = $("#account-email").value.trim().toLowerCase();
  const password = $("#account-password").value;
  const users = storage.get("nabou-demo-users", []);
  const message = $("#account-message");
  if (authMode === "register") {
    const name = $("#account-name").value.trim();
    if (users.some(user => user.email === email)) {
      message.textContent = "Un compte de démonstration existe déjà avec cette adresse.";
      return;
    }
    users.push({name,email,password});
    storage.set("nabou-demo-users", users);
    currentUser = {name,email};
    storage.set("nabou-user", currentUser);
    message.textContent = "Compte de démonstration créé !";
  } else {
    const user = users.find(item => item.email === email && item.password === password);
    if (!user) {
      message.textContent = "Adresse ou mot de passe incorrect. En mode démo, créez d'abord un compte.";
      return;
    }
    currentUser = {name:user.name,email:user.email};
    storage.set("nabou-user", currentUser);
    message.textContent = `Bienvenue, ${user.name} !`;
  }
  setTimeout(() => {
    closeModals();
    $("#account-form").reset();
    toast(`Bienvenue${currentUser?.name ? `, ${currentUser.name}` : ""} chez Nabou Shop`);
    updateAccountButton();
  }, 650);
}

function updateAccountButton() {
  const button = $("#account-open");
  if (!button) return;
  button.textContent = currentUser ? "●" : "♙";
  button.title = currentUser ? `Connecté : ${currentUser.name} — cliquer pour se déconnecter` : "Mon compte";
  button.setAttribute("aria-label", button.title);
}

function openCheckout() {
  if (!cart.length) return;
  closeCart();
  if (currentUser) $("#checkout-name").value = currentUser.name || "";
  openModal("#checkout-modal");
}

function handleCheckout(event) {
  event.preventDefault();
  const order = {
    reference: `NS-${Date.now().toString().slice(-7)}`,
    customer: {
      name: $("#checkout-name").value.trim(),
      phone: $("#checkout-phone").value.trim(),
      address: $("#checkout-address").value.trim(),
      note: $("#checkout-note").value.trim()
    },
    items: cartDetails().map(({id,name,price,quantity}) => ({id,name,price,quantity})),
    total: cartTotal(),
    createdAt: new Date().toISOString()
  };
  const orders = storage.get("nabou-demo-orders", []);
  orders.push(order);
  storage.set("nabou-demo-orders", orders);
  const digits = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  let waWindow = null;
  if (digits) {
    const lines = order.items.map(i => `• ${i.quantity} × ${i.name} — ${formatPrice(i.price * i.quantity)}`);
    const text = [
      `Bonjour Nabou Shop, je souhaite commander (réf. ${order.reference}) :`, "", ...lines, "",
      `Total : ${formatPrice(order.total)}`, "",
      `Nom : ${order.customer.name}`, `Téléphone : ${order.customer.phone}`, `Adresse : ${order.customer.address}`,
      ...(order.customer.note ? [`Note : ${order.customer.note}`] : [])
    ].join("\n");
    waWindow = window.open(`https://wa.me/${digits}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }
  cart = [];
  saveCart();
  closeModals();
  $("#checkout-form").reset();
  toast(digits
    ? (waWindow ? `Commande ${order.reference} prête : envoyez le message WhatsApp pour la valider.` : `Commande ${order.reference} enregistrée. Autorisez l'ouverture de WhatsApp pour l'envoyer.`)
    : `Commande ${order.reference} préparée ! Démo uniquement : aucun vendeur n'a été notifié.`);
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  renderProducts();
  renderCart();
  updateAccountButton();

  if (storage.get("nabou-theme", "light") === "dark") document.body.classList.add("dark");
  $("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    storage.set("nabou-theme", dark ? "dark" : "light");
    $("#theme-toggle").setAttribute("aria-label", dark ? "Activer le mode clair" : "Activer le mode sombre");
  });

  $("#search-input").addEventListener("input", renderProducts);
  $("#sort-select").addEventListener("change", renderProducts);
  $("#category-filters").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderProducts();
  });
  $("#reset-filters").addEventListener("click", () => {
    activeCategory = "Tout";
    $("#search-input").value = "";
    $("#sort-select").value = "featured";
    $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "Tout"));
    renderProducts();
  });
  $("#product-grid").addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });

  $("#cart-open").addEventListener("click", openCart);
  $("#continue-shopping").addEventListener("click", closeCart);
  $("#cart-panel").addEventListener("click", event => {
    const qty = event.target.closest("[data-qty]");
    const remove = event.target.closest("[data-remove]");
    if (qty) {
      const item = cart.find(product => product.id === Number(qty.dataset.qty));
      if (item) {
        item.quantity += Number(qty.dataset.delta);
        if (item.quantity <= 0) cart = cart.filter(product => product.id !== item.id);
        saveCart();
      }
    }
    if (remove) {
      cart = cart.filter(product => product.id !== Number(remove.dataset.remove));
      saveCart();
      toast("Produit retiré du panier");
    }
  });

  $("#account-open").addEventListener("click", () => {
    if (currentUser) {
      currentUser = null;
      storage.set("nabou-user", null);
      updateAccountButton();
      toast("Vous êtes déconnecté.");
      return;
    }
    setAuthMode("login");
    openModal("#account-modal");
  });
  $$(".auth-tab").forEach(button => button.addEventListener("click", () => setAuthMode(button.dataset.authTab)));
  $("#account-form").addEventListener("submit", handleAccountSubmit);
  $("#checkout-open").addEventListener("click", openCheckout);
  $("#checkout-form").addEventListener("submit", handleCheckout);

  $("#overlay").addEventListener("click", () => {
    closeCart();
    closeModals();
  });
  $$("[data-close]").forEach(button => button.addEventListener("click", () => {
    closeCart();
    closeModals();
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCart();
      closeModals();
    }
  });

  $("#mobile-menu-toggle").addEventListener("click", () => {
    const menu = $("#mobile-nav");
    menu.hidden = !menu.hidden;
    $("#mobile-menu-toggle").setAttribute("aria-label", menu.hidden ? "Ouvrir le menu" : "Fermer le menu");
  });
  $$("#mobile-nav a").forEach(link => link.addEventListener("click", () => { $("#mobile-nav").hidden = true; }));

  $("#newsletter-form").addEventListener("submit", event => {
    event.preventDefault();
    const email = $("#newsletter-email").value.trim();
    const subscriptions = storage.get("nabou-newsletter", []);
    if (!subscriptions.includes(email)) subscriptions.push(email);
    storage.set("nabou-newsletter", subscriptions);
    $("#newsletter-message").textContent = "Merci ! Votre inscription de démonstration est enregistrée sur cet appareil.";
    event.target.reset();
  });
}
document.addEventListener("DOMContentLoaded", init);
