const express = require('express');
const app = express();

exports.auth = (req, res, next) => {
  console.log(req.headers);
  const secret = req.headers.apisecret;

  if (!secret) return res.send('Hiányzó API kulcs');

  if (secret != '123') return res.send('Rossz API kulcs');

  return next();
};
