import express from 'express';
import { addANewNote, deleteNote, getAllNotesOfLoggedInUser, updateNoteWithID } from '../controllers/notes.controller';

const router = express.Router();


router.post('/', addANewNote);
router.get('/', getAllNotesOfLoggedInUser);
router.put('/:noteID', updateNoteWithID);
router.delete('/:noteID', deleteNote);
export default router;