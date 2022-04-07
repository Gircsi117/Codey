module.exports = (req, res, next) => {
  if (req.session.isAuth) return next();

  return res.redirect('/auth/login');
};
