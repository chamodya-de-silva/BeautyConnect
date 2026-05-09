const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalController');

router.get('/', professionalController.getProfessionals);
router.get('/:id', professionalController.getProfessionalById);

module.exports = router;
