const UserPurchase = require('../model/UserPurchaseModel')


exports.getPurchase = async (req,res, next) =>{
    try{
        const userPurchase = await UserPurchase.find();

        return res.status(200).json({
            success: true,
            count: userPurchase.length,
            data: userPurchase
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            error: "Sever Error"
        })
    }
}

exports.addUserPurchase = async (req,res, next) =>{

    try {
        const { goodsName ,  price } = req.body;

        const userPurchase = await UserPurchase.create(req.body);

        return res.status(201).json({
            success: true,
            data: userPurchase
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