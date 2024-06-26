//11일차 과제
function solution(s) {
  let answer = [];
  let tuples = {};
  let arr = s
    .replace(/{(.+)}/, "$1")
    .match(/{(\d*(?:,\d*)*)}/g, "$1")
    .map((ob) => ob.replace(/{(.+)}/, "$1"))
    .map((ob) => ob.split(","));

  arr.forEach((ob) => {
    ob.forEach((ob2) => (tuples[ob2] = 0));
  });
  arr.forEach((ob) => {
    ob.forEach((ob2) => tuples[ob2]++);
  });

  Object.entries(tuples)
    .sort((a, b) => b[1] - a[1])
    .forEach((ob) => answer.push(Number(ob[0])));

  return answer;
}
