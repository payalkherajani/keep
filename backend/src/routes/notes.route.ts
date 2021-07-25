import express from 'express';
import { addANewNote, getAllNotesOfLoggedInUser, updateNoteWithID } from '../controllers/notes.controller';

const router = express.Router();


router.post('/', addANewNote);
router.get('/', getAllNotesOfLoggedInUser);
router.put('/:noteID', updateNoteWithID);
export default router;