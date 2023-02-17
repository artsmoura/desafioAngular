import express from 'express';
import { createPoll, getAllPolls, votePoll, result, deletePoll } from '../controllers/poll.js';

const router = express.Router();

router.get("/", getAllPolls);
router.post("/", createPoll);
router.post("/vote", votePoll);
router.get("/results/:id", result);
router.delete("/:id", deletePoll);

export default router;