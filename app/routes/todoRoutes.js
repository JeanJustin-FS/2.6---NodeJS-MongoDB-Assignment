const express = require('express');
const router = express.Router();
const { todoService, todoServiceById } = require('../services/todoService');

try {
    router.get('/', async (req, res) => {
        const result = await todoService();
        res.status(200).json(result.data);
    });
} catch (error) { 
 router.get('/', async (req, res) => {
     res.status(500).json({ success: false, error: 'Server Error' });
 });
};

module.exports = router;