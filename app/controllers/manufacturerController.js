const Manufacturers = require('../models/Manufacturers');

// Get all engine types
const getAllEngineManufacturers = async (req, res) => {
    console.log(">>>", req.query)
        const manufacturers = await Manufacturers.find({});
        res.status(200).json({data: manufacturers, suceess: true, message:`${req.method} - Request Engine type approved` });
        
    }
    
// Get a single engine type by ID
const getEngineManufacturerById = async (req, res) => {
    const id = req.params.id;
    try {
        const manufacturers = await Manufacturers.findById(req.params.id);
        res.status(200).json({ id, success: true, message: `${req.method} - Request to engine by ID` });
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

// Create a new engine Manufacturer
const createEngineManufacturer = async (req, res) => {
    const manufacturer = req.body;
    console.log(">>>", req.body)
try {
        const newManufacturer = await Manufacturers.create(req.body);
        console.log("data >>>", newManufacturer)
        res.status(200).json({ data: newManufacturer, success: true, message: `${req.method} - Post successful ` });  
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

// Update an existing engine Manufacturer by ID
// const updateEngineManufacturer = async (req, res) => {
//     const id = req.params.id;
//     console.log(">>>", req.body);
    
//     try {
//         const newManufacturer = await Manufacturers.findByIdAndUpdate(
//             id,req.body,{ new: true } 
//         );
//         console.log("data >>>", newManufacturer);
        
//         res.status(200).json({ 
//             data: newManufacturer, 
//             success: true, 
//             message: `${req.method} - Update Successful` 
//         });
//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             console.log(`Error Validating: ${error.message}`);
//             const messages = Object.values(error.errors).map(val => val.message);
//             return res.status(400).json({ success: false, error: messages });
//         } else {
//             console.log(`Error: ${error.message}`);
//             return res.status(500).json({ success: false, error: 'Server Error' });
//         }
//     }
// };

const updateEngineManufacturer = async (req, res) => {
    const id = req.params.id;
    console.log(">>>", req.body)

    try {
    const newManufacturer = await Manufacturers.findByIdAndUpdate(id,req.body, { new: true });  
    console.log("data >>>",newManufacturer)              
    res.status(200).json({ data: newManufacturer, success: true, message: `${req.method} - Update Successful ` });
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

// Delete an engine Manufacturer
const deleteEngineManufacturer = async (req, res) =>{
    const id = req.params.id;
        console.log(">>>", req.body)
    try {
        const manufacturer = await Manufacturers.findByIdAndDelete(id, req.body, { new: true });
        console.log("data >>>", manufacturer)
        res.status(200).json({ data: manufacturer, id, success: true, message: `${req.method} - Delete Successful by ID ` });
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
module.exports = {
    getAllEngineManufacturers,
    getEngineManufacturerById,
    createEngineManufacturer,
    updateEngineManufacturer,
    deleteEngineManufacturer,
};