const express = require('express');
const app = express();
const sequelize = require('sequelize');
const flash = require('express-flash');
const bcrypt = require('bcrypt');

const PORT = 3000 || process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`hosting on ${PORT}`);
  }
});
