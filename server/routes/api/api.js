const express = require ('express');
const descriptions = require('./descriptions');
const previewInfo = require('./previewInfo');
const questions = require('./questions');
const checkAnswers = require('./checkAnswers');
const checkQuestionAnswer = require('./checkQuestionAnswer');

const router = express.Router();

router.use('/descriptions', descriptions);
router.use('/preview-info', previewInfo);
router.use('/questions', questions);
router.use('/check-question-answer', checkQuestionAnswer);
router.use('/check-answers', checkAnswers);

module.exports = router;
