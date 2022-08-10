const express = require('express');
const router = express.Router();

const {getReport, addReport} = require('../controller/UserReportController');

router
.route('/')
.get(getReport)
.post(addReport);

module.exports = router