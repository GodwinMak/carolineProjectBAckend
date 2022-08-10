const UserReport = require('../model/UserReportModel')

exports.getReport = async(req,res, next) => {
    try{
        const userReport = await UserReport.find();

        return res.status(200).json({
            success: true,
            count: userReport.length,
            data: userReport
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            error: "Sever Error"
        })
    }
}

exports.addReport = async (req,res,next) =>{
    try {
        const { goodsName, price, amount, date } = req.body;

        const userReport = await UserReport.create(req.body);

        return res.status(201).json({
            success: true,
            data: userReport
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