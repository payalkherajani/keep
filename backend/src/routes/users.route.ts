import express from 'express';
const router = express.Router();
const { signUp, signIn, getLoggedInUserInfo } = require('../controllers/users.controller');

router.post('/register', signUp);
router.post('/login', signIn);
router.get('/', getLoggedInUserInfo);

export default router;