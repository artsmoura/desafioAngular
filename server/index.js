import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import pollRouter from './routes/poll.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/users', userRouter);
app.use('/poll', pollRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT);
})


