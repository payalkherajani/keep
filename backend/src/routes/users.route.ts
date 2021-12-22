import express from 'express';
const router = express.Router();
import { signUp, signIn, getLoggedInUserInfo } from '../controllers/users.controller';
import auth from '../middlewares/auth.middleware';

router.post('/register', signUp);
router.post('/login', signIn);
router.get('/', auth, getLoggedInUserInfo);

export default router;