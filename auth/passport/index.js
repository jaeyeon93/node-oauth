'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const session = require('express-session');
const config = require('./config');

const GOOGLE_CLIENT_ID = config.web.client_id;
const GOOGLE_CLIENT_SECRET = config.web.client_secret;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // asynchronous verification, for effect...
    process.nextTick( () => {
      console.log(`access token : ${accessToken}, refresh token : ${refreshToken}, profile : ${JSON.stringify(profile)}`);
      return done(null, profile);
    });
  }
));

const setup = (app) => {
  app.use(session({ secret: 'keyboard cat'}));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/auth/google', passport.authenticate('google', {scope: ['openid', 'email']}), (req, res) => {
    console.log(JSON.stringify(res));
  });

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login'}), (req, res) => {
    console.log('/auth/google/callback 호출');
    console.log(req.query);
    res.redirect('/');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  })
}

exports.setup = setup;
