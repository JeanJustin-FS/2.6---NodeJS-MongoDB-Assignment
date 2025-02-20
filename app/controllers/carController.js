const Car = require('../models/cars');

const getAllCars = async (req, res) => {
    const cars = await Car.find({});
    res.status(200).json({ data: cars, success: true, message: `${req.method} - Request car approved` });
}   
const getCarById = async (req, res) => {
    const id = req.params.id;
    const car = await Car.findById(id);
    res.status(200).json({ id, success: true, message: `${req.method} - Request to car by ID` });
}

const createCar = async (req, res) => {
    const {car} = req.body;
try {
        const newCar = await Car.create(req.body);
        console.log("data >>>", newCar)
        res.status(200).json({ data: car, success: true, message: `${req.method} - Post successful ` });  
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

const updateCar = async (req, res) => {
    const id = req.params.id;
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });  
    console.log("data >>>", newCar)              
    res.status(200).json({ data: car, success: true, message: `${req.method} - Update Successful ` });
}
const deleteCar = async (req, res) => {
    const id = req.params.id;
    const car = await Car.findByIdAndDelete(id, req.body, { new: true });
    console.log("data >>>", car)
    res.status(200).json({ data: car, id, success: true, message: `${req.method} - Delete Successful by ID ` });
}

module.exports = { getAllCars, getCarById, createCar,updateCar, deleteCar};