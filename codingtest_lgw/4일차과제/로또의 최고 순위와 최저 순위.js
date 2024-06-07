function solution(lottos, win_nums) {
  let answer = [];
  let num1 = 0;
  let num2 = 0;
  let i = 0;
  let j = 0;
  const rank = [6, 6, 5, 4, 3, 2, 1];

  while (i < 6) {
    while (j < 6) {
      if (lottos[i] === win_nums[j]) {
        num1++;
      }
      j++;
    }
    if (lottos[i] === 0) {
      num2++;
    }
    i++;
    j = 0;
  }
  answer[1] = rank[num1];
  answer[0] = rank[num1 + num2];

  return answer;
}
