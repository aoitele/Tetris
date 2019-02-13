const express = require('express');
const app = express();
app.use(express.static('static'));
const fs = require('fs');
const path = require('path');
const htmlPath = path.join(__dirname, './static/index.html');
innerhtml = fs.readFileSync(htmlPath, 'utf8');

// ゲームの状態を入れる配列
const field = [];

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

app.get('/', (req, res) => {
  console.log('root...');
});

app.get('/field', (req, res) => {
  console.log('connecting...');
});

app.listen(8000);
