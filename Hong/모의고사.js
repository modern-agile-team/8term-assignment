function solution(answers) {
  let result = [];
  let max;
  let dork1 = {
    id: 1,
    answer: [1, 2, 3, 4, 5],
    count: 0,
  };
  let dork2 = {
    id: 2,
    answer: [2, 1, 2, 3, 2, 4, 2, 5],
    count: 0,
  };
  let dork3 = {
    id: 3,
    answer: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    count: 0,
  };
  let arr = [dork1, dork2, dork3];

  arr.map((key) => {
    for (let i = 0, j = 0; true; i++, j++) {
      if (i >= key.answer.length) i = 0;
      if (j >= answers.length) break;
      if (key.answer[i] === answers[j]) key.count++;
    }
  });
  arr.sort((a, b) => b.count - a.count);
  max = arr[0].count;
  for (let key of arr) if (key.count === max) result.push(key.id);
  return result;
}
