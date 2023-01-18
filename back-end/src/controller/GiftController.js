"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GiftService_1 = __importDefault(require("../service/GiftService"));
var GiftController = /** @class */ (function () {
    function GiftController() {
        var _this = this;
        this.getGiftByName = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var nameOriginal, query, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nameOriginal = req.body.nameOriginal;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.service.getGiftByName(nameOriginal)];
                    case 2:
                        query = _a.sent();
                        if (query.length > 0) {
                            console.log(query);
                            return [2 /*return*/, res.status(201).json({ gift: query })];
                        }
                        return [2 /*return*/, res.status(404).json({ gift: false })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ gift: false })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getAllGifts = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var query, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.service.getAllGifts()];
                    case 1:
                        query = _a.sent();
                        if (query) {
                            return [2 /*return*/, res.status(201).json(query)];
                        }
                        return [2 /*return*/, res.status(404).json(false)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(404).json(false)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.registerGift = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var gift, query, objReturn, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gift = {
                            namePtBr: req.body.namePtBr,
                            nameOriginal: req.body.nameOriginal,
                            rank: req.body.rank,
                            font: req.body.font,
                            belong: req.body.belong,
                            textPtbr: req.body.textPtbr,
                            systemPtbr: req.body.systemPtbr,
                            note: req.body.note,
                            textOriginal: req.body.textOriginal,
                            systemOriginal: req.body.systemOriginal,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.service.registerGift(gift)];
                    case 2:
                        query = _a.sent();
                        if (query) {
                            objReturn = {
                                id: query[0].gift_id,
                                name: query[0].gift_name,
                            };
                            return [2 /*return*/, res.status(201).json(objReturn)];
                        }
                        return [2 /*return*/, res.status(201).json(false)];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ register: error_3 })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.returnFeatures = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var query, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.service.returnFeatures()];
                    case 1:
                        query = _a.sent();
                        if (query) {
                            return [2 /*return*/, res.status(201).json(query)];
                        }
                        return [2 /*return*/, res.status(404).json({
                                queryBooks: [],
                                queryBreeds: [],
                                queryAuspices: [],
                                queryTrybes: [],
                            })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(404).json({
                                queryBooks: [],
                                queryBreeds: [],
                                queryAuspices: [],
                                queryTrybes: [],
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.service = new GiftService_1.default();
    }
    return GiftController;
}());
exports.default = GiftController;
;
