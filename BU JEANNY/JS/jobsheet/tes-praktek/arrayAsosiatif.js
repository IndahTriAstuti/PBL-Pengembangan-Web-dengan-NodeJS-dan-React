// 1. Membuat objek yang menyimpan data tinggi badan
let tinggi = {
    Rose: 178,
    Magnolia: 153,
    Daisy: 165,
    Jasmine: 161,
    Violet: 159
};

// 2. Menampilkan setiap pasangan nama dan tinggi menggunakan perulangan for...in
for (let nama in tinggi) {
    console.log(`${nama} memiliki tinggi ${tinggi[nama]} cm`);
}
