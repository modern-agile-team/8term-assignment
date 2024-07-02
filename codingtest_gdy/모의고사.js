function solution(answers) {
  const supoja1 = [1, 2, 3, 4, 5];
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let su1 = 0,
    su2 = 0,
    su3 = 0;
  let su1Count = 0,
    su2Count = 0,
    su3Count = 0;

  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (su1 === 5) {
      su1 = 0;
    }

    if (supoja1[su1] === answers[i]) {
      su1Count++;
    }
    if (su2 === 8) {
      su2 = 0;
    }

    if (supoja2[su2] === answers[i]) {
      su2Count++;
    }

    if (su3 === 10) {
      su3 = 0;
    }

    if (supoja3[su3] === answers[i]) {
      su3Count++;
    }

    su1++;
    su2++;
    su3++;
  }

  const maxCount = Math.max(su1Count, su2Count, su3Count);
  const rank = [su1Count, su2Count, su3Count];

  for (let i = 0; i < 3; i++) {
    if (maxCount === rank[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}
