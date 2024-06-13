const s = "appleeee";
function solution(s) {
  const arr = s.split("");
  if (arr.length % 2 === 1) {
    //문자 수가 홀수 개인 경우에 가운데 문자 출력
    return arr[Math.floor(arr.length / 2)];
  } else {
    return s.substr(arr.length / 2 - 1, 2);
  }
}

console.log(solution(s));
