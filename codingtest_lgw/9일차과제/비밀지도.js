function solution(n, arr1, arr2) {
  let answer = Array.from({ length: n }, () => []); // 배열생성, undefined방지
  let newarr1 = [];
  let newarr2 = [];

  for (let i = 0; i < n; i++) {
    newarr1[i] = arr1[i].toString(2);
    newarr2[i] = arr2[i].toString(2);
  }

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (newarr1[i].length < n) {
        newarr1[i] = "0" + newarr1[i];
      }
      if (newarr2[i].length < n) {
        newarr2[i] = "0" + newarr2[i];
      }
    }
  }
  console.log(newarr1);
  console.log(newarr2);

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (newarr1[j][i] === "1" || newarr2[j][i] === "1") {
        answer[j] += "#";
      } else {
        answer[j] += " ";
      }
    }
  }
  console.log(answer);

  return answer;
}
