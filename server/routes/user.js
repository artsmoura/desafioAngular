import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);

export default router;