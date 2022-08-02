const Mongoose = require('mongoose')
const taskSchema = new Mongoose.Schema({
    taskname:{
        type:String,
    },
    status:{
        type:String,
    },
    createdAt: {
        type: String,
    },
    createdById:{
        type:Mongoose.Schema.ObjectId,
        ref:"User",
    },
    dueDate:{
        type: String,
    },
    desp:{
        type: String
    },
    remarks: []
})
module.exports = Mongoose.model("Task", taskSchema);