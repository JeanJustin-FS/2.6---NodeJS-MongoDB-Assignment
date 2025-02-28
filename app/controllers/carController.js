const Cars = require('../models/Cars');

// Get all cars
const getAllCars = async (req, res) => {
    console.log(">>>", req.query)
    const cars = await Cars.find({});
    res.status(200).json({ data: cars, success: true, message: `${req.method} - Request car approved` });
}  

// Get a single car by ID
const getCarById = async (req, res) => {
    const id = req.params.id;
    try {
    const car = await Cars.findById(req.params.id);
    res.status(200).json({ id, success: true, message: `${req.method} - Request to car by ID` });
} catch (error) {
    if (error.name === 'ValidationError') {
        console.log(`Error Validating: ${error.message}`);
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({ success: false, error: messages });
    }
    else {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ success: false, error: 'Server Error' });
    
    }
} 
};

// Create a new car
const createCar = async (req, res) => {
    const car = req.body;
    console.log(">>>", req.body)
try {
        const {newCar} = await Cars.create(req.body);
        console.log("data >>>", newCar)
        res.status(200).json({ data: newCar , success: true, message: `${req.method} - Post successful ` });  
} catch (error) {
    if (error.name === 'ValidationError') {
        console.log(`Error Validating: ${error.message}`);
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({ success: false, error: messages });
    }
    else {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ success: false, error: 'Server Error' });
    
    }
} 
};

// Update an existing car by ID
const updateCar = async (req, res) => {
    const id = req.params.id;
    console.log(">>>", req.body)

    try {
    const {newCar} = await Cars.findByIdAndUpdate(id,req.body, { new: true });  
    console.log("data >>>", newCar)              
    res.status(200).json({ data: newCar, success: true, message: `${req.method} - Update Successful ` });
} catch (error) {
    if (error.name === 'ValidationError') {
        console.log(`Error Validating: ${error.message}`);
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({ success: false, error: messages });
    }
    else {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ success: false, error: 'Server Error' });
    
    }
} 
};

// Delete an existing car
const deleteCar = async (req, res) => {
    const id = req.params.id;
        console.log(">>>", req.body)

    try {
    const car = await Cars.findByIdAndDelete(id, req.body, { new: true });
    console.log("data >>>", car)
    res.status(200).json({ data: car, id, success: true, message: `${req.method} - Delete Successful by ID ` });
} catch (error) {
    if (error.name === 'ValidationError') {
        console.log(`Error Validating: ${error.message}`);
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({ success: false, error: messages });
    }
    else {
        console.log(`Error: ${error.message}`);
        return res.status(500).json({ success: false, error: 'Server Error' });
    
    }
} 
};

// Export all methods
module.exports = { getAllCars, getCarById, createCar,updateCar, deleteCar};