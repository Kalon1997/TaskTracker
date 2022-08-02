const mongoose = require('mongoose')
module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }
        await mongoose.connect(
            process.env.MONGOURL,
            connectionParams
        )
        console.log("db connected");
    }
    catch(err)
    {
        console.log("db NOT connected");
    }
}