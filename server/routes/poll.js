import express from 'express';
import { createPoll, getAllPolls, votePoll, result, deletePoll, getPoll, updatePoll } from '../controllers/poll.js';

const router = express.Router();

router.get("/", getAllPolls);
router.get("/:id", getPoll);
router.get("/results/:id", result);
router.put("/:id", updatePoll);
router.post("/", createPoll);
router.post("/vote", votePoll);
router.delete("/:id", deletePoll);

export default router;