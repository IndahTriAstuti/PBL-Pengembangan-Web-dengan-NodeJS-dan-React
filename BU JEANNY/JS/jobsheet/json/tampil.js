const fs = require('fs');

//baca isi file data.json
const isiFile = fs.readFileSync("data.json", "utf-8");

//ubah data JSON menjadi array/object
const data = JSON.parse(isiFile);

//tampilkan data.json ke console
console.log("Isi data.json : ",data);

//tampilkan tiap barisnya
data.forEach((item) => {
    console.log(`ID: ${item.id}, Nama: ${item.nama}, Usia: ${item.usia}`);
});
