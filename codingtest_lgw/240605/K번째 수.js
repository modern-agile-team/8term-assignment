function solution(array, commands) {
  let answer = [];
  let num = 0;

  for (let i = 0; i < commands.length; i++) {
    let newarr1 = [];

    for (let m = commands[i][0] - 1; m <= commands[i][1] - 1; m++) {
      newarr1[num] = array[m];
      num++;
    }
    newarr1.sort((a, b) => {
      return a - b;
    });
    answer[i] = newarr1[commands[i][2] - 1];

    console.log(answer[i]);
  }
  return answer;
}
