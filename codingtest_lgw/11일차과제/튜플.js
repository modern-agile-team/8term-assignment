function solution(s) {
  let answer = [];
  let arr1 = [];
  let arr2 = [];
  let count = {};

  arr1 = s.match(/\d+/g); // arr에 중괄호 안에 값들을 넣는다.
  arr2 = [...new Set(arr1)];

  for (let i = 0; i < arr2.length; i++) {
    //count 객체에 값을 0으로 선언
    count[arr2[i]] = 0;
  }

  for (let i = 0; i < arr2.length; i++) {
    //count 객체에 각 숫자의 갯수를 저장
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        count[arr2[i]]++;
      }
    }
  }

  let arr3 = [];

  for (let key in count) {
    //객체의 키와 값을 arr3에 2차원 배열로 저장
    arr3.push([key, count[key]]);
  }

  arr3.sort((a, b) => b[1] - a[1]); //값을 기준으로 내림차순

  for (let key of arr3) {
    //answer에 삽입
    answer.push(Number(key[0]));
  }

  return answer;
}
