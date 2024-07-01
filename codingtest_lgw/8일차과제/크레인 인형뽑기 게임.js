function solution(board, moves) {
  let answer = 0;
  let arr = Array.from({ length: board.length }, () => []); //배열 생성 . 깊은복사
  let baguni = [];

  for (let i = 0; i < board.length; i++) {
    // 0값이 없고 행열이 바뀐 배열을 arr에 넣어준다.
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== 0) {
        arr[i].push(board[j][i]);
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    // 바구니에 크레인이 뽑은 값을 넣어준다.
    if (arr[moves[i] - 1].length > 0) {
      baguni.unshift(arr[moves[i] - 1].shift());
    }
  }

  //마지막 단계 for문을 돌려서 연속으로 같은 값이 나온다면 ! 그 값들을 없애고 answer += 2
  //연속으로 같은 값이 나오지 않을 때까지 반복 하면 됨

  for (let i = 0; i < baguni.length; i++) {
    if (baguni[i] === baguni[i - 1]) {
      baguni.splice(i - 1, 2);
      answer += 2;
      i = 0;
    }
  }

  return answer;
}
