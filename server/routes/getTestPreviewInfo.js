const express = require ('express');
const path = require ('path');
const fs = require ('fs');

const router = express.Router();

router.get('/:id', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../../storage/testsInformation.json'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const testsInformation = JSON.parse(data);
        const id = req.params.id;
        const response = testsInformation[id];
        return response ? res.send(JSON.stringify(response)) :
          res.sendStatus(404);
      };
    }
  );
});

module.exports = router;