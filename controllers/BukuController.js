const pool = require('../config/db')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const [rows] = await pool.execute('SELECT * FROM buku ORDER BY kode_buku DESC')
            res.json(rows)
        }catch (err) {
            next(err)
        }
    },

    getById: async (req, res, next) => {
        try {
            const kode_buku = parseInt(req.params.kode_buku, 10);
            const [rows] = await pool.execute('SELECT * FROM buku where kode_buku = ?', [kode_buku])
            if (rows.length === 0) return res.status(404).json({
                message: 'Data Buku Tidak Ditemukan'
            })
            res.json(rows[0])
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const { judul, pengarang, penerbit, harga } = req.body
            const [result] = await pool.execute(
                'INSERT INTO buku (judul, pengarang, penerbit, harga) VALUES (?, ?, ?, ?)',
                [judul, pengarang, penerbit, harga]
            )
            res.status(201).json({kode_buku: result.insertId, 
                judul, 
                pengarang, 
                penerbit, 
                harga})
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const kode_buku = parseInt(req.params.kode_buku, 10)
            const { judul, pengarang, penerbit, harga} = req.body
            const fields = []
            const values = []

            if (judul !== undefined) {fields.push('judul=?')
                values.push(judul)
            }
            if (pengarang !== undefined) {fields.push('pengarang=?')
                values.push(pengarang)
            }
            if (penerbit !== undefined) {fields.push('penerbit=?')
                values.push(penerbit)
            }
            if (harga !== undefined) {fields.push('harga=?')
                values.push(harga)
            }

            if (fields.length === 0) return res.status(400).json({ message: 'Nothing to update' });

            values.push(kode_buku);
            const sql = `UPDATE buku SET ${fields.join(', ')} WHERE kode_buku=?`;
            const [result] = await pool.execute(sql, values);

            if (result.affectedRows === 0) return res.status(404).json({ message: 'Data buku tidak ditemukan' });

            res.json({ message: 'Data buku berhasil diperbarui' });
        } catch (err) {
            next(err);
        }
    },

    remove: async (req, res, next) => {
        try {
            const kode_buku = parseInt(req.params.kode_buku, 10);
            const [result] = await pool.execute('DELETE FROM buku WHERE kode_buku=?', [kode_buku]);

            if (result.affectedRows === 0) return res.status(404).json({ message: 'Data buku tidak ditemukan.' });

            res.json({ message: 'Data buku berhasil dihapus.' });
        } catch (err) {
            next(err);
        }
    }
}
            

        