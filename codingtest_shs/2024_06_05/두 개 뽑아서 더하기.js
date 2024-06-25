function solution(numbers) {
  let answer = [];

  for (let a = 0; a < numbers.length; a++) {
    for (let b = a + 1; b < numbers.length; b++) {
      answer.push(numbers[a] + numbers[b]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}
