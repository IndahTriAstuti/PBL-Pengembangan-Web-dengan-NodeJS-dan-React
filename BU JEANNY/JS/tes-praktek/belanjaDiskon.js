let headset = 225000;
let mouse = 150000;
let keyboard = 350000;

// Hitung total belanja
let totalBelanja = headset + mouse + keyboard;

// Tentukan persentase diskon berdasarkan total belanja
let diskonPersen = 0;

if (totalBelanja < 250000) {
  diskonPersen = 0;
} else if (totalBelanja >= 250000 && totalBelanja <= 499999) {
  diskonPersen = 5;
} else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
  diskonPersen = 10;
} else {
  diskonPersen = 15;
}

// Hitung nilai diskon dan total setelah diskon
let potongan = (diskonPersen / 100) * totalBelanja;
let totalSetelahDiskon = totalBelanja - potongan;

// Pembayaran pelanggan
let pembayaran = 800000;

// Hitung kembalian
let kembalian = pembayaran - totalSetelahDiskon;

console.log("===== Rincian Pembelian =====");
console.log(`Headset = Rp. ${headset}`);
console.log(`Mouse = Rp. ${mouse}`);
console.log(`Keyboard = Rp. ${keyboard}`);
console.log("");
console.log(`Total Belanja = Rp. ${totalBelanja}`);
console.log(`Diskon = ${diskonPersen}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
