function solution(s) {
  let sArr = eval(s.replace(/[{]/g, "[").replace(/[}]/g, "]"));
  sArr = sArr.sort((a, b) => a.length - b.length);
  let result = [];
  for (let i = 0; i < sArr.length; i++) {
    result.push(sArr[i].filter((val) => !result.includes(val))[0]);
  }

  return result;
}
