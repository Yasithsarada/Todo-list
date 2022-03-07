const mongoose = require('mongoose');

const Schema = mongoose.Schema



const TaskSchema = new Schema ({
    Tname : {
        type : String
    },
    date : {
        type : Date
    }

})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task ;



