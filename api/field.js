// ゲームの状態を入れる配列
const field = [];
const row = 20;
const column = 10;

module.exports = {
  createField() {
    for (x = 0; x < column; x += 1) {
      arr = [];
      for (y = 0; y < row; y += 1) {
        arr.push({ x, y, status: false });
      }
      field.push(arr);
    }
    return field;
  },
  getField() {
    return field;
  }
};
