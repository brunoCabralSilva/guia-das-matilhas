const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const login = require('./routes/login');
const gifts = require('./routes/gifts');
const authenticate = require('./routes/authenticate');
const app = express();

app.use(cors());
// app.use(headers);

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Funcionando na porta ${port}`));

app.use('/login', login);
app.use('/gifts', gifts);
app.use('/authenticate', authenticate);