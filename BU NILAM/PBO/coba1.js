// Parent class
class Peserta {
    constructor(nama, umur, proglat) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

// Class helper untuk nilai 0–100
class Nilai {
    constructor(value) {
        this._nilai = null;
        this.nilai = value;
    }

    get nilai() {
        return this._nilai;
    }

    set nilai(value) {
        if (value < 0 || value > 100) {
            console.log("Nilai harus 0–100.");
        } else {
            this._nilai = value;
        }
    }
}


// Child class 1: Web (ndb, nfe, nbe)
class Web extends Peserta {
    constructor(nama, umur, proglat, ndb, nfe, nbe) {
        super(nama, umur, proglat);
        this.ndb = new Nilai(ndb);
        this.nfe = new Nilai(nfe);
        this.nbe = new Nilai(nbe);
    }

    getRata() {
        if (this.ndb.nilai === null || this.nfe.nilai === null || this.nbe.nilai === null) {
            return null;
        }
        return (this.ndb.nilai + this.nfe.nilai + this.nbe.nilai) / 3;
    }
}


// Child class 2: Konten Visual (ng, nv)
class KontenVisual extends Peserta {
    constructor(nama, umur, proglat, ng, nv) {
        super(nama, umur, proglat);
        this.ng = new Nilai(ng);
        this.nv = new Nilai(nv);
    }

    getRata() {
        if (this.ng.nilai === null || this.nv.nilai === null) {
            return null;
        }
        return (this.ng.nilai + this.nv.nilai) / 2;
    }
}


// =========================
// CONTOH PENGGUNAAN
// =========================

let pesertaWeb = new Web("Dina", 20, "Web Developer", 90, 85, 92);
console.log("Rata-rata Web:", pesertaWeb.getRata());


let pesertaKonten = new KontenVisual("Riko", 19, "Designer", 88, 75);
console.log("Rata-rata Konten:", pesertaKonten.getRata());


// Contoh nilai invalid:
let pesertaSalah = new Web("Budi", 21, "Web", 120, 80, -10);
// ndb = invalid → _nilai tetap null
console.log("Rata pesertaBudi:", pesertaSalah.getRata());  // null
