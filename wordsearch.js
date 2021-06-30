const transpose = (matrix) => {
  const transposed = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const column = matrix.map((row)=>row[col])
    transposed.push(column)
  }
  return transposed
}

const wordSearchHorizontal = (letters, word) => { 
  for (const line of letters) {
    const horizontalJoin = line.join('');
    if (horizontalJoin.includes(word)) return true;
  }
  return false
}

const wordSearch = (letters, word) => {
  if (wordSearchHorizontal(letters, word)) return true
  if (wordSearchHorizontal(transpose(letters), word)) return true
  return false
}

module.exports = wordSearch
