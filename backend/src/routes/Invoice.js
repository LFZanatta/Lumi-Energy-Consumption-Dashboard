const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/InvoiceController');

router.get('/api/invoiceData', invoiceController.getInvoiceData);
router.get('/download/:filename', invoiceController.downloadFile);

module.exports = router;
