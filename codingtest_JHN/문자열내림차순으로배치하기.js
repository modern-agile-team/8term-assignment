/*const b = [3,2,4,5,1];//내림차순

const des = b.sort((x,y)=>(y - x));
console.log(des);
*/
const s = "Zbcdefg";
function solution(s) {
  const arr = s.split(""); //문자열을 나눠서 각각 분석
  arr.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
  return arr.join("");
}
console.log(solution(s)); //감사합니다아!!!!!!!!!
