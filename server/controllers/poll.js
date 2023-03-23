import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getAllPolls = (req, res) => {
    const q = "SELECT * FROM votacao";

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const getPoll = (req, res) => {
    const q = "SELECT * FROM votacao WHERE id = ?";

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const votePoll = (req, res) => {

    const q = "INSERT INTO votos(`usuario_id`, `votacao_id`) VALUES (?)";

    const values = [
        req.body.idUsuario,
        req.body.poll_id
    ];

    db.query(q, [values], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const result = (req, res) => {

    const q = `SELECT u.txt_nome_completo, ig.nomeIgreja
                FROM pollVotes as pv, tab_dados_usuario as u, igreja as ig
                WHERE pv.poll_id = (?) and pv.idUsuario = u.cod_usuario and u.idIgreja = ig.idIgreja;`;

    db.query(q, [req.params.id], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });

};

export const createPoll = (req, res) => {

    const q = "INSERT INTO votacao(`titulo`, `descricao`) VALUES (?)";

    const values = [
        req.body.titulo,
        req.body.descricao,
    ];


    db.query(q, [values], (error) => {
        if (error) return res.json;

        return res.status(200).json('Votação Criada!');
    });

};

export const deletePoll = (req, res) => {
    const q = `DELETE votacao, votos FROM votacao
                INNER JOIN
                votos ON votos.votacao_id = votacao.id 
                WHERE
                votacao.id = ?`;

    db.query(q, [req.params.id], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json('Votação Deletada!');
    });
};