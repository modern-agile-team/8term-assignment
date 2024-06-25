function solution(board, moves) {
  let answer = 0; // 제거된 인형의 개수
  let stack = []; // 뽑은 인형을 담을 곳

  for (let i = 0; i < moves.length; i++) {
    let index = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      // 현재 열과 행에 인형이 있다면
      if (board[j][index] !== 0) {
        // 스택의 마지막과 현재의 인형이 같은 경우
        if (stack[stack.length - 1] === board[j][index]) {
          stack.pop();
          // 제거된 인형의 개수 2 증가 (둘 다 없어져야 함)
          answer += 2;
        } else {
          // 그게 아니라면 스택에 인형 추가
          stack.push(board[j][index]);
        }
        // 현재의 위치에서 인형 제거
        board[j][index] = 0;
        // 다음 열로 이동
        break;
      }
    }
  }
  return answer;
}
