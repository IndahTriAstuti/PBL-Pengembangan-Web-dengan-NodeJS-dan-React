// Parent class
class Peserta {
  constructor(nama, umur, proglat) {
    this.nama = nama;
    this.umur = umur;
    this.proglat = proglat;
  }

  info() {
    console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Proglat: ${this.proglat}`);
  }
}

// Child class Web
class Web extends Peserta {
  constructor(nama, umur, proglat, ndb, nfe, nbe) {
    super(nama, umur, proglat);
    this.ndb = ndb;
    this.nfe = nfe;
    this.nbe = nbe;
  }

  rataWeb() {
    return (this.ndb + this.nfe + this.nbe) / 3;
  }
}

// Child class Konten Visual
class KontenVisual extends Peserta {
  constructor(nama, umur, proglat, ng, nv) {
    super(nama, umur, proglat);
    this.ng = ng;
    this.nv = nv;
  }

  rataKonten() {
    return (this.ng + this.nv) / 2;
  }
}

// =====================
// Contoh penggunaan
// =====================
let p1 = new Web("Dina", 20, "Web Developer", 90, 85, 92);
p1.info();
console.log("Rata-rata Web:", p1.rataWeb());

let p2 = new KontenVisual("Riko", 19, "Designer", 88, 75);
p2.info();
console.log("Rata-rata Konten Visual:", p2.rataKonten());
