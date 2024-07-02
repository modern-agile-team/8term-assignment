function solution(s) {
  let answer = true;
  if (s.length == 4 || s.length == 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        answer = false;
      }
    }
  } else {
    answer = false;
  }
  return answer;
}
