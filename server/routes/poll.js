import express from 'express';
import { createPoll, getAllPolls, votePoll, result } from '../controllers/poll.js';

const router = express.Router();

router.get("/", getAllPolls);
router.post("/", createPoll);
// router.post("/updatepoll/:id", updatePoll);
router.post("/vote", votePoll);
router.get("/results/:id", result);

export default router;