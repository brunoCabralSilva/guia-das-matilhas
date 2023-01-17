"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
;
var Token = /** @class */ (function () {
    function Token() {
        var _this = this;
        this.generateToken = function (email) {
            _this.payload = { email: email };
            var json = jsonwebtoken_1.default.sign(_this.payload, _this.jwtSecret);
            return json;
        };
        this.verify = function (token) {
            try {
                var ver = jsonwebtoken_1.default.verify(token, _this.jwtSecret);
                if (ver) {
                    return true;
                }
                return false;
            }
            catch (error) {
                return false;
            }
        };
        this.jwtConfig = {
            expiresIn: '1000min',
            algorithm: 'HS256',
        };
        this.payload = { email: '' };
        this.jwtSecret = process.env.JWT_SECRET || 'Isopotametemumdomsani618';
    }
    return Token;
}());
exports.default = Token;
;
