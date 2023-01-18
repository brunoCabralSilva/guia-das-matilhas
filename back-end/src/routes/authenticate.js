"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var AuthenticateController_1 = __importDefault(require("../controller/AuthenticateController"));
var app = express();
var authenticate = new AuthenticateController_1.default();
var router = express.Router();
router.post('/', authenticate.verifyLogin);
exports.default = router;
