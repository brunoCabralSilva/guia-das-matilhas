const express = require('express');
const LoginController = require('../controller/LoginController');

const loginController = new LoginController();
const app = express();
const router = express.Router();

router.post('/', loginController.login);
router.post('/verify', loginController.verifyLogin);

module.exports = router;