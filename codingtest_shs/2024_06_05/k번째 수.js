function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let choice_array = array.slice(commands[i][0] - 1, commands[i][1]);
    choice_array.sort((a, b) => a - b);

    answer.push(choice_array[commands[i][2] - 1]);
  }
  return answer;
}
