function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      // signs이 참이라면 양수 출력
      answer += absolutes[i];
    } else {
      // 그렇지 않다면 음수 출력
      answer -= absolutes[i];
    }
  }
  return answer;
}
