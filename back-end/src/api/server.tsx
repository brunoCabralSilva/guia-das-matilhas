const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Funcionando na porta ${port}`));
