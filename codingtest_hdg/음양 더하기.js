//5일차 과제
function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    result += absolutes[i] * (signs[i] ? 1 : -1);
  }
  return result;
}

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, index) => acc + cur * (signs[index] ? 1 : -1),
    0 // ,0 으로 acc부분을 명시적으로 했는데, 안넣었을때 에러가 나는 포인트를 모르겠네요.
    // 안 작성해도 0이 디폴트인데 문제가 생기나요?
  );
}
