function solution(dartResult) {
  const regex1 = /[\d]+[SDT][*#]|\d+[SDT]/;
  const regex2 = /\d+/;
  let number = [];
  let score;
  let opt = "";
  let sum = [];

  for (let i = 0; i < 3; i++) {
    number[i] = dartResult.match(regex1)[0];
    dartResult = dartResult.replace(regex1, "");
  }
  console.log(number);
  for (let i = 0; i < 3; i++) {
    answer = number[i];
    score = Number(number[i].match(regex2)[0]);
    number[i] = number[i].replace(regex2, "");
    opt = number[i];
    if (opt[0] === "S") {
      sum[i] = Math.pow(score, 1);
    } else if (opt[0] === "D") {
      sum[i] = Math.pow(score, 2);
    } else {
      sum[i] = Math.pow(score, 3);
    }

    if (opt[1] === "*") {
      sum[i] *= 2;
      if (i > 0) {
        sum[i - 1] = sum[i - 1] * 2;
      }
    } else if (opt[1] === "#") {
      sum[i] *= -1;
    }
  }

  return sum[0] + sum[1] + sum[2];
}
