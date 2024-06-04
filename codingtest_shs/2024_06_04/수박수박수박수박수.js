function solution(n) {
  const watermellon = ["수", "박"];
  let answer = "";

  for (i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += watermellon[0];
    }
    if (i % 2 === 0) {
      answer += watermellon[1];
    }
  }
  return answer;
}
