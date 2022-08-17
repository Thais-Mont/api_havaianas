require('dotenv').config();
const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/produto.route');
const connectToDatabase = require('./src/database/database');

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/produtos', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
