//8일차
function solution(dartResult) {
  let str = [];
  let save = 0;
  let sum = [];
  str = dartResult.match(/(\d.[*#]|\d\d.[*#]|\d\d.|\d.)/g);

  let loop = str.length;
  let i = 0;
  while (loop--) {
    let num = str[i].replace(/(\d\d|\d).*/g, "$1");
    let sign = str[i].replace(/\d+(.*)/g, "$1");
    let pow = sign[0] === "S" ? 1 : sign[0] === "D" ? 2 : 3;
    save = num ** pow;

    if (sign.length > 1) {
      if (sign[1] === "*") {
        save *= 2;
        if (i > 0) sum[sum.length - 1] *= 2;
      } else {
        save *= -1;
      }
    }
    sum.push(save);
    i++;
  }
  return sum.reduce((acc, cur) => acc + cur);
}
