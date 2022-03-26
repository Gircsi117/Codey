exports.admin = (req, res, next) => {
    if (req.session.user.jogosultsag == 2) return next();
  
    return res.redirect('/');
};

exports.moderator = (req, res, next) => {
    if (req.session.user.jogosultsag != 0) return next();
  
    return res.redirect('/');
};