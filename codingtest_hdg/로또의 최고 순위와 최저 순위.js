//4일차 과제
function solution(lottos, win_nums) {
  let answer = [];
  let lotto = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 }; //key는 카운터합 수 value는 등수
  let maxCount = 0;
  let minCount = 0;

  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === 0) {
        maxCount++;
        break;
      }
      if (lottos[i] === win_nums[j]) {
        minCount++;
        break;
      }
    }
  }
  answer.push(lotto[maxCount + minCount]);
  answer.push(lotto[minCount]);
  return answer;
}
