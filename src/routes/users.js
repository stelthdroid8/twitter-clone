const express = require('express');

const User = require('../models/user');

require('../db/mongoose');

router = express.Router();

router.get('/', (req, res) => {
  res.send('this worked');
});

module.exports = router;
