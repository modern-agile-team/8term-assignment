//1. 변수 하나하나 정하기
function solution(money) {
  let cup = Math.floor(money / 5500);
  let change = money % 5500;
  let result = [cup, change];
  return result;
}
//2. 변수 없이 바로
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
