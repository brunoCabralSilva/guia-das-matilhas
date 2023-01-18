const express = require('express');
import Authenticate from "../controller/AuthenticateController";

const app = express();

const authenticate = new Authenticate();

const router= express.Router();

router.post('/', authenticate.verifyLogin);

export default router;