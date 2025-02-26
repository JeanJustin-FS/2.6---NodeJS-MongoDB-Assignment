const express = require('express');
const router = express.Router();
const carRoutes = require('./carRoutes');
const manufacturerRoutes  = require('./manufacturerRoutes')

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: `${req.method} - Request received successfully!` });
});

router.use('/cars', carRoutes);
router.use('/manufacturer/', manufacturerRoutes);


module.exports = router;