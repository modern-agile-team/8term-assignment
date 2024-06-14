//5주차 과제
function solution(s) {
  let answer = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i].split("").reduce((a, c, i) => {
      //answer에 정리된 단어를 넣기
      if (i % 2) c = c.toLowerCase(); // i%2==0 일때, 짝수일때 대문자
      else c = c.toUpperCase(); // 홀수에 소문자
      return a + c; // 문자를 더해가서 a 출력
    }, ""); //reduce()에서 a 초기값을 ""로 하기
    if (i + 1 < arr.length) answer += " ";
  }

  return answer;
}
