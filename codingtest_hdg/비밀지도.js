//9일차 과제
function solution(n, arr1, arr2) {
  let answer = [];

  arr1 = arr1.map((num) => {
    num = num.toString(2);
    while (num.length < n) num = "0" + num;
    return num;
  });
  arr2 = arr2.map((num) => {
    num = num.toString(2);
    while (num.length < n) num = "0" + num;
    return num;
  });
  for (let i = 0; i < n; i++) {
    let save = "";
    for (let j = 0; j < n; j++) {
      save += arr1[i][j] == 1 || arr2[i][j] == 1 ? "#" : " ";
    }
    answer.push(save);
  }
  return answer;
}
