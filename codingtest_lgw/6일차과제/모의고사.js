function solution(answers) {
  let answer = [];
  let newsupo1 = [];
  let newsupo2 = [];
  let newsupo3 = [];
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let num = [0, 0, 0];

  newsupo1 = newsupo1.concat(supo1);
  newsupo2 = newsupo2.concat(supo2);
  newsupo3 = newsupo3.concat(supo3);
  if (answers.length > 5) {
    for (let i = 0; i < answers.length / 5 - 1; i++) {
      newsupo1 = newsupo1.concat(supo1);
      newsupo2 = newsupo2.concat(supo2);
      newsupo3 = newsupo3.concat(supo3);
    }
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === newsupo1[i]) {
      num[0]++;
    }
    if (answers[i] === newsupo2[i]) {
      num[1]++;
    }
    if (answers[i] === newsupo3[i]) {
      num[2]++;
    }
  }

  let max = num[0];
  max = max < num[1] ? num[1] : num[0];
  max = max < num[2] ? num[2] : max;

  if (max === num[0]) {
    answer = [1];
    if (max === num[1]) {
      answer = [1, 2];
    }
    if (max === num[2]) {
      answer = [1, 3];
    }
    if (max === num[1] && max === num[2]) {
      answer = [1, 2, 3];
    }
  } else if (max === num[1]) {
    answer = [2];
    if (max === num[2]) {
      answer = [2, 3];
    }
  } else if (max === num[2]) {
    answer = [3];
  }
  return answer;
}
