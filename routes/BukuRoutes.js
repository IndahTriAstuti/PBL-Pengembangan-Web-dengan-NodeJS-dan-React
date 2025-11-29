const express = require('express');
const router = express.Router();
const BukuController = require('../controllers/BukuController');
const { validationBukuCreate, validateBukuUpdate } = require('../middleware/validation');

router.get('/', BukuController.getAll);
router.get('/:kode_buku', BukuController.getById);
router.post('/', validationBukuCreate, BukuController.create);
router.put('/:kode_buku', validateBukuUpdate, BukuController.update);
router.delete('/:kode_buku', BukuController.remove);

module.exports = router;
