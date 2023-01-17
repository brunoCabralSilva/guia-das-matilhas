"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var login_1 = __importDefault(require("./routes/login"));
var gifts_1 = __importDefault(require("./routes/gifts"));
// import authenticate from './routes/authenticate';
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var port = process.env.PORT || 3001;
app.listen(port, function () { return console.log("Funcionando na porta ".concat(port)); });
app.use('/login', login_1.default);
app.use('/gifts', gifts_1.default);
// app.use('/authenticate', authenticate);
//
