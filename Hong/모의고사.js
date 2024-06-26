//6일 과제
function solution(answers) {
  function Dork(id, answer, count) {
    this.id = id;
    this.answer = answer;
    this.count = count;
  }
  let dork1 = new Dork(1, [1, 2, 3, 4, 5], 0);
  let dork2 = new Dork(2, [2, 1, 2, 3, 2, 4, 2, 5], 0);
  let dork3 = new Dork(3, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 0);
  let arr = [dork1, dork2, dork3];
  let result = [];
  let max;

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
