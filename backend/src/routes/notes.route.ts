import express from 'express';
import { addANewNote, getAllNotesOfLoggedInUser } from '../controllers/notes.controller';

const router = express.Router();


router.post('/', addANewNote);
router.get('/', getAllNotesOfLoggedInUser);

export default router;