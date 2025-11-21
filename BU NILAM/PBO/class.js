// membuat class dengan nama car
class Car {
    // membuat property
    constructor(brand){
        this.brand = brand;
    }
}

// instantiate
var mobil1 = new Car('mitsubishi');
console.log(mobil1.brand);

var mobil2 = new Car('pajero');
console.log(mobil2.brand);

// latihan 
// class peserta (nama, umur, proglat) objek 3

// latihan 
// class peserta (nama, umur, proglat) objek 3

class Peserta {
    constructor(nama, umur, proglat) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

// instantiate objek
var peserta1 = new Peserta('indah', 23, 'web');
console.log(peserta1.nama);
console.log(peserta1.umur);
console.log(peserta1.proglat);

var peserta2 = new Peserta('tri', 21, 'mobile');
console.log(peserta2.nama);
console.log(peserta2.umur);
console.log(peserta2.proglat);

var peserta3 = new Peserta('astuti', 20, 'python');
console.log(peserta3.nama);
console.log(peserta3.umur);
console.log(peserta3.proglat);

