const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema(
    {
        make: {
            type: String,
            required: {true :'Please add a make'},
            trim: true ,
            unique: {true : 'Make already exists'},
            match: [/^[a-zA-Z0-9]+$/, 'Make can only contain letters and numbers'],
            minlength: [2, 'Make can not be less than 2 characters'],
            maxlength: [50, 'Make can not be more than 50 characters']

        },
        model: {
            type: String,
            required: {true: 'Please add a model'},
            trim: true,
            unique: {true : 'Model already exists'},
            // match: [/^[a-zA-Z0-9]+$/, 'Model can only contain letters and numbers'],
            minlength: [2, 'Model can not be less than 2 characters'],
            maxlength: [50, 'Model can not be more than 50 characters']

        },
        year: {
            type: Number,
            required: {true : 'Please add a year'},
            trim: true, 
            unique: {true : 'Year already exists'}, 
            minlength: [4, 'Year can not be less than 4 characters'],
            maxlength: [4, 'Year can not be more than 4 characters'],
            match: [/^[0-9]+$/, 'Year can only contain numbers'],
            min: [1900, 'Year can not be less than 1900'],
            max: [new Date().getFullYear(), 'Year can not be greater than current year']
        },
        engineManufacturer: {
            type: String,
            ref: 'EngineManufacturer',
            required: {true: 'Please add an engine manufacturer'},
            trim: true,
            unique: {true : 'Engine type already exists'},
            match : [/^[a-zA-Z0-9]+$/, 'Engine type can only contain letters and numbers'],
            minlength: [2, 'Engine type can not be less than 2 characters'],
            maxlength: [50, 'Engine type can not be more than 50 characters']
        },
        created_at: {
            type: Date,
            default: Date.now
            
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('EngineManufacturer', engineSchema);