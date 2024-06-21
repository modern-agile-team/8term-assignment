function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    // arr1, arr2의 배열을 2진수로 변환
    const binary_num = (arr1[i] | arr2[i]).toString(2);

    let arr = []; // 2진수 담을 배열

    // 2진수 배열의 길이에 n을 빼준 값을 2진수 배열의 길이만큼 순회
    for (let j = binary_num.length - n; j < binary_num.length; j++) {
      if (binary_num[j] === "1") {
        arr.push("#");
      } else {
        arr.push(" ");
      }
    }
    // arr 배열의 원소들을 모두 문자열로 바꿔주어 붙여줌
    answer.push(arr.join(""));
  }
  return answer;
}
