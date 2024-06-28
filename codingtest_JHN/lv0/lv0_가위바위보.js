function solution(rsp) {
  //변수선언 result
  let result = [];
  //rsp문자열(배열화)에 순서대로 숫자파악 : for문
  const arr = rsp.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "2") {
      result[i] = "0";
    } else if (arr[i] === "0") {
      result[i] = "5";
    } else {
      result[i] = "2";
    }
  }
  return result.join("");
}
