var express = require('express');
var router = express.Router();
var data = require("../data/data");

/* GET home page. */
router.get('/data', function(req, res, next) 
{
  // To send the data as per different partitions 
  // So that the buffer on the UI can load as the data becomes available 
  // Hence, this way we can load massive data on UI.... and also selective data 
  // can also be loaded....
  
  res.send(data);
});

router.get('/datasize', function(req, res, next) 
{
  // To send the data as per different partitions 
  // So that the buffer on the UI can load as the data becomes available 
  // Hence, this way we can load massive data on UI.... and also selective data 
  // can also be loaded....
  
  res.send({count : 2000000});
});

module.exports = router;