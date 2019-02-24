const express = require('express');
const app = express();
app.use(express.static('static'));
const bodyParser = require('body-parser');
const { createField, getField } = require('./api/field.js');
const { createBlock } = require('./api/block.js');

// app.use(require('./api/block.js'));

app.get('/', (req, res) => {});

app.get('/field', (req, res) => {
  if (getField().length !== 0) {
    res.json(getField());
  } else {
    res.json(createField());
  }
});

app.get('/block', (req, res) => {
  // ブロック落下中の処理
  if (Object.keys(req.query).length !== 0) {
    // prettier-ignore
    block = {
      b0: { x: +req.query.b0.x, y: +req.query.b0.y+1 },
      b1: { x: +req.query.b1.x, y: +req.query.b1.y+1 },
      b2: { x: +req.query.b2.x, y: +req.query.b2.y+1 },
      b3: { x: +req.query.b3.x, y: +req.query.b3.y+1 },
      color: req.query.color
    };
    res.json(block);
  } else {
    res.json(createBlock());
  }
});

app.listen(8000);
