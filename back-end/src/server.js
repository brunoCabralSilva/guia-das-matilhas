const express = require('express');
const getAll = require('./getAll');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Funcionando na porta ${port}`));

app.get('/', async(req, res) => {
    const query = await getAll();
    return res.status(201).json(query);
} );
