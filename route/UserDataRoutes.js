const express = require('express');
const router = express.Router();

const {getUserData, addUserData, deleteUserData} = require('../controller/UserDataCotroller')


router
.route('/')
.get(getUserData)
.post(addUserData);

router
    .route('/:id')
    .delete(deleteUserData);

module.exports = router