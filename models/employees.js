const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        deflault: Date.now
    }
})

module.exports = mongoose.model('Employees', EmployeeSchema);