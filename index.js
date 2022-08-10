const express = require('express');
const colors = require('colors');
const morgan = require("morgan")
const cors = require('cors');

const mongoose = require('mongoose');

const userRoutes = require('./route/UserRoutes')
const userDataRouter = require('./route/UserDataRoutes');

const userPurchaseRoutes = require('./route/UserPurchaseRoutes');
const userReportRoutes = require('./route/UserReportRoute');

const bodyParser = require("body-parser");




const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/data', userDataRouter);
app.use('/api/v1/purchase', userPurchaseRoutes);
app.use('/api/v1/report', userReportRoutes);



app.get('/', (req, res) => {
    res.send('Hello, World! how are you');
});



const PORT = process.env.PORT || 5001

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("DB connection Successfull")
}).catch((error)=>{
    console.log(error.message)
});



app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));