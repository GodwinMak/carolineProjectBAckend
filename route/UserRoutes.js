const router = require("express").Router();
const {signUp, login, getUsers} = require('../controller/UserController')



router
    .route('/signup')
    .post(signUp);
    
router
    .route('/login')
    .post(login)

router
    .route('/getuser')
    .get(getUsers)    

module.exports= router;
