const {getAllEngineManufacturers,
    getEngineManufacturerById,
    createEngineManufacturer,
    updateEngineManufacturer,
    deleteEngineManufacturer,} = require('../controllers/manufacturerController');

const router = require('express').Router();

router.get('/', getAllEngineManufacturers);
router.get('/:id', getEngineManufacturerById);
router.post('/', createEngineManufacturer);
router.put('/:id', updateEngineManufacturer);
router.delete('/:id', deleteEngineManufacturer);

module.exports = router;
