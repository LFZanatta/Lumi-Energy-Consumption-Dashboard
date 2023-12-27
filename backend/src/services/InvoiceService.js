const { Client } = require('pg');
require('dotenv').config();
const path = require('path');

const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

client.connect();

const getInvoiceData = async () => {
    try {
        const result = await client.query('SELECT * FROM invoice_data');
        return result.rows;
    } catch (error) {
        console.error(error.message);
        throw new Error('Erro ao buscar dados do banco');
    }
};

const downloadFile = (fileName) => {
    let filesPath = process.env.FILES_PATH;
    const filePath = path.join(filesPath, fileName);
    return filePath;
};

module.exports = {
    getInvoiceData,
    downloadFile,
};
