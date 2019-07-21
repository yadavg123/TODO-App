// REQUIRING MONGOOSE
const mongoose = require('mongoose');

// CREATING SCHEMA
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

// SETTING NAME IN DB
const Task=mongoose.model('Task',taskSchema);

// EXPORTING IT
module.exports=Task;