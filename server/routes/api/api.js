const express = require ('express');
const descriptions = require('./descriptions');
const previewInfo = require('./previewInfo');
const questions = require('./questions');

const router = express.Router();

router.use('/descriptions', descriptions);
router.use('/preview-info', previewInfo);
router.use('/questions', questions);

module.exports = router;
