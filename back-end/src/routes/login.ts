import express from 'express';
import LoginController from '../controller/LoginController';

const loginController = new LoginController();
const app = express();
const router = express.Router();

router.post('/', loginController.login);
router.post('/verify', loginController.verifyLogin);

export default router;