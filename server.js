const express = require('express');
const passport = require('passport');
const config = require('./config.js');

const app = express();

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
