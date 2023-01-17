const express = require('express');
const app = express();
import GiftController from '../controller/GiftController';

const router= express.Router();

const giftController = new GiftController();

router.get('/', giftController.getAllGifts);
router.post('/', giftController.registerGift);
// router.get('/lists', {});
router.post('/name', giftController.getGiftByName);
// router.delete('/delete', {});

export default router;