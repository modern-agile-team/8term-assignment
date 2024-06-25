function solution(N, stages) {
  let answer = []; // 스테이지와 실패율을 담을 배열
  let except = stages.length; // 아직 스테이지를 클리어하지 못한 사용자 수

  // 스테이지가 1번부터 있기 때문에 1번부터 N번까지 반복
  for (let i = 1; i <= N; i++) {
    let arr = 0;
    // 현재 스테이지(i)에 도달한 사용자 수 계산
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) {
        arr++;
      }
    }

    // answer에 스테이지와 실패율을 저장
    answer.push([i, arr / except]);
    // 현재 스테이지를 클리어하지 못한 사용자를 제외
    except -= arr;
  }

  // 실패율(2번째 원소)을 기준으로 내림차순 정렬
  answer = answer.sort((a, b) => b[1] - a[1]);

  // 최종 결과를 담을 배열
  let result = [];
  for (let k = 0; k < answer.length; k++) {
    // answer 배열의 각 요소의 첫 번째 값만 result에 저장
    result.push(answer[k][0]);
  }

  return result;
}
