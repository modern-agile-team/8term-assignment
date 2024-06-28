//방법1 : for문으로 원소에 접근하기
function solution(numbers) {
  let newNum = []; //for문 안에 넣으면 안된다
  for (let i = 0; i < numbers.length; i++) {
    newNum[i] = numbers[i] * 2;
  }
  return newNum;
}
//방법2 : 메소드 사용하기
function solution(numbers) {
  const multiNumbers = numbers.map((number) => number * 2);
  return multiNumbers;
}
