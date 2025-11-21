let nasiGoreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;

// Hitung total harga sebelum diskon
let total = nasiGoreng + mieGoreng + capcay;

// Hitung diskon 10%
let diskonPersen = 10;
let potongan = (diskonPersen / 100) * total;

// Hitung harga setelah diskon
let totalSetelahDiskon = total - potongan;

// Pembayaran pelanggan
let pembayaran = 100000;

// Hitung kembalian
let kembalian = pembayaran - totalSetelahDiskon;


console.log(`Harga Nasi Goreng = Rp. ${nasiGoreng}`);
console.log(`Harga Mie Goreng = Rp. ${mieGoreng}`);
console.log(`Harga CapCay = Rp. ${capcay}`);
console.log(`Harga Total = Rp. ${total}`);
console.log(`Diskon = ${diskonPersen}%`);
console.log(`Harga Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
