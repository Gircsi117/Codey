const express = require('express');
const app = express();
const sequelize = require('sequelize');
const flash = require('express-flash');
const bcrypt = require('bcrypt');
const session = require('express-session');

const PORT = 3000 || process.env.PORT;

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'asd', resave: true, saveUninitialized: true }));

app.use('/auth', require('./routes/auth.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/', require('./routes/dashboard.routes'));
app.use('/user', require('./routes/user.routes'));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`hosting on ${PORT}`);
  }
});
