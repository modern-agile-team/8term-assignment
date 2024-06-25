function solution(answers) {
  const math_1 = [1, 2, 3, 4, 5];
  const math_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const math_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answer = [];
  let arr = [0, 0, 0];

  // 수포자가 찍은 번호와 문제 정답의 번호를 비교해서 증가
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === math_1[i % math_1.length]) {
      arr[0] += 1;
    }
    if (answers[i] === math_2[i % math_2.length]) {
      arr[1] += 1;
    }
    if (answers[i] === math_3[i % math_3.length]) {
      arr[2] += 1;
    }
  }

  // 수포자 중 최댓값을 찾음
  let max = Math.max(arr[0], arr[1], arr[2]);

  // 최대로 많이 맞은 사람을 answer에 저장
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === max) {
      answer.push(j + 1);
    }
  }

  return answer;
}
