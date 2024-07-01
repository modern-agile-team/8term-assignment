function solution(numbers) {
  let arr = [];
  let num = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      arr[num] = numbers[i] + numbers[j + 1];
      num++;
      console.log(numbers[i] + numbers[j + 1]);
    }
  }
  const set = new Set(arr);

  let answer = [...set];
  answer.sort(function (a, b) {
    return a - b;
  });

  return answer;
}
