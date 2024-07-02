//6일차 과제
function solution(n, lost, reserve) {
  let chack = [];
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    // 1은 있음 0은 없음 2는 여벌
    chack[i] = 1;
    if (i === reserve[0] - 1) {
      chack[i]++;
      reserve.shift();
    }
    if (i === lost[0] - 1) {
      chack[i]--;
      lost.shift();
    }
  }

  if (chack[0] === 2 && chack[1] === 0) {
    //첫번째 chack 원소확인
    chack[0]--;
    chack[1]++;
  }
  for (let i = 1; i < n - 1; i++) {
    //2번째부터 n-1번째까지(인덱스 건들까봐)
    if (chack[i] === 2 && chack[i - 1] === 0) {
      chack[i]--;
      chack[i - 1]++;
    } else if (chack[i] === 2 && chack[i + 1] === 0) {
      chack[i]--;
      chack[i + 1]++;
    }
  }
  if (chack[n - 1] === 2 && chack[n - 2] === 0) {
    //n번 확인
    chack[n - 1]--;
    chack[n - 2]++;
  }
  //1모두 더하기 if 2면 1더하기
  return chack.reduce((a, c) => (c > 1 ? a + 1 : a + c), 0);
}
