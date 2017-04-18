const express = require ('express');
const path = require ('path');
const fs = require ('fs');

const router = express.Router();
const testsDescriptionsPath = path.join(__dirname,'../../storage/tests.json');

router.get('/', (req, res) => {
  fs.readFile(
    testsDescriptionsPath,
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      };
    }
  );
});

module.exports = router;
