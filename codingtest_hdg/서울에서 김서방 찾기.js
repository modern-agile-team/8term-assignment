//과제1
function solution(seoul) {
  var answer = "";

  for (let i = 0; i < 1000; i++) {
    if (seoul[i] === "Kim") {
      answer = "김서방은 " + i + "에 있다";
      break;
    }
  }

  return answer;
}
