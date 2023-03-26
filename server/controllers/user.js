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

export const createUser = (req, res) => {

    const q = "INSERT INTO usuarios (`nome`, `sobrenome`, `genero`, `cidade`, `estado`) values (?)";

    const values = [
        req.body.nome,
        req.body.sobrenome,
        req.body.genero,
        req.body.cidade,
        req.body.estado
    ];
    console.log(values);

    db.query(q, [values], (error) => {
        if (error) return res.json;

        return res.status(200).json('Usuário Cadastrado!');
    });

};

export const getUser = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE usuarios.id = (?)";

    db.query(q, [req.params.id], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const updateUser = (req, res) => {
    const q = `UPDATE usuarios 
                SET nome = '${req.body.nome}', sobrenome = '${req.body.sobrenome}', 
                genero= '${req.body.genero}', cidade = '${req.body.cidade}', estado = '${req.body.estado}' 
                WHERE id = ?`;

    db.query(q, [req.params.id], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};