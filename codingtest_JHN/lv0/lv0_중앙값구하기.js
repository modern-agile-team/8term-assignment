function solution(array) {
  let ascArr = array.sort(function (a, b) {
    return a - b;
  }); //오름차순 정렬 .sort()
  let midVal = ascArr[Math.floor(array.length / 2)]; //중앙값 Math.floor사용
  return midVal;
}
