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
        const {id, userName, answers} = req.body;
        let result = testsInformation[id].answers.reduce(
          (acc, answer) => {
            const userAnswer = answers.find(
              userAnswer => userAnswer.questionIndex === answer.questionIndex
            );
            return userAnswer && userAnswer.questionAnswer.toString() ===
            answer.questionAnswer.toString() ?
              ++acc :
              acc;
          },
          0
        );
        res.send(`${result} / ${testsInformation[id].answers.length}`);
      };
    }
  );
});

module.exports = router;
