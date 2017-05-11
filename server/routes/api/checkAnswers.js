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
        const recommendations = [];
        const rightAnswersCount = answers
          .reduce((acc, curr) => {
            if (curr.answer.toString() ===
              testsInformation[id].answers[curr.id].toString()) {
              return ++acc;
            } else {
              recommendations.push(
                testsInformation[id].recommendations[curr.id]
              );
              return acc;
            };
          }
          , 0);
        const questionsCount = answers.length;
        const result = {
          rightAnswersCount,
          questionsCount,
          recommendations,
        };
        res.send(result);
      };
    }
  );
});

module.exports = router;
