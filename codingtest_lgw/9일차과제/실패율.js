function solution(N, stages) {
  let answer = [];
  let now = [0]; // 스테이지에 도달했으나 클리어 하지 못한 플레이어
  let clear = [0]; // 스테이지에 도달한 플레이어
  let num = 0;
  let arr = [0]; // 스테이지 번호 넣어 줄 때 사용할 배열

  for (let i = 1; i <= N + 1; i++) {
    // 스테이지에 도달했으나 클리어 하지 못한 플레이어
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) {
        num++;
      }
    }
    now[i - 1] = num;
    num = 0;
  }

  for (let i = 0; i < now.length; i++) {
    // 스테이지에 도달한 플레이어
    for (let j = i; j < now.length; j++) {
      num += now[j];
    }
    clear[i] = num;
    num = 0;
  }

  for (let i = 0; i < now.length - 1; i++) {
    //실패율 계산
    if (clear[i] === 0) {
      // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의한다
      answer[i] = 0;
      arr[i] = 0;
      continue;
    }
    answer[i] = now[i] / clear[i];
    arr[i] = now[i] / clear[i];
  }

  answer.sort((a, b) => {
    //실패율 내림차순
    return b - a;
  });

  for (let j = 0; j < answer.length; j++) {
    //실패율 오름차순에 맞춰서 스테이지 번호 넣어주기
    for (let i = 0; i < answer.length; i++) {
      if (answer[j] === arr[i]) {
        answer[j] = arr.indexOf(arr[i]) + 1;
        arr[i] = -1;
      }
    }
  }
  return answer;
}
