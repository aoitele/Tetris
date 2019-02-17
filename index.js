const express = require('express');
const app = express();
app.use(express.static('static'));
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
  if (req.query.x !== undefined) {
    block.y = +1;
    res.json(block);
  }
  res.json(createBlock());
});

app.listen(8000);
