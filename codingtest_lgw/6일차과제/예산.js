function solution(d, budget) {
  let answer = 0;
  d.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}
