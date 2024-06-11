function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
    answer += absolutes[i];
  }

  return answer;
}
