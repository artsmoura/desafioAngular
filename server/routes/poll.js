import express from 'express';
import { createPoll, getAllPolls } from '../controllers/poll.js';

const router = express.Router();

router.get("/", getAllPolls);
router.post("/", createPoll);
// router.post("/updatepoll/:id", updatePoll);

export default router;