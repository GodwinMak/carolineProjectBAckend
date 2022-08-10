const Users = require("../model/UserModel");
const brcypt = require("bcrypt");


// @desc  sign user
// @route POST /api/v1/user
// @access Public

exports.signUp = async (req,res,next) =>{
    try {

        const {firstName, lastName, regNo, college, course, password, picture} = req.body;
        const regNoCheck = await Users.findOne({regNo});

        if(regNoCheck){
            return res.json({msg: " Registration Number already exist", status: false});
        }

        const hashedPassword = await brcypt.hash(password, 10);

        const user = await Users.create({
            firstName,
            lastName,
            regNo,
            college,
            course,
            picture,
            password: hashedPassword,
        });

        delete user.password;
        return res.json({status: true, user});

    } catch (error) {
        next(error);
    }
}

// @desc  login user
// @route POST /api/v1/user
// @access Public
exports.login = async (req, res, next) =>{

    try{
        const {regNo, password} = req.body;
        const user = await Users.findOne({regNo});
        if(!user){
            return res.json({msg: "incorrect regstration number", status: false});
        }
        const isPasswordValid = await brcypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.json({msg: "incorrect password", status: false});
        }
        delete user.password
        
        return res.json({status: true, user});
    }catch(error){
        next(error);
    }
}

// @desc  get user
// @route POST /api/v1/user
// @access Public
exports.getUsers = async (req, res, next)=>{
    try{
        const user = await Users.find();

        return res.status(200).json({
            success: true,
            count: user.length,
            data: user
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            error: "Sever Error"
        })
    }
    res.send("Get users")
}