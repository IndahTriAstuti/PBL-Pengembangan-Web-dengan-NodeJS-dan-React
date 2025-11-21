function formatNumber(n) {
    return Number.isInteger(n) ? n.toString() : n.toFixed(2);
}

const PI = 22 / 7;

function luasPersegi(sisi) {
    return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function luasLingkaran(jari) {
    return PI * jari * jari;
}

function luasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function kelilingPersegi(sisi) {
    return 4 * sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

function kelilingLingkaran(jari) {
    return 2 * PI * jari;
}

function kelilingSegitigaSamaSisi(sisi) {
    return 3 * sisi;
}

const data = {
    persegi: { sisi: 8 },
    persegiPanjang: { panjang: 9, lebar: 3 },
    lingkaran: { jari: 6 },
    segitigaSamaSisi: { alas: 6, tinggi: 4, sisi: 6 }
};

function tampilkanHeader() {
    console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====\n");
}

function tampilkanLuas() {
    console.log(">> Luas Bangun Datar <<\n");

    const luasP = luasPersegi(data.persegi.sisi);
    console.log(`Luas Persegi Dengan Sisi ${data.persegi.sisi} Adalah ${formatNumber(luasP)}`);

    const luasPP = luasPersegiPanjang(data.persegiPanjang.panjang, data.persegiPanjang.lebar);
    console.log(`Luas Persegi Panjang Dengan Panjang ${data.persegiPanjang.panjang} Dan Lebar ${data.persegiPanjang.lebar} Adalah ${formatNumber(luasPP)}`);

    const luasL = luasLingkaran(data.lingkaran.jari);
    console.log(`Luas Lingkaran Dengan Jari - jari ${data.lingkaran.jari} Adalah ${formatNumber(luasL)}`);

    const luasS = luasSegitiga(data.segitigaSamaSisi.alas, data.segitigaSamaSisi.tinggi);
    console.log(`Luas Segitiga Dengan Alas ${data.segitigaSamaSisi.alas} Dan Tinggi ${data.segitigaSamaSisi.tinggi} Adalah ${formatNumber(luasS)}`);

    console.log();
}

function tampilkanKeliling() {
    console.log(">> Keliling Bangun Datar <<\n");

    const kelP = kelilingPersegi(data.persegi.sisi);
    console.log(`Keliling Persegi Dengan Sisi ${data.persegi.sisi} Adalah ${formatNumber(kelP)}`);

    const kelPP = kelilingPersegiPanjang(data.persegiPanjang.panjang, data.persegiPanjang.lebar);
    console.log(`Keliling Persegi Panjang Dengan Panjang ${data.persegiPanjang.panjang} Dan Lebar ${data.persegiPanjang.lebar} Adalah ${formatNumber(kelPP)}`);

    const kelL = kelilingLingkaran(data.lingkaran.jari);
    console.log(`Keliling Lingkaran Dengan Jari - Jari ${data.lingkaran.jari} Adalah ${formatNumber(kelL)}`);

    const kelS = kelilingSegitigaSamaSisi(data.segitigaSamaSisi.sisi);
    console.log(`Keliling Segitiga Dengan Sisi ${data.segitigaSamaSisi.sisi} Adalah ${formatNumber(kelS)}`);

    console.log();
}

function main() {
    tampilkanHeader();
    tampilkanLuas();
    tampilkanKeliling();
}

main();
