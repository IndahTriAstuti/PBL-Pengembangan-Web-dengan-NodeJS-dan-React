function parseRupiah(value) {
  if (!value) return NaN;
  return Number(String(value).replace(/[^\d]/g, ""));
}

const validationBukuCreate = (req, res, next) => {
  const { judul, pengarang, penerbit, harga } = req.body;
  const errors = [];

  if (!judul || judul.trim().length < 2) errors.push('Judul wajib minimal 2 karakter');
  if (!pengarang || pengarang.trim().length < 2) errors.push('Pengarang wajib diisi');
  if (!penerbit || penerbit.trim().length < 2) errors.push('Penerbit wajib diisi');

  if (harga !== undefined) {
    const h = parseRupiah(harga);
    if (Number.isNaN(h) || h < 0) errors.push('Harga harus angka dan >= 0');
  }

  if (errors.length) return res.status(400).json({ errors });
  next();
};

const validateBukuUpdate = (req, res, next) => {
  const { judul, pengarang, penerbit, harga } = req.body;
  const errors = [];

  // hanya validasi field yang dikirim (partial update)
  if (judul !== undefined && String(judul).trim().length < 2)
    errors.push('Judul minimal 2 karakter');

  if (pengarang !== undefined && String(pengarang).trim().length < 2)
    errors.push('Pengarang minimal 2 karakter');

  if (penerbit !== undefined && String(penerbit).trim().length < 2)
    errors.push('Penerbit minimal 2 karakter');

  if (harga !== undefined) {
    const h = parseRupiah(harga);
    if (Number.isNaN(h) || h < 0) errors.push('Harga harus angka dan >= 0');
  }

  if (errors.length) return res.status(400).json({ errors });
  next();
};

module.exports = {
  validationBukuCreate,
  validateBukuUpdate
};
