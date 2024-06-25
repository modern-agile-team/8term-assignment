function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b); // 최대로 많은 부서를 지원해주기 위해 오름차순으로 정렬

  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i]; // 예산에 신청한 금액을 빼줌
      answer += 1; // 최대로 지원 가능한 부서를 구함
    }
  }
  return answer;
}
