//7일차 과제
function solution(new_id) {
  let answer = new_id
    .toLowerCase() //1
    .replace(/[^a-z0-9-_.]/g, "") //2
    .replace(/\.+/g, ".") //3
    .replace(/(^\.|\.$)/g, ""); //4
  if (answer == "") answer = "a"; //5
  answer = answer
    .replace(/(^.{15}).*/, "$1") //6
    .replace(/\.$/, ""); //6.5
  while (answer.length <= 2) answer += answer[answer.length - 1]; //7
  return answer;
}
