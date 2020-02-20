module.exports = function towelSort (matrix) {
  if (matrix === [] || !Array.isArray(matrix)) return [];
  let out = [];
  for (let i = 0; i < matrix.length; i++) {
    (i % 2 === 0) ? out = out.concat(matrix[i]) : out = out.concat(matrix[i].reverse());
  }
  return out;
}
