const express = require('express');
const next = require('next');
const passport = require('passport');
const session = require('express-session');
require('./config/passport')(passport);
const flash = require('connect-flash');
const models = require('./data/models');
const { User, Comment, Like, Setlist, SetlistSongs, Song, Post, Group, Tag } = require('./data/models');

const { port, authSecret, sessionMaxAge } = require('./config/config.server');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const bodyParser = require('body-parser');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.use(session({
    secret: authSecret,
    cookie: {
      maxAge: sessionMaxAge
    },
    resave: false,
    saveUninitialized: false
  }));

  server.use(flash());

  server.use(passport.initialize());
  server.use(passport.session());

  /**
   * Custom Routes
   */
  server.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

  server.get('/api/get-user', (req, res) => {
    // it's important that the browser makes this request every time, therefore set headers to avoid any response caching
    res.append('Cache-Control', 'no-cache');
    res.append('Cache-Control', 'no-store');
    res.append('Pragma', 'no-cache');
    res.append('Expires', '0');
    return res.send({ user: req.user });
  });

  server.get('/api/users',(req, res) => {
    User.findAll().then((users) => res.send(users))
  });

  /**
   * catch all to hand off to next.js
   */
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  models.sync().catch(err => console.error(err.stack)).then(() => {
    //remove this of course!
    // User.create({
    //   email: 'bk@bk.com',
    //   firstName: 'Test',
    //   lastName: 'Test',
    //   password: 'testPassword'
    // });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
});