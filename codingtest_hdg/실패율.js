//9일차 과제
function solution(N, stages) {
  let answer = [];
  function StageFailure(stageId, failure) {
    this.stageId = stageId;
    this.failure = failure;
  }
  stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    let fail;
    let user = stages.length;
    let count = 0;
    while (i === stages[0]) {
      stages.shift();
      count++;
    }
    fail = user === 0 ? 0 : count / user;
    answer.push(new StageFailure(i, fail));
  }
  answer.sort((a, b) => b.failure - a.failure);
  return answer.map((answer) => answer.stageId);
}
