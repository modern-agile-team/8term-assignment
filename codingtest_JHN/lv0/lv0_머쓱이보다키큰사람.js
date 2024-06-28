//방법1 : for문 사용
function solution(array, height) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      result += 1;
    }
  }
  return result;
}
// 방법2 : filter 사용하기
function solution(array, height) {
  let answer = 0;
  answer = array.filter((item) => item > height);
  return answer.length;
}
