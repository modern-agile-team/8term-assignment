function solution(seoul) {
  let answer = "Kim";
  for (let i = 0; i <= 1000; i++) {
    if (seoul[i] === answer) {
      return `김서방은 ${i}에 있다`;
    }
  }
}
