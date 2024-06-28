function solution(numer1, denom1, numer2, denom2) {
  const top = denom1 * numer2 + denom2 * numer1;
  const bottom = denom1 * denom2;
  let gcd = 1;

  for (let i = 2; i <= Math.min(top, bottom); i++) {
    if (top % i === 0 && bottom % i === 0) {
      gcd = i;
    }
  }
  let answer = [top / gcd, bottom / gcd];
  return answer;
}
