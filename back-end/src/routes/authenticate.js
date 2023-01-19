const express = require('express');
const Authenticate = require('../controller/AuthenticateController');

const app = express();

const authenticate = new Authenticate();

const router= express.Router();

router.post('/', authenticate.verifyLogin);

module.exports = router;