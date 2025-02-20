const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, 'Please add a make'],
        unique: {true : 'Make already exists'},
        trim: true,
        minlength: [2, 'Make can not be less than 2 characters'],
        maxlength: [50, 'Make can not be more than 50 characters'],
        match: [/^[a-zA-Z0-9]+$/, 'Make can only contain letters and numbers']
    },
    model: {
        type: String,
        required: [true, 'Please add a model'],
        unique: {true : "Model already exists"},
        trim: true,
        minlength: [2, 'Model can not be less than 2 characters'],
        maxlength: [50, 'Model can not be more than 50 characters'],
        match: [/^[a-zA-Z0-9]+$/, 'Model can only contain letters and numbers']
    },
    year: {
        type: Number,
        required: [true, 'Please add a year'],
        unique: {true : "Year already exists"},
        minlength: [4, 'Year can not be less than 4 characters'],
        maxlength: [4, 'Year can not be more than 4 characters'],
        match: [/^[0-9]+$/, 'Year can only contain numbers'],
        min: [1900, 'Year can not be less than 1900'],
        max: [new Date().getFullYear(), 'Year can not be greater than current year']
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Car', carsSchema);