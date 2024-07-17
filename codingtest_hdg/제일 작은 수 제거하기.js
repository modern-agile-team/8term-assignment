//5일차 과제
function solution(arr) {
  return arr.length === 1
    ? [-1]
    : (arr.splice(arr.indexOf(Math.min(...arr)), 1), arr);
  // , 연산자로 arr.splice(arr.indexOf(Math.min(...arr)), 1)가 실행된후 arr을 내보내기
}
