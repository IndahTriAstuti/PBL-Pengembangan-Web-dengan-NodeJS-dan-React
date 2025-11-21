class Nilai {
    constructor(siswa, nilai) {
        this.siswa = siswa;
        this._nilai = null;   // awalnya kosong
        this.nilai = nilai;   // pakai setter supaya validasi jalan
    }

    // GETTER
    get nilai() {
        return this._nilai;
    }

    // SETTER
    set nilai(value) {
        if (value < 0 || value > 100) {
            console.log("Nilai tidak sesuai (harus 0-100).");
        } else {
            this._nilai = value;
        }
    }

    // METHOD CEK GRADE
    cekGrade() {
        if (this._nilai === null) {
            console.log(`Nilai ${this.siswa} belum valid.`);
            return;
        }

        if (this._nilai >= 90) {
            console.log(`Nilai ${this.siswa}: Sangat baik.`);
        } else if (this._nilai >= 80) {
            console.log(`Nilai ${this.siswa}: Baik.`);
        } else if (this._nilai >= 70) {
            console.log(`Nilai ${this.siswa}: Cukup.`);
        } else if (this._nilai >= 60) {
            console.log(`Nilai ${this.siswa}: Kurang.`);
        } else {
            console.log(`Nilai ${this.siswa}: Tidak Lulus.`);
        }
    }
}


// =====================
var nilai1 = new Nilai("Andi", 10); // invalid
nilai1.cekGrade();                   // "Nilai Andi belum valid."


