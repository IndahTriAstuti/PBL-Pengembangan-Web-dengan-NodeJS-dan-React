class Mahasiswa {
    constructor(nama) {
        this._nama = nama; // private property
    }   

    //GETTER
    get nama() {
        return this._nama;
    }

    //SETTER
    set nama(value){
        if (value.length < 3){
            console.log("Nama terlalu pendek");
        } else {
            this._nama = value;
        }
    }   
}

// instantiate
let mhs1 = new Mahasiswa("Nilam");
console.log(mhs1.nama); // akses via getter

mhs1.nama = "Li"; // akses via setter
mhs1.nama = "Yiswi"; // akses via setter
console.log(mhs1.nama); // akses via getter