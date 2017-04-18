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
        console.log(data);
        res('asdfasdfljasdflj');
      };
    }
  );
});

module.exports = router;