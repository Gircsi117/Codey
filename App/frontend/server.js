const express = require('express');
const app = express();
const session = require('express-session');
require('dotenv').config();

const PORT = process.env.PORT;

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use('/auth', require('./routes/auth.routes'));
app.use('/', require('./routes/dashboard.routes'));
app.use('/tools', require('./routes/tools.routes'));
app.use('/info', require('./routes/info.routes'));
app.use('/admin', require('./routes/admin.routes'));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`hosting on ${PORT}`);
  }
});
