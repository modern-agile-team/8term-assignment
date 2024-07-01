function solution(s) {
  var answer = true;
  const arr = [...s];
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "p" || arr[i] == "P") {
      num1++;
    } else if (arr[i] == "y" || arr[i] == "Y") {
      num2++;
    }
  }

  if (num1 != num2) {
    answer = false;
  }

  return answer;
}
