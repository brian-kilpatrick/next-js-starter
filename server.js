const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.post('/sign-in', (req, res) => {
    res.json(req.body)
  });

  server.get('/api/example', (req, res) => res.json({ example: true }));

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
});