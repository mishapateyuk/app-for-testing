const express = require ('express');
const path = require ('path');
const fs = require ('fs');

const router = express.Router();

router.get('/:id', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../../storage/testsPreviews.json'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const testsPreviews = JSON.parse(data);
        const id = req.params.id;
        const response = testsPreviews[id];
        return response ? res.send(JSON.stringify(response)) :
          res.sendStatus(404);
      };
    }
  );
});

module.exports = router;