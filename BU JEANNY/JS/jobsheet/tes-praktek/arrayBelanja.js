let sepatu = [
    { merk: "New Balance NB530", harga: "390000"},
    { merk: "Nike Vomero 5", harga: "350000"},
    { merk: "Adidas Samba", harga: "180000"},
    { merk: "Onitsuka Tiger Mexico", harga: "420000"}
]

console.log("===== Rincian Belanja Sepatu =====");
console.log(` 1. ${sepatu[0].merk} - Rp. ${sepatu[0].harga}`);
console.log(` 2. ${sepatu[1].merk} - Rp. ${sepatu[1].harga}`);
console.log(` 3. ${sepatu[2].merk} - Rp. ${sepatu[2].harga}`);
console.log(` 4. ${sepatu[3].merk} - Rp. ${sepatu[3].harga}`);
console.log("");

// Hitung total belanja
let totalBelanja =  parseInt(sepatu[0].harga) + parseInt(sepatu[1].harga) + parseInt(sepatu[2].harga) + parseInt(sepatu[3].harga);

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
let pembayaran = 1200000;

// Hitung kembalian
let kembalian = pembayaran - totalSetelahDiskon;

console.log(`Total Belanja = Rp. ${totalBelanja}`);
console.log(`Diskon = ${diskonPersen}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
