const express = require ('express');
const path = require ('path');
const fs = require ('fs');

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../../storage/testsInformation.json'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const testsInformation = JSON.parse(data);
        const response = [];
        for (let key in testsInformation) {
          const {name, description, stars, time, level} = testsInformation[key];
          response.push({
            id: key,
            name,
            description,
            stars,
            time,
            level,
          });
        }
        return response ? res.send(JSON.stringify(response)) :
          res.sendStatus(404);
      };
    }
  );
});

module.exports = router;
