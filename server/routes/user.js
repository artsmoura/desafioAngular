import express from 'express';
import { getUsersMen, getUsersUni, getUsersWom, login } from '../controllers/user.js';

const router = express.Router();

router.get("/allUsers", getUsersUni);
router.get("/usersMas", getUsersMen);
router.get("/usersFem", getUsersWom);
router.post("/login", login);

export default router;