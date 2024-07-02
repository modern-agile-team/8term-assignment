function solution(s) {
  let arr = [...s];

  arr.sort(function (a, b) {
    if (a > b) return -1;
  });

  const str1 = arr.join("");

  return str1;
}
