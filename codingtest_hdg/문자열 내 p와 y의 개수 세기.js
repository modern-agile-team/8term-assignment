//과제3
function solution(s) {
  let answer = true;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") count1++;
    if (s[i] === "y" || s[i] === "Y") count2++;
  }
  if (count1 != count2) answer = false;

  return answer;
}
