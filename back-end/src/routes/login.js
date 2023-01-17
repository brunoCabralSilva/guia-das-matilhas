"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LoginController_1 = __importDefault(require("../controller/LoginController"));
var loginController = new LoginController_1.default();
var app = (0, express_1.default)();
var router = express_1.default.Router();
router.post('/', loginController.login);
router.post('/verify', loginController.verifyLogin);
exports.default = router;
