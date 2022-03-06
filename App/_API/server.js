const express = require('express');
const app = express();

const PORT = 3001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./middleware/access.middleware').auth);

app.use('/auth', require('./routes/auth.routes'));
app.use('/kcal', require('./routes/kcal.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/user', require('./routes/user.routes'));
app.use('/blog', require('./routes/blog.routes'));
app.use('/weight', require('./routes/weight.routes'));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`hosting on ${PORT}`);
  }
});
