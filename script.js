
// GANTI DENGAN NOMOR WHATSAPP TOKO
// Contoh: 6281234567890
const whatsapp = "6281234567890";

// DAFTAR MENU KOPI
const menu = [
  {
    name: "Espresso",
    price: 18000,
    description: "Kopi hitam pekat dengan aroma yang kuat.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=700"
  },
  {
    name: "Cappuccino",
    price: 25000,
    description: "Perpaduan espresso, susu dan foam lembut.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=700"
  },
  {
    name: "Cafe Latte",
    price: 26000,
    description: "Espresso dengan susu creamy yang nikmat.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
  },
  {
    name: "Kopi Susu Senja",
    price: 23000,
    description: "Kopi susu spesial dengan gula aren.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
  },
  {
    name: "Americano",
    price: 20000,
    description: "Espresso klasik dengan air panas.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700"
  },
  {
    name: "Caramel Latte",
    price: 28000,
    description: "Latte lembut dengan sentuhan karamel.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=700"
  }
];

// FORMAT HARGA RUPIAH
function rupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka);
}

// TAMPILKAN SEMUA MENU
const menuGrid = document.getElementById("menuGrid");

menu.forEach((kopi, index) => {
  const card = document.createElement("div");
  card.className = "menu-card";

  card.innerHTML = `
    <img src="${kopi.image}" alt="${kopi.name}">
    <div class="menu-info">
      <h3>${kopi.name}</h3>
      <p>${kopi.description}</p>
      <span class="price">${rupiah(kopi.price)}</span>
      <button class="order-btn" data-index="${index}">
        Pesan Sekarang
      </button>
    </div>
  `;

  menuGrid.appendChild(card);
});

// PESAN KOPI MELALUI WHATSAPP
function pesanKopi(kopi) {
  const pesan =
    `Halo Kopi Senja! ☕\n` +
    `Saya ingin memesan:\n` +
    `Menu: ${kopi.name}\n` +
    `Harga: ${rupiah(kopi.price)}\n` +
    `Apakah tersedia?`;

  const url =
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// AKTIFKAN TOMBOL PESAN
menuGrid.addEventListener("click", (event) => {
  const tombol = event.target.closest(".order-btn");

  if (!tombol) return;

  const index = Number(tombol.dataset.index);
  pesanKopi(menu[index]);
});

// TOMBOL KONTAK WHATSAPP
document.getElementById("contactButton")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const pesan =
      "Halo Kopi Senja! Saya ingin melihat menu dan memesan kopi.";

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(pesan)}`,
      "_blank",
      "noopener,noreferrer"
    );
  });

// NAVIGASI UNTUK HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// TUTUP NAVIGASI SETELAH MEMILIH MENU
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
