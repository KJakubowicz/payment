const express = require("express");
const router  = express.Router();

// action list
const testAction = require('../actions/api/test');

router.get('/', testAction);


module.exports = router;