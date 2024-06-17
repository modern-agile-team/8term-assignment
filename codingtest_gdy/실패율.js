function solution(N, stages) {
  let count = [];
  let failureRate = [];
  let failureRate2 = [];
  let result = [];
  let stageLength = stages.length;
  for (let i = 0; i < N; i++) {
    count[i] = stages.filter((val) => val === i + 1).length;
  }
  //count는 실패한 사람 수
  console.log(count);
  for (let i = 0; i < N; i++) {
    if (count[i]) {
      failureRate[i] = count[i] / stageLength;
    } else {
      failureRate[i] = 0;
    }
    stageLength = stageLength - count[i];
  }

  failureRate2 = JSON.parse(JSON.stringify(failureRate));
  failureRate.sort((a, b) => b - a);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (failureRate[i] === failureRate2[j]) {
        result.push(j + 1);
        failureRate2[j] = null;
        continue;
      }
    }
  }

  return result;
}
