const express = require('express');
const GiftController = require('../controller/GiftController');

const router = express.Router();
const giftController = new GiftController();

router.post('/', giftController.registerGift);
router.get('/', giftController.getAllGifts);
router.get('/lists', giftController.returnFeatures);
router.post('/name', giftController.getGiftByName);
router.post('/update', giftController.updateGift);
router.delete('/delete/:name', giftController.deleteGift);

module.exports = router;