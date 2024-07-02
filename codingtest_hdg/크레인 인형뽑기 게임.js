//8일차
function solution(board, moves) {
  let len = moves.length;
  let answer = [];
  let count = 0;
  let chack = [];
  moves = moves.map((ele) => ele - 1);
  while (len--) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[0]] !== 0) {
        answer.push(board[i][moves[0]]);
        board[i][moves[0]] = 0;
        moves.shift();
        break;
      }
    }
  }

  len = answer.length;
  while (len--) {
    chack.push(answer.shift());
    if (
      chack.length >= 2 &&
      chack[chack.length - 1] === chack[chack.length - 2]
    ) {
      chack.pop();
      chack.pop();
      count = count + 2;
      continue;
    }
  }
  return count;
}
