const b0 = { x: 3, y: 1 }; // ブロック初期位置
const colorlist = {
  lightblue: '#85C1E9',
  blue: '#2874A6',
  orange: '#F39C12',
  yellow: '#F4D03F',
  green: '#2ECC71',
  purple: '#9B59B6',
  red: '#E74C3C'
};

// ブロック7パターンを定義
// prettier-ignore
const block = [
  { b0, b1:{x:b0.x+1, y:b0.y }, b2:{x:b0.x+2, y:b0.y }, b3:{x:b0.x+3, y:b0.y }, color:"lightblue" },
  { b0, b1:{x:b0.x, y:b0.y+1 }, b2:{x:b0.x+1, y:b0.y }, b3:{x:b0.x+2, y:b0.y }, color:"blue" },
  { b0, b1:{x:b0.x+1, y:b0.y }, b2:{x:b0.x+2, y:b0.y }, b3:{x:b0.x+2, y:b0.y+1 }, color:"orange" },
  { b0, b1:{x:b0.x, y:b0.y+1 }, b2:{x:b0.x+1, y:b0.y }, b3:{x:b0.x+1, y:b0.y+1 }, color:"yellow" },
  { b0, b1:{x:b0.x+1, y:b0.y }, b2:{x:b0.x+1, y:b0.y+1 }, b3:{x:b0.x+2, y:b0.y+1 }, color:"green" },
  { b0, b1:{x:b0.x+1, y:b0.y }, b2:{x:b0.x+1, y:b0.y+1 }, b3:{x:b0.x+2, y:b0.y }, color:"purple" },
  { b0, b1:{x:b0.x+1, y:b0.y }, b2:{x:b0.x+1, y:b0.y-1 }, b3:{x:b0.x+2, y:b0.y-1 }, color:"red" }
];

module.exports = {
  createBlock() {
    num = Math.floor(Math.random() * block.length);
    const pattern = block[num];
    return pattern;
  }
  //   judgeCollision();
};
