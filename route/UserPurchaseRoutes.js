const express = require('express');
const router = express.Router();

const {getPurchase, addUserPurchase} = require('../controller/UserPurchaseController');

router
.route('/')
.get(getPurchase)
.post(addUserPurchase);

module.exports = router
