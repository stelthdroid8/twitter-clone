const express = require('express');

const User = require('../models/user');

require('../db/mongoose');

router = express.Router();

router.get('/', (req, res) => {
  res.send('this worked');
});

router.post('/users/signup', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
