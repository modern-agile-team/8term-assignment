function solution(d, budget) {
  d.sort((a, b) => a - b);

  let count = 0;

  if (d[0] > budget) {
    //맨 처음 값이 예산보다 크면 0개부서

    return 0;
  }

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];

    if (!d[i + 1]) {
      return d.length;
    } else if (budget < d[i + 1]) {
      return i + 1;
    }
  }
}
