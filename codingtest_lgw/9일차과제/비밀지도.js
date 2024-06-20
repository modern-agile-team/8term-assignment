function solution(n, arr1, arr2) {
  let answer = Array.from({ length: n }, () => []); // 배열생성, undefined방지
  let newarr1 = [];
  let newarr2 = [];

  for (let i = 0; i < n; i++) {
    //이진수로 변경 -> newarr 없이 이진수로 변경만 해도 되었을까요?
    newarr1[i] = arr1[i].toString(2);
    newarr2[i] = arr2[i].toString(2);
  }

  for (let j = 0; j < n; j++) {
    // 0을 넣어줌으로써 변의 길이를 n으로 맞춘다.
    for (let i = 0; i < n; i++) {
      if (newarr1[i].length < n) {
        newarr1[i] = "0" + newarr1[i];
      }
      if (newarr2[i].length < n) {
        newarr2[i] = "0" + newarr2[i];
      }
    }
  }
  console.log(newarr1); // 확인용출력
  console.log(newarr2); // 확인용출력

  for (let j = 0; j < n; j++) {
    // 두 지도 겹쳤을때 둘 다 1이라면 # 삽입, 아니면 공백
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
