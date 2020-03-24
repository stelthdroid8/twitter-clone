const express = require('express');

const userRoutes = require('./routes/users');
// require('dotenv').config();

const app = express();
// const port = process.env.PORT;

app.use(express.json());

app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log('server is up and running');
});
