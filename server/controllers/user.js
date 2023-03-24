import { db } from '../db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

export const getUsers = (req, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE usuarios FROM usuarios WHERE usuarios.id = ?";

    db.query(q, [req.params.id], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json('Usuario Deletado');
    });
};