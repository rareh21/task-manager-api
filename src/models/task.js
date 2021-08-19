const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
    toDo: {
        type: String
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    daysToComplete: {
        type: Number
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Task = mongoose.model('Tasks', taskSchema);

module.exports = Task;