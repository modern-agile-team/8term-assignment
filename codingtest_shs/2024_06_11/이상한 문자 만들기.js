function solution(s) {
  let answer = "";
  const spl = s.split(" "); // 단어마다 쪼개고 변수에 저장

  for (let i = 0; i < spl.length; i++) {
    // spl의 길이까지 i를 반복
    for (let j = 0; j < spl[i].length; j++) {
      // spl의 i번째 배열의 길이까지 j를 반복
      if (j % 2 == 0) {
        answer += spl[i][j].toUpperCase(); // 인덱스 번호가 짝수면 대문자
      } else if (j % 2 == 1) {
        answer += spl[i][j].toLowerCase(); // 인덱스 번호가 홀수면 소문자
      }
    }
    if (i < spl.length - 1) {
      answer += " "; // 공백도 인덱스에 포함
    }
  }
  return answer;
}
