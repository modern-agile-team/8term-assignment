function solution(n) {
  let pizza = 0;
  for (let i = 0; i < 100; i++) {
    if (n <= 7 * i && n > 7 * (i - 1)) {
      pizza = i;
    }
  }
  return pizza;
}
