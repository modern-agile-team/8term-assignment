let inputVal; //전역변수
let arrDel;

//1. 값을 받아서, 공백없애기 함수까지 입력하는 함수
function getVal() {
  inputVal = document.getElementById("inputVal").value; //입력받은 값 변수 inputVal
  arrDel = testVal(inputVal);
  myFunction(finalCal());
}

// 입력값에 공백 없애기 + 그 값을 배열화하기
function testVal(s) {
  let delSpace = s.replace(/\s/g, "");
  return [...delSpace];
}

//2. 연산자가 없어질 때까지의 함수
function finalCal() {
  while (arrDel.length === 1) {
    ///
    priority();
  }
  return; //마지막값
}
//3. 연산자 우선순위 뽑는(곱셈, 나눗셈) 함수 - 그 다음 덧셈, 뺄셈
function priority() {
  for (let i = 0; i < arrDel.length; i++) {
    if (arrDel[i] === "*" || arrDel[i] === "/") {
      calMulDiv(i);
      return;
    } else if (arrDel[i] === "+" || arrDel[i] === "-") {
      calAddSub(i);
      return;
    }
  }
}
//4. 곱셈, 나눗셈 연산자 나왔을 때
function calMulDiv(i) {
  let answer = 0;
  if (arrDel[i] === "*") {
    answer = multi(arrDel[i - 1], arrDel[i + 1]);
  } else {
    answer = division(arrDel[i - 1], arrDel[i + 1]);
  }
  arrDel.splice(i - 1, 3, answer);
}

//5. 덧셈, 뺄셈 연산자 나왔을 때
function calAddSub(i) {
  let answer = 0;
  if (arrDel[i] === "+") {
    answer = add(arrDel[i - 1], arrDel[i + 1]);
  } else {
    answer = subtract(arrDel[i - 1], arrDel[i + 1]);
  }
  arrDel.splice(i - 1, 3, answer);
}

//6.  result 나오게 하는 함수
function myFunction(s) {
  let result = document.getElementById("result");
  result.innerHTML = s.toFixed(2);
}

//+. 계산구현
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

//소수 둘째자리까지 구현하기

//7. exit 입력 시 종료 경고창 출력 함수
function end() {
  if (inputVal === "exit") {
    alert("종료");
  } else {
    //최종결과화면출력
    getVal();
  }
}
