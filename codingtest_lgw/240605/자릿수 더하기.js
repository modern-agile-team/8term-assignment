function solution(n) {
  let answer = 0;
  let arr = String(n);
  const arr1 = [...arr];

  for (let i = 0; i < arr1.length; i++) {
    answer += Number(arr1[i]);
  }
  return answer;
}
