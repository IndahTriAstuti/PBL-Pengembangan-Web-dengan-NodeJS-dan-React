let input = "5"; //ubah menjadi 5 agar berhasil

try {
    let angka = parseInt(input);

    if (isNaN(angka)) {
        throw new Error("Input harus berupa angka!");
}

    console.log("Kuadrat:", angka * angka);
} catch (error) {
    console.error("Terjadi kesalahan:", error.message);
} 