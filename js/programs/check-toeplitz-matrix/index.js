/**
 * program to check if given matrix is toeplitz or not
 * 
 * Toeplitz matrix is a matrix where every diagonal from top-left to bottom-right has the same value
 * 
 * Example
 * [
      [1, 2, 3],
      [4, 1, 2],
      [5, 4, 1]
   ]
 */

function isToeplitz(matrix){
    const rows = matrix.length
    const cols = matrix[0].length

    for(let row = 1; row< rows; row++){
        for(let col = 1; col < cols; col++){
            if(matrix[row][col] !== matrix[row-1][col-1])
                return false
        }
    }

    return true
}

console.log(isToeplitz([
  [1, 2, 3],
  [4, 1, 2],
  [5, 4, 1]
]))

console.log(isToeplitz([
  [1, 2, 3],
  [4, 5, 2],
  [6, 4, 1]
]))