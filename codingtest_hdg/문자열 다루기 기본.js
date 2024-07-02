//3일차 과제1
function solution(s) {
  let answer = true;
  if (!(s.length === 4 || s.length === 6)) return false;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) return false;
  }
  return answer;
}
