
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!Array.isArray(matrix)) {
    return [];
  }

  const arr = matrix.map((item, i) => {
    if (i % 2 !== 0) {
      item.reverse();
    }
    return item
  })
  return arr.flat();
}
