const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, message: `${req.method} - request to Car End Point` });
});

router.get('/cars', (req, res) => {});

router.post('/cars', (req, res) => {});

router.put('/cars/:id', (req, res) => {});

router.delete('/cars/:id', (req, res) => {});

module.exports = router;