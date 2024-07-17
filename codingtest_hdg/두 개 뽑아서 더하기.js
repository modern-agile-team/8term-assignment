function solution(numbers) {
  let answer = [];
  let arr = [];
  let save = null;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer.sort((a, b) => a - b);
  for (let value of answer) {
    if (value !== save) arr.push(value);
    save = value;
  }
  return arr;
}
