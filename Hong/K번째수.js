function solution(array, commands) {
  let answer = [];
  for (let index = 0; index < commands.length; index++) {
    let i = commands[index][0] - 1;
    let j = commands[index][1];
    let k = commands[index][2] - 1;
    answer.push(array.slice(i, j).sort((a, b) => a - b)[k]);
  }
  return answer;
}
