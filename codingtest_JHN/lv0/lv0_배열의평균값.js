function solution(numbers) {
  let sum = 0;
  //원소들을 다 더한 후에 원소 수만큼 나눈다.
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const avg = sum / numbers.length;
  return avg;
}
