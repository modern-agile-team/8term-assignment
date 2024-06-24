function solution(numbers, hand) {
  let answer = "";
  let lr = [
    [0, 0],
    [2, 0],
  ]; //왼손과 오른손의 현재좌표
  const keypad = [
    [1, 0],
    [0, 3],
    [1, 3],
    [2, 3],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 0],
    [2, 0],
  ]; // 0, 1, 2 ,..., 9, 0, *, #
  let pm = 0; //거리변수

  for (let i = 0; i < numbers.length; i++) {
    // numbers만큼 반복
    if (numbers[i] % 3 === 1) {
      //왼쪽열의 숫자라면
      answer += "L";
      lr[0] = keypad[numbers[i]]; //왼손의 현재 좌표를 갱신
    } else if (numbers[i] !== 0 && numbers[i] % 3 === 0) {
      //오른쪽열의 숫자라면
      answer += "R";
      lr[1] = keypad[numbers[i]]; //오른손의 현재 좌표를 갱신
    } else {
      // 가운데열 숫자라면
      pm =
        Math.abs(lr[0][0] - keypad[numbers[i]][0]) +
        Math.abs(lr[0][1] - keypad[numbers[i]][1]) -
        (Math.abs(lr[1][0] - keypad[numbers[i]][0]) +
          Math.abs(lr[1][1] - keypad[numbers[i]][1])); // 왼손과 누를키패드의 거리 - 오른손과 누를키패드의 거리
      if (pm < 0) {
        //왼손보다 오른손이 더 멀다면
        answer += "L";
        lr[0] = keypad[numbers[i]];
      } else if (pm > 0) {
        //오른손보다 왼손이 더 멀다면
        answer += "R";
        lr[1] = keypad[numbers[i]];
      } else {
        //두손의 거리가 같다면
        if (hand === "left") {
          answer += "L";
          lr[0] = keypad[numbers[i]];
        } else {
          answer += "R";
          lr[1] = keypad[numbers[i]];
        }
      }
    }
  }
  return answer;
}
