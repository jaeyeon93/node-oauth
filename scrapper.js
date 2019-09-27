const gplay = require('google-play-scraper');

gplay.app({appId:'com.netflix.ninja'})
  .then(console.log, console.log);
