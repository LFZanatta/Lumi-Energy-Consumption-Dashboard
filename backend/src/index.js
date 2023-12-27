const app = require('./services/server') 
const cors = require('cors');
const dotenv = require('dotenv');
const invoiceRoutes = require('./routes/Invoice')

dotenv.config();

const port = process.env.PORT;

app.use(cors());
app.use('/', invoiceRoutes);

app.listen(port, () => {
    console.log(`Server esta rodando na porta  ${port}`);
});
