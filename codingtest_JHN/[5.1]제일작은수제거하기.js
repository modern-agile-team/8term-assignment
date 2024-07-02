function solution(arr) {
  let result = [];
  if (arr.length >= 2) {
    minVal = Math.min(...arr); //Math.min(...arr) 배열 내 최솟값 찾기
    let arrFil = arr.filter((element) => element !== minVal);
    result = arrFil;
  } else {
    result = [-1];
  }
  return result;
}
