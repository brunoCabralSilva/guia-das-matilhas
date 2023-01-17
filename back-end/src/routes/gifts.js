const express = require('express');
const app = express();

const router= express.Router();

router.get('/', {});
router.post('/', {});
router.get('/lists', {});
router.post('/name', {});
router.delete('/delete', {});

module.exports = router;