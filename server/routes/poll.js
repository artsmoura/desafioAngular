import express from 'express';
import { createPoll, getAllPolls, votePoll } from '../controllers/poll.js';

const router = express.Router();

router.get("/", getAllPolls);
router.post("/", createPoll);
// router.post("/updatepoll/:id", updatePoll);
router.post("/vote", votePoll);

export default router;