function bagiAngka(a,b){
let hasil = a / b ;
console.log (`Hasil Pembagian Adalah : ${hasil}`);
}

let angka1 = 10;
let angka2 = 0;

try {
    if(angka2 === 0){
        throw new Error ("Angka tidak boleh 0!")
    }
    bagiAngka(angka1, angka2)
} catch (error) {
    console.error("Terjadi kesalahan: " + error.message);
}
console.log("Program selesai.");