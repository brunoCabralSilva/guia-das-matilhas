"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var connection_1 = __importDefault(require("./connection"));
;
;
var GiftModel = /** @class */ (function () {
    function GiftModel() {
        var _this = this;
        this.getGiftByName = function (name) { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM gifts WHERE gift_nameOriginal = ?', [name.toLowerCase()])];
                    case 1:
                        query = (_a.sent())[0];
                        return [2 /*return*/, query];
                }
            });
        }); };
        this.getGiftById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM gifts WHERE gift_id = ?', [id])];
                    case 1:
                        query = (_a.sent())[0];
                        return [2 /*return*/, query];
                }
            });
        }); };
        this.getFontByGift = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var fonts, namefonts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM gifts_font WHERE gift_id = ?', [id])];
                    case 1:
                        fonts = (_a.sent())[0];
                        return [4 /*yield*/, fonts.map(function (fnt) { return __awaiter(_this, void 0, void 0, function () {
                                var searchfont;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM fonts WHERE font_id = ?', [fnt.font_id])];
                                        case 1:
                                            searchfont = (_a.sent())[0];
                                            return [2 /*return*/, searchfont];
                                    }
                                });
                            }); })];
                    case 2:
                        namefonts = _a.sent();
                        return [2 /*return*/, namefonts];
                }
            });
        }); };
        this.getBelongByGift = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var belongs, nameBelongs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [id])];
                    case 1:
                        belongs = (_a.sent())[0];
                        return [4 /*yield*/, belongs.map(function (bel) { return __awaiter(_this, void 0, void 0, function () {
                                var searchBelong;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM belongs WHERE belong_id = ?', [bel.belong_id])];
                                        case 1:
                                            searchBelong = (_a.sent())[0];
                                            return [2 /*return*/, searchBelong[0]];
                                    }
                                });
                            }); })];
                    case 2:
                        nameBelongs = _a.sent();
                        return [2 /*return*/, nameBelongs];
                }
            });
        }); };
        this.getAllGifts = function () { return __awaiter(_this, void 0, void 0, function () {
            var query, fontsBelongs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM gifts')];
                    case 1:
                        query = (_a.sent())[0];
                        return [4 /*yield*/, Promise.all(query.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var belongs, nameBelongs, objGift, _a;
                                var _b;
                                var _this = this;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [item.gift_id])];
                                        case 1:
                                            belongs = (_c.sent())[0];
                                            return [4 /*yield*/, belongs.map(function (bel) { return __awaiter(_this, void 0, void 0, function () {
                                                    var searchBelong;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM belongs WHERE belong_id = ?', [bel.belong_id])];
                                                            case 1:
                                                                searchBelong = (_a.sent())[0];
                                                                return [2 /*return*/, searchBelong[0]];
                                                        }
                                                    });
                                                }); })];
                                        case 2:
                                            nameBelongs = _c.sent();
                                            _a = [__assign({}, item)];
                                            _b = { belongs: nameBelongs };
                                            return [4 /*yield*/, this.getFontByGift(item.gift_id)];
                                        case 3:
                                            objGift = __assign.apply(void 0, _a.concat([(_b.fonts = _c.sent(), _b)]));
                                            return [2 /*return*/, objGift];
                                    }
                                });
                            }); }))];
                    case 2:
                        fontsBelongs = _a.sent();
                        return [2 /*return*/, fontsBelongs];
                }
            });
        }); };
        this.registerBelong = function (idGift, belongs) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(belongs.map(function (belong) { return __awaiter(_this, void 0, void 0, function () {
                            var id, query;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM belongs WHERE belong_name = ?', [belong])];
                                    case 1:
                                        id = (_a.sent())[0];
                                        return [4 /*yield*/, this.connection.execute('INSERT INTO gifts_belong (gift_id, belong_id) VALUES (?, ?)', [idGift, id[0].belong_id])];
                                    case 2:
                                        query = (_a.sent())[0];
                                        return [2 /*return*/, ({
                                                'belong': query.insertId,
                                            })];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.registerFont = function (id, fonts) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(fonts.map(function (font) { return __awaiter(_this, void 0, void 0, function () {
                            var book, page, edition, query, query2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        book = font.book, page = font.page, edition = font.edition;
                                        return [4 /*yield*/, this.connection.execute('INSERT INTO fonts (font_book, font_page, font_edition) VALUES (?, ?, ?)', [book, page, edition])];
                                    case 1:
                                        query = (_a.sent())[0];
                                        return [4 /*yield*/, this.connection.execute('INSERT INTO gifts_font (gift_id, font_id) VALUES (?, ?)', [id, query.insertId])];
                                    case 2:
                                        query2 = (_a.sent())[0];
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.registerGift = function (gift) { return __awaiter(_this, void 0, void 0, function () {
            var namePtBr, nameOriginal, rank, font, belong, textPtBr, systemPtBr, note, textOriginal, systemOriginal, query, foundGift;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        namePtBr = gift.namePtBr, nameOriginal = gift.nameOriginal, rank = gift.rank, font = gift.font, belong = gift.belong, textPtBr = gift.textPtBr, systemPtBr = gift.systemPtBr, note = gift.note, textOriginal = gift.textOriginal, systemOriginal = gift.systemOriginal;
                        return [4 /*yield*/, this.connection.execute('INSERT INTO gifts (gift_namePtBr, gift_nameOriginal, gift_rank, gift_textPtBr, gift_systemPtBr, gift_note, gift_textOriginal, gift_systemOriginal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [namePtBr.toLowerCase(), nameOriginal.toLowerCase(), rank, textPtBr, systemPtBr, note, textOriginal, systemOriginal])];
                    case 1:
                        query = (_a.sent())[0];
                        this.registerBelong(query.insertId, belong);
                        this.registerFont(query.insertId, font);
                        return [4 /*yield*/, this.getGiftById(query.insertId)];
                    case 2:
                        foundGift = _a.sent();
                        return [2 /*return*/, foundGift];
                }
            });
        }); };
        this.returnFeatures = function () { return __awaiter(_this, void 0, void 0, function () {
            var queryBooks, queryBreeds, queryAuspices, queryTrybes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.execute('SELECT * FROM belongs')];
                    case 1:
                        queryBooks = (_a.sent())[0];
                        return [4 /*yield*/, this.connection.execute('SELECT * FROM breeds')];
                    case 2:
                        queryBreeds = (_a.sent())[0];
                        return [4 /*yield*/, this.connection.execute('SELECT * FROM auspices')];
                    case 3:
                        queryAuspices = (_a.sent())[0];
                        return [4 /*yield*/, this.connection.execute('SELECT * FROM trybes')];
                    case 4:
                        queryTrybes = (_a.sent())[0];
                        return [2 /*return*/, {
                                queryBooks: queryBooks,
                                queryBreeds: queryBreeds,
                                queryAuspices: queryAuspices,
                                queryTrybes: queryTrybes,
                            }];
                }
            });
        }); };
        this.connection = connection_1.default;
    }
    return GiftModel;
}());
exports.default = GiftModel;
;
