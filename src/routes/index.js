const devices = require('../components/devices/routes');
var express = require('express');
var router = express.Router();

/*GET home*/
router.use('/devices', devices);



module.exports = router;
