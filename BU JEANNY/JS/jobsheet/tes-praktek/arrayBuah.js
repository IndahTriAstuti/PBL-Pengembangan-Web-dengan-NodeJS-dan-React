// 1. Membuat array kosong
let buah = [];

// 2. Menambahkan data buah menggunakan push()
buah.push("Apel");
buah.push("Mangga");
buah.push("Jeruk");
buah.push("Semangka");
buah.push("Pisang");
buah.push("Anggur");
buah.push("Nanas");

// 3. Mengurutkan array secara alfabet
buah.sort();

// 4. Menampilkan seluruh elemen dengan nomor urut
for (let i = 0; i < buah.length; i++) {
    console.log(`${i + 1}. ${buah[i]}`);
}
