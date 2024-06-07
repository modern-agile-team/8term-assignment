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
  let win_cnt = 0;
  let unknown_num = 0;

  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      win_cnt += 1;
    }
    if (lottos[i] === 0) {
      unknown_num += 1;
    }
  }

  let high_rank = ranking(win_cnt + unknown_num);
  let low_rank = ranking(win_cnt);

  answer[0] = high_rank;
  answer[1] = low_rank;
  return answer;
}
