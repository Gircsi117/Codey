const express = require('express');
const app = express();
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const PORT = 3001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./middleware/access.middleware').auth);

app.use('/auth', require('./routes/auth.routes'));
app.use('/', require('./routes/dashboard.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/user', require('./routes/user.routes'));
app.use('/info', require('./routes/info.routes'));
app.use('/tools', require('./routes/tools.routes'));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`hosting on ${PORT}`);
  }
});
