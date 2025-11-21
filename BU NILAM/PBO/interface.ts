// parent1
interface Animal {
    nama: string;
    suara(): void;
}

// parent2
interface Category  {
    deskripsi: string;
}

// child1
class Cat implements Animal, Category {
    nama: string;
    deskripsi: string;

    constructor(nama: string, deskripsi: string) {
        this.nama = nama;
        this.deskripsi = deskripsi;
    }
    suara(): void {
        console.log(`${this.nama} ${this.deskripsi} says Meow`);
    }
}

//instantiate
const cat = new Cat("Kitty", "Mamalia");
cat.suara(); // Output: Kitty Mamalia says Meow
