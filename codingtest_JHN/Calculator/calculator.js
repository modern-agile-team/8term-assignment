//0. 입력 -> 계산한다 -> 결과나온다.
//1. 연산자와 피연산자를 나눈다....
//2. 자바스크립트를 나가는 함수
//3. 곱셈과 나눗셈을 먼저 찾는다 ( 배열화 )
//4. 계산을 한다 -> 함수 4개

//값을 받아서 공백없애기 함수까지 하여 입력하는 함수
function getVal() {
  let inputVal = document.getElementById("inputVal").value;
  testVal(inputVal);
}

//공백없애기 함수
function testVal(x) {
  console.log(x.replace(/\s/g, ""));
  const testing = x.replace(/\s/g, "");
  myFunction(testing);
}

function myFunction(s) {
  let result = document.getElementById("result");
  result.innerHTML = s;
}

// function test(v) {
//     const expression = v.replace(/^[0-9\+\*\/\-]/, "");
//     return expression;
//   //연산자 피연산자 구분
// }

//2. 계산구현
// function add() {

// }

// function subtract{

// }

// function multi{

// }

// function division{

// }

//exit 입력 시 종료 경고창 출력 함수
function end() {
  if (inputVal === "exit") {
    alert("종료");
  }
}
