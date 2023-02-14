import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT);
})


