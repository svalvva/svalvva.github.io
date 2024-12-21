// Inisialisasi keranjang
let cart = [];

// Fungsi untuk menambahkan item ke keranjang
function addToCart(item) {
  cart.push(item);
  alert(`Item ${item.name} telah ditambahkan ke keranjang!`);
  updateCartCount();
}

// Fungsi untuk memperbarui jumlah item di keranjang
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.innerText = cart.length; // Update jumlah item di keranjang
}

// Fungsi untuk checkout
function checkout() {
  if (cart.length === 0) {
    alert("Isi keranjang terlebih dahulu sebelum melakukan checkout!");
    return;
  }

  const message = `Saya ingin membeli:
  Variant :\n${cart.map((item) => item.name).join("\n")}`;
  const whatsappUrl = `https://wa.me/6283137760847?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank"); // Buka WhatsApp
}

// Event listener untuk tombol "Add Cart"
document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const itemName = this.closest(".card-body").querySelector("p").innerText; // Ambil nama item
    addToCart({ name: itemName });
  });
});

// Event listener untuk tombol checkout
document.getElementById("checkout-button").addEventListener("click", checkout);
