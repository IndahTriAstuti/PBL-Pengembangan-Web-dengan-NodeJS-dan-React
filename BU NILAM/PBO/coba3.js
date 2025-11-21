class Peserta {
  constructor(nama, umur, proglat) {
    this.nama = nama;
    this.umur = umur;
    this.proglat = proglat;

    this.web = null;
    this.kv = null;
  }

  info() {
    console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Proglat: ${this.proglat}`);
  }
}

class Web {
  constructor(ndb, nfe, nbe) {
    this.ndb = ndb;
    this.nfe = nfe;
    this.nbe = nbe;
  }

  rata() {
    return (this.ndb + this.nfe + this.nbe) / 3;
  }
}

class KontenVisual {
  constructor(ng, nv) {
    this.ng = ng;
    this.nv = nv;
  }

  rata() {
    return (this.ng + this.nv) / 2;
  }
}

// =====================
// PEMAKAIAN
// =====================
let p1 = new Peserta("Dina", 20, "Multitalent");

// Tambah nilai Web
p1.web = new Web(90, 85, 92);

// Tambah nilai Konten Visual
p1.kv = new KontenVisual(80, 95);

// Tampilkan
p1.info();
console.log("Rata Web:", p1.web.rata());
console.log("Rata Konten Visual:", p1.kv.rata());
