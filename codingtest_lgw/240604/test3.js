function solution(s) {
  let answer = "";
  let num1 = s.length / 2 - 0.5;

  if (s.length % 2 != 0) {
    answer = s[num1];
  } else {
    answer = s[num1 - 0.5] + s[num1 + 0.5];
  }
  return answer;
}
