const fs = require("fs");

// 1. Membuat object data film baru
let filmBaru1 = {
    Judul: "Agak Laen",
    Tahun: 2024,
    Genre: "Horor, Komedi"
};

let filmBaru2 = {
    Judul: "Habibie & Ainun",
    Tahun: 2012,
    Genre: "Drama, Romantis"
};

let filmBaru3 = {
    Judul: "Dilan 1990",
    Tahun: 2018,
    Genre: "Romantis"
};

// 2. Membaca isi file film.json
let dataFilm = JSON.parse(fs.readFileSync("film.json", "utf8"));

// 3. Tambahkan object film baru ke dalam array
dataFilm.push(filmBaru1);
dataFilm.push(filmBaru2);
dataFilm.push(filmBaru3);

// 4. Simpan ulang array film ke file JSON
fs.writeFileSync("film.json", JSON.stringify(dataFilm, null, 4));

// 5. Tampilkan seluruh film ke terminal
console.log("Daftar Film:");
dataFilm.forEach((film, i) => {
    console.log(`${i + 1}. ${film.Judul} (${film.Tahun}) - ${film.Genre}`);
});
