function solution(n, lost, reserve) {
  let answer = 0;

  for (let i = 0; i < lost.length; i++) {
    if (lost[i] != reserve) {
      lost.sort((a, b) => a - b);
    }
    if (reserve[i] != lost) {
      reserve.sort((a, b) => a - b);
    }
  }
  return answer;
}
