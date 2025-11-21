// // method tanpa parameter
// class Car{
//     // method
//     sound(){
//     return "vroommm....";
//     }
// }

// // instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound());

// method dengan parameter
// class Car{
//     // method
//     sound(x){
//     return x + ", suara mobil saya vroomm";
//     }
// }

// // instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound("Haii"));

class Laptop {
    constructor(merk, baterai) {
        this.merk = merk;
        this.baterai = baterai;
    }

    // method
    cekBaterai() {
        if (this.baterai >= 80) {
            console.log(`${this.merk} : baterai penuh (${this.baterai}%).`);
        } else if (this.baterai >= 30) {
            console.log(`${this.merk} : baterai sedang (${this.baterai}%).`);
        } else {
            console.log(`${this.merk} : baterai lemah (${this.baterai}%).`);
        }
    }
}

// instantiate
var laptop1 = new Laptop("Asus", 90);
laptop1.cekBaterai();


//latihan tambahkan properti nilai, akan digrade dgn method, grade berdasrkan nilai saat objek dibentuk, 
// 100-90 sangat baik, 89-80 baik, 79-70 cukup, 69-60 kurang, 59 tidak lulus

class Nilai {
    constructor(siswa, nilai) {
        this.siswa = siswa;
        this.nilai = nilai;
    }

    // method
    cekGrade() {
        if (this.nilai >= 90 ) {
            console.log(`${this.siswa} : Sangat baik (${this.nilai}).`);
        } else if (this.baterai >= 80) {
            console.log(`${this.siswa} : Baik (${this.nilai}).`);
        }else if (this.baterai >= 70) {
            console.log(`${this.siswa} : Cukup (${this.nilai}).`);
        }else if (this.baterai >= 60) {
            console.log(`${this.siswa} : Kurang (${this.nilai}).`);
        }else {
            console.log(`${this.siswa} : Tidak Lulus (${this.nilai}).`);
        }
    }
}

// instantiate
var siswa1 = new Nilai("Indah", 90);
siswa1.cekGrade();
