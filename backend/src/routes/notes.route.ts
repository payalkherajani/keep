import express from 'express';
import { addANewNote } from '../controllers/notes.controller';
const router = express.Router();


router.post('/', addANewNote);
export default router;