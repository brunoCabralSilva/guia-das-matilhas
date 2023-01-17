import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import login from './routes/login';
import gifts from './routes/gifts';

// import authenticate from './routes/authenticate';

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Funcionando na porta ${port}`));

app.use('/login', login);
app.use('/gifts', gifts);
// app.use('/authenticate', authenticate);
//
