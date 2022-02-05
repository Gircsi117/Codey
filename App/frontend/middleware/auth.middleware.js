module.exports = (req, res, next) => {
  console.log(req.session.isAuth);
  if (req.session.isAuth) return next();

  return res.redirect('/auth/login');
};
