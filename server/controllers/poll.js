import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getAllPolls = (req, res) => {
    const q = "SELECT * FROM polls";

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const getPoll = (req, res) => {
    const q = "SELECT * FROM polls WHERE idPoll = ?";

    db.query(q, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const votePoll = (req, res) => {
    const q = "UPDATE polls SET votes = JSON_SET(votes, '$[?]', JSON_EXTRACT(votes, '$[?]') + 1) WHERE id = ?";

    const values = [];

    db.query(q, [values], (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data);
    });
};

export const result = (req, res) => {
    const q = "SELECT options, votes FROM polls WHERE id = ?";

    db.query(q, req.query.id, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json;
    });

};

export const createPoll = (req, res) => {

    console.log(req);

    const q = "INSERT INTO polls(`title`, `description`, `gendeer`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.description,
        req.body.gender
    ];


    db.query(q, [values], (error) => {
        if (error) return res.json;

        return res.status(200).json('Votação Criada!');
    });

};