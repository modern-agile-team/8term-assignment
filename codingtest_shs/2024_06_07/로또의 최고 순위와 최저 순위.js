// 주어진 숫자에 따라 순위를 계산하는 함수
function ranking(count) {
  if (count === 6) {
    return 1;
  }
  if (count === 5) {
    return 2;
  }
  if (count === 4) {
    return 3;
  }
  if (count === 3) {
    return 4;
  }
  if (count === 2) {
    return 5;
  }
  if (count === 1 || count === 0) {
    return 6;
  }
}

function solution(lottos, win_nums) {
  let answer = [];
  let win_cnt = 0; // 당첨된 번호의 개수
  let unknown_num = 0; // 알 수 없는 번호(0)의 개수

  // 복권 번호와 당첨 번호를 오름차순으로 정렬하여 매칭
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      win_cnt += 1; // 당첨된 번호일 경우 개수 +
    }
    if (lottos[i] === 0) {
      unknown_num += 1; // 알 수 없는 번호일 경우 개수 +
    }
  }

  // 최고 순위와 최저 순위 변수
  let high_rank = ranking(win_cnt + unknown_num);
  let low_rank = ranking(win_cnt);

  // 결과를 answer의 각 index 번호에 저장
  answer[0] = high_rank;
  answer[1] = low_rank;

  return answer;
}
