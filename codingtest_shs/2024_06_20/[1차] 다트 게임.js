function solution(dartResult) {
  let answer = 0; // 최종 점수
  let num = 0;    // 현재 점수
  let arr = [];   // 3번의 기회 점수를 담을 배열

  for (let i = 0; i < dartResult.length; i++) {
    // dartResult가 숫자인지 확인
    if (!isNaN(dartResult[i])) {
      // 0-9까지만 숫자로 보기 때문에 따로 10을 처리해주어야 함
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        num = 10;
        i++;
      } else {
        num = dartResult[i];
      }
    }
    // 보너스 영역
    if (dartResult[i] === "S") arr.push(num);
    if (dartResult[i] === "D") arr.push(num ** 2);
    if (dartResult[i] === "T") arr.push(num ** 3);

    // 스타상 (현재 점수 + 이전 점수의 2배)
    if (dartResult[i] === "*") {
      arr[arr.length - 1] *= 2; // 배열의 마지막 요소 2배
      arr[arr.length - 2] *= 2; // 배열의 마지막에서 2번째 요소 2배
    }

    // 아차상 (현재 점수를 마이너스)
    if (dartResult[i] === "#") {
      arr[arr.length - 1] *= -1;
    }
  }
  // arr의 저장된 모든 점수 합산
  for (let j = 0; j < arr.length; j++) {
    answer += Number(arr[j]);
  }

  return answer;
}
