//문자열 내 p와 y의 개수 세기
const str = "asdfasfsssssss";
function solution(str) {
  let num_P = 0;
  let num_Y = 0;
  console.log(str, 1);
  //let : 가변, const : 불변
  for (let i = 0; i < str.length; i++) {
    str.split("");
    if (str[i] === "p" || str[i] === "P") {
      num_P++;
    }
    if (str[i] === "y" || str[i] === "Y") {
      num_Y++;
    }
  }
  console.log(str);
  if (num_P === num_Y) {
    return true;
  } else {
    return false;
  }
}

solution(str);
