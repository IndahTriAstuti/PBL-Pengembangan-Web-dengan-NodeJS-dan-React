// PARENT CLASS
class Toko {
  constructor(brand, hargaSatuan, jumlah) {
    this.brand = brand;
    this.hargaSatuan = hargaSatuan;
    this.jumlah = jumlah;
  }

  totalBelanja() {
    return this.hargaSatuan * this.jumlah;
  }

  hitungDiskon() {
    const total = this.totalBelanja();

    if (total < 5000000) return 0;
    else if (total < 8000000) return 5;
    else if (total < 12000000) return 10;
    else if (total < 15000000) return 15;
    else return 20;
  }

  totalAkhir() {
    const d = this.hitungDiskon();
    return this.totalBelanja() - (this.totalBelanja() * d) / 100;
  }

  tampilkanInfo() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Harga satuan: Rp ${this.hargaSatuan}`);
    console.log(`Jumlah beli: ${this.jumlah} unit`);
    console.log("Total belanja:", this.totalBelanja());
    console.log("Diskon:", this.hitungDiskon() + "%");
    console.log("Total akhir:", this.totalAkhir());
    console.log("----------------------------------");
  }
}

// CHILD CLASS
class Asus extends Toko {
  constructor(hargaSatuan, jumlah) {
    super("Asus", hargaSatuan, jumlah);
  }
}

class Lenovo extends Toko {
  constructor(hargaSatuan, jumlah) {
    super("Lenovo", hargaSatuan, jumlah);
  }
}

class Acer extends Toko {
  constructor(hargaSatuan, jumlah) {
    super("Acer", hargaSatuan, jumlah);
  }
}

let asus = new Asus(7000000, 3);
let lenovo = new Lenovo(2500000, 2);
let acer = new Acer(1500000, 4);

asus.tampilkanInfo();
lenovo.tampilkanInfo();
acer.tampilkanInfo();
