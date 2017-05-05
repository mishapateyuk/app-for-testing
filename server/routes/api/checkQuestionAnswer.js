const express = require ('express');
const path = require ('path');
const fs = require ('fs');

const router = express.Router();

router.post('/', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../../../storage/testsInformation.json'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const testsInformation = JSON.parse(data);
        const {questionId, answer, testId} = req.body;
        testsInformation[testId]
          .answers[questionId].toString() === answer.toString() ?
            res.send(true) : res.send(false);
      };
    }
  );
});

module.exports = router;
