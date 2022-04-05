const express = require('express');
require('dotenv').config();

exports.auth = (req, res, next) => {
  const secret = req.headers.apisecret;

  if (!secret) return res.send('Hiányzó API kulcs');

  if (secret != process.env.API_SECRET) return res.send('Rossz API kulcs');

  return next();
};
