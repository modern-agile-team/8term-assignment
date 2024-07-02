//6일차 과제
function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b);
  while (budget - d[0] >= 0) {
    budget -= d.shift();
    count++;
  }
  return count;
}
