// 1. Membuat array kosong
let daftarBelanja = [];

// 2. Menambahkan tiga barang awal menggunakan push()
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");

// 3. Menambahkan tiga barang baru
daftarBelanja.push("Telur");
daftarBelanja.push("Sayur");
daftarBelanja.push("Buah");

// 4. Menghapus "Minyak" setelah mencari indexnya
let indexMinyak = daftarBelanja.indexOf("Minyak");
if (indexMinyak !== -1) {
    daftarBelanja.splice(indexMinyak, 1);
}

// 5. Mengurutkan array secara alfabet
daftarBelanja.sort();

// 6. Menampilkan isi array dengan nomor urut
console.log("Daftar Belanja Ibu Lily :");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}
