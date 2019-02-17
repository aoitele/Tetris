const express = require('express');
const app = express();
app.use(express.static('static'));

// ゲームの状態を入れる配列
const field = [];
const row = 20;
const column = 10;

// ブロックが出てくる位置
const init = { x: 3, y: 20 };

// ブロック7パターンを定義
// prettier-ignore
const block = [
    { init, b1:{x:init.x+1, y:init.y }, b2:{x:init.x+2, y:init.y }, b3:{x:init.x+3, y:init.y }, color:"lightblue" },
    { init, b1:{x:init.x, y:init.y+1 }, b2:{x:init.x+1, y:init.y }, b3:{x:init.x+2, y:init.y }, color:"blue" },
    { init, b1:{x:init.x+1, y:init.y }, b2:{x:init.x+2, y:init.y }, b3:{x:init.x+2, y:init.y+1 }, color:"orange" },
    { init, b1:{x:init.x, y:init.y+1 }, b2:{x:init.x+1, y:init.y }, b3:{x:init.x+1, y:init.y+1 }, color:"yellow" },
    { init, b1:{x:init.x+1, y:init.y }, b2:{x:init.x+1, y:init.y+1 }, b3:{x:init.x+2, y:init.y+1 }, color:"green" },
    { init, b1:{x:init.x+1, y:init.y }, b2:{x:init.x+1, y:init.y+1 }, b3:{x:init.x+2, y:init.y }, color:"purple" },
    { init, b1:{x:init.x+1, y:init.y }, b2:{x:init.x+1, y:init.y-1 }, b3:{x:init.x+2, y:init.y-1 }, color:"red" }
];

const colorlist = {
  lightblue: '#85C1E9',
  blue: '#2874A6',
  orange: '#F39C12',
  yellow: '#F4D03F',
  green: '#2ECC71',
  purple: '#9B59B6',
  red: '#E74C3C'
};

// フィールド生成
for (x = 0; x < column; x += 1) {
  arr = [];
  for (y = 0; y < row; y += 1) {
    arr.push({
      x,
      y,
      status: null
    });
  }
  field.push(arr);
}

// app.use(require('./api/block.js'));

app.get('/', (req, res) => {
  res.json(field);
});

app.get('/field', (req, res) => {
  res.json(field);
});

app.get('/block', (req, res) => {
  res.json(field);
});

app.listen(8000);
