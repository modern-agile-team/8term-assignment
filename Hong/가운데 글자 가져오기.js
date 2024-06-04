//2일차 과제3
function solution(s) {
  let answer = "";

  let mid = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    answer += s[mid - 1];
    answer += s[mid];
  } else answer += s[mid];

  return answer;
}
