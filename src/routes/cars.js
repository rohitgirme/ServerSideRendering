import Express from 'express';

const router = Express.Router()

router.get('/', function (req, res) {
    fs.readFile(path.join(__dirname, 'data','cars.json'), function (err, data) {
      if (err) {
        console.log("fetching cars API failed: " + err);
        res.status(500).send();
      }
  
      res.status(200).send(JSON.parse(data));
    })
  });

module.exports = router;