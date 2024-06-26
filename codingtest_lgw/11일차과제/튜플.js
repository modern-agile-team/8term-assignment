function solution(s) {
  let answer = [];
  let arr1 = [];
  let arr2 = [];
  let count = {};

  arr1 = s.match(/\d+/g); // arr에 중괄호 안에 값들을 넣는다.
  arr2 = [...new Set(arr1)];

  for (let i = 0; i < arr2.length; i++) {
    count[arr2[i]] = 0;
  }

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        count[arr2[i]]++;
      }
    }
  }

  let arr3 = [];

  for (let key in count) {
    arr3.push([key, count[key]]);
  }

  arr3.sort((a, b) => b[1] - a[1]);

  for (let key of arr3) {
    answer.push(Number(key[0]));
  }

  return answer;
}
