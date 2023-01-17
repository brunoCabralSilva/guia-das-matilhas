"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var GiftController_1 = __importDefault(require("../controller/GiftController"));
var router = express.Router();
var giftController = new GiftController_1.default();
router.get('/', giftController.getAllGifts);
router.post('/', giftController.registerGift);
router.get('/lists', giftController.returnFeatures);
router.post('/name', giftController.getGiftByName);
// router.delete('/delete', {});
exports.default = router;
