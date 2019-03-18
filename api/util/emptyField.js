module.exports = {
  // 空きフィールドを計算して返却する関数
  emptyField(field) {
    const emptyfield = field.filter(column => !column.status);
    return emptyfield;
  }
};
