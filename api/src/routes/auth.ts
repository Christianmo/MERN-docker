import { Router } from 'express'
import { signIn } from '../controllers/auth';

const api = Router();

api.route('/login').post(signIn);

export default api;