const Manufacturer = require('../models/Manufacturers');

// Get all engine types
const getAllEngineManufacturers = async (req, res) => {
        const manufacturers = await Manufacturer.find({});
        res.status(200).json({data: manufacturers, suceess: true, message:`${req.method} - Request Engine type approved` });
        
    }
    
// Get a single engine type by ID
const getEngineManufacturerById = async (req, res) => {
    try {
        const engineManufacturer = await engineManufacturer.findById(req.params.id);
        if (!engineManufacturer) {
            return res.status(404).json({ message: 'Engine Manufacturer not found' });
        }
        res.status(200).json(engineManufacturer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const createEngineManufacturer = async (req, res) => {
    const {manufacturer} = req.body;
try {
        const newManufacturer = await Manufacturer.create(req.body);
        console.log("data >>>", newManufacturer)
        res.status(200).json({ data: manufacturer, success: true, message: `${req.method} - Post successful ` });  
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

// Update an existing engine Manufacturer
const updateEngineManufacturer = async (req, res) => {
    try {
        const engineManufacturer = await engineManufacturer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!engineManufacturer) {
            return res.status(404).json({ message: 'Engine Manufacturer not found' });
        }
        res.status(200).json(engineManufacturer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Delete an engine Manufacturer
const deleteEngineManufacturer = async (req, res) =>{
    try {
        const engineManufacturer = await engineManufacturer.findByIdAndDelete(req.params.id);
        if (!engineManufacturer) {
            return res.status(404).json({ message: 'Engine Manufacturer not found' });
        }
        res.status(200).json({ message: 'Engine Manufacturer deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllEngineManufacturers,
    getEngineManufacturerById,
    createEngineManufacturer,
    updateEngineManufacturer,
    deleteEngineManufacturer,
};