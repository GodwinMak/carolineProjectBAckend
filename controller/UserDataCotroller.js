const UserData = require('../model/UserDataModel')

// @desc Get all transactions
// @route GET /api/v1/data
// @access Public


exports.getUserData = async(req,res, next) =>{
    try{
        const userData = await UserData.find();

        return res.status(200).json({
            success: true,
            count: userData.length,
            data: userData
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            error: "Sever Error"
        })
    }
}

// @desc  Add transactions
// @route POST /api/v1/data
// @access Public


exports.addUserData = async (req,res, next) =>{

    try {
        const { month , budget, goodsName, price } = req.body;

        const userData = await UserData.create(req.body);

        return res.status(201).json({
            success: true,
            data: userData
        })
        
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error: messages
            })
        }else{
            return res.status(500).json({
                success: false,
                error: "Sever Error"
            })
        }
    }
}

// @desc delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public


exports.deleteUserData = async (req,res, next) =>{
    try {
        const userData = await UserData.findById(req.params.id);
        if(!userData){
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }

        await userData.remove();
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                error: "Sever Error"
            })
    }
}