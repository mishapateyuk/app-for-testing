const express = require ('express');
const descriptions = require('./descriptions');
const previewInfo = require('./previewInfo');

const router = express.Router();

router.use('/descriptions', descriptions);
router.use('/preview-info', previewInfo);

module.exports = router;
