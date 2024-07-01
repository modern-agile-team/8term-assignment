function InputValue() {
  // 입력버튼 누를때 동작
  if (document.getElementById("text").value === "exit") {
    //id가 text인 input태그의 value로 exit가 입력 됐을때
    programEnd(); //종료함수로
  } else {
    //exit 가 아닐때
    let text = document.getElementById("text").value; //id가 text인 input태그의 value를 text 변수에 저장
    let numberAndOperator = text.match(/[0-9]+|(\*|\/|\+|\-)/g); //각 숫자와 문자를 나누고 배열에 저장
    console.log(numberAndOperator);
    calculate(numberAndOperator); // 계산함수로 ㄱㄱ
  }
}

function calculate(nAO) {
  let newNum = 0;
  let i = 1;
  while (i < nAO.length) {
    // *와 - 먼저 연산
    if (nAO[i] === "*") {
      // * 가 있다면.
      newNum = multiply(nAO[nAO.indexOf("*") - 1], nAO[nAO.indexOf("*") + 1]); //nAO에서 연산자의 왼쪽숫자와 오른쪽숫자를 argument로 보내겠다
      nAO.splice(nAO.indexOf("*") - 1, 3, newNum);
      continue; // 연산했다면 다시 처음부터 순회
    }
    if (nAO[i] === "/") {
      // / 가 있다면.
      newNum = divide(nAO[nAO.indexOf("/") - 1], nAO[nAO.indexOf("/") + 1]);
      nAO.splice(nAO.indexOf("/") - 1, 3, newNum);
      continue;
    }
    i += 2; // 다음 연산자 검사
  }

  i = 1; // i 초기화
  while (i < nAO.length) {
    // +와 - 연산
    if (nAO[i] === "+") {
      // + 가 있다면.
      newNum = plus(nAO[nAO.indexOf("+") - 1], nAO[nAO.indexOf("+") + 1]);
      nAO.splice(nAO.indexOf("+") - 1, 3, newNum);
      continue;
    }
    if (nAO[i] === "-") {
      // - 가 있다면.
      newNum = minus(nAO[nAO.indexOf("-") - 1], nAO[nAO.indexOf("-") + 1]);
      nAO.splice(nAO.indexOf("-") - 1, 3, newNum);
      continue;
    }
    i += 2; // 다음 연산자 검사
  }
  console.log(nAO);
  printMessage(newNum);
}

function printMessage(endNum) {
  if (endNum % 1 === 0) {
    document.getElementById("printNumber").innerHTML = endNum;
  } else {
    document.getElementById("printNumber").innerHTML = endNum.toFixed(2); // 소수점 둘째자리까지 계산
  }
}

function programEnd() {
  alert("종료");
}

function multiply(left, right) {
  newNum = Number(left) * Number(right);
  return newNum;
}

function divide(left, right) {
  newNum = Number(left) / Number(right);
  return newNum;
}

function plus(left, right) {
  newNum = Number(left) + Number(right);
  return newNum;
}

function minus(left, right) {
  newNum = Number(left) - Number(right);
  return newNum;
}

// 1 InputValue를 exit와 calculate로 나누기
// 2 exit 함수와 calculate 함수 만들기
// 3 각 연산자 함수 만들어주기
// 4 *와 / 연산 먼저 ㄱㄱ
// 5 +와 - 연산 ㄱㄱ
// 6 printMessage 함수 만들기
