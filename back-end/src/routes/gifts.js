const express = require('express');
const GiftController = require('../controller/GiftController');

const router = express.Router();
const giftController = new GiftController();

router.get('/', giftController.getAllGifts);
router.post('/', giftController.registerGift);
router.get('/lists', giftController.returnFeatures);
router.post('/name', giftController.getGiftByName);
// router.delete('/delete', {});

module.exports = router;