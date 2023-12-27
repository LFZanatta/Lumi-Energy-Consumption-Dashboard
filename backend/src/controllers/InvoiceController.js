const invoiceService = require('../services/InvoiceService');
 
const getInvoiceData = async (req, res) => {
    try {
        const invoiceData = await invoiceService.getInvoiceData();
        res.json(invoiceData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Erro Interno do Servidor' });
    }
};

const downloadFile = (req, res) => {
    const fileName = req.params.filename;
    const filePath = invoiceService.downloadFile(fileName);
    res.download(filePath, (err) => {
        if (err) {
            console.error('Erro ao tentar baixar o arquivo : ', err);
            res.status(500).send('Erro Interno do Servidor');
        }
    });
};

module.exports = {
    getInvoiceData,
    downloadFile,
};
