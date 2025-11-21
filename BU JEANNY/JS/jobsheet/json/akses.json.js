const fs = require('fs');
//module bawaan Node.js (fs)
//require ('fs') untuk membaca, menulis, mengelola file

const teks = fs.readFileSync("data.json", "utf-8");
//membuka dan membaca file JSON(data.json)
//utf-8, membaca file sebagai teks biasa (bukan biner)

const data = JSON.parse(teks);
//mengubah teks JSON menjadi array/object

//menambah data baru (objek) ke data.json
data.push({id:1, nama:"Jeanny", usia: 32});

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
//menyimpan (menulis ulang) array ke data.json
//stringfy : mengubah array menjadi teks JSON
//null, 2 : membuat format 2 spasi per indentasi 

console.log("Data berhasil ditambahkan.");