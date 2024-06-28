function solution(n) {
  const str = String(n);
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(str, mapfn);

  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}
