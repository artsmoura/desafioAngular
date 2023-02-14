import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getUsersUni = (req, res) => {
    const q = "SELECT u.cod_usuario, u.txt_nome_completo, ig.nomeIgreja FROM tab_dados_usuario as u, inscricao as i, igreja as ig WHERE i.idUsuario = u.cod_usuario and i.idEvento = 33 and u.idIgreja = ig.idIgreja and i.excluido != 1";

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const getUsersMen = (req, res) => {
    const q = `SELECT u.cod_usuario, u.txt_nome_completo, ig.nomeIgreja 
                FROM tab_dados_usuario as u, inscricao as i, igreja as ig
                WHERE i.idUsuario = u.cod_usuario and i.idEvento = 33 and u.idIgreja = ig.idIgreja and i.excluido != 1 and u.bln_sexo = 1`;

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const getUsersWom = (req, res) => {
    const q = `SELECT u.cod_usuario, u.txt_nome_completo, ig.nomeIgreja 
                FROM tab_dados_usuario as u, inscricao as i, igreja as ig
                WHERE i.idUsuario = u.cod_usuario and i.idEvento = 33 and u.idIgreja = ig.idIgreja and i.excluido != 1 and u.bln_sexo = 0`;

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const login = (req, res) => {
    const q = "SELECT * FROM tab_usuario WHERE txt_email_usuario = ? OR txt_usuario = ?";

    db.query(q, [req.body.txt_email_usuario, req.body.txt_usuario], (error, data) => {
        if (error) return res.json(error);
        if (data.length === 0) return res.status(404).json('Usuario não encontrado');

        const checkPassword = bcrypt.compare(req.body.txt_senha, data[0].txt_senha);

        if (!checkPassword) return res.status(400).json("Usuario ou senha incorretos");

        const token = jwt.sign({
            id: data[0].cod_usuario
        }, process.env.JWTPRIVATEKEY, { expiresIn: "12h" });

        const { txt_senha, ...other } = data[0];

        res
            .cookie('access_token', token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
            .status(200)
            .json(other);

    });
};