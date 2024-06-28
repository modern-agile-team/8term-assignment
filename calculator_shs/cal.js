// 계산기의 전체 동작을 제어하는 함수
function calculator() {
  let input = document.querySelector('input[name="calculator"]');
  let expression = input.value;

  // 공백을 제거 후 문자열을 배열로 변환하는 함수
  function regex() {
    return expression.replace(/\s/g, '').match(/\d+|\D/g);
  }

  // 곱셉과 나눗셈 연산을 우선 처리하는 함수
  function calcMulDiv(expression) {
    let result = [];
    // expression 배열 안 첫 번째 숫자를 저장
    let currentNumber = Number(expression[0]);

    for (let i = 1; i < expression.length; i += 2) {
      let operator = expression[i];
      let nextNumber = Number(expression[i + 1]);

      if (operator === '*') {
        currentNumber = multiply(currentNumber, nextNumber);
      } else if (operator === '/') {
        currentNumber = divide(currentNumber, nextNumber);
      } else {
        // 곱셈 or 나눗셈이 아닌 연산자는 그대로 결과 배열에 추가
        result.push(currentNumber);
        result.push(operator);
        currentNumber = nextNumber;
      }
    }
    result.push(currentNumber);
    return result;
  }

  // 덧셈, 뺄셈 연산하는 함수
  function calcAddSub(expression) {
    let answer = Number(expression[0]);

    for (let i = 1; i < expression.length; i += 2) {
      let operator = expression[i]; // expression[i]에 모두 연산자가 들어오도록 정리하여 변수 저장
      let operand = Number(expression[i + 1]); // 피연산자(연산자 제외)는 expression의 인덱스 값에서 1을 더해서 저장

      switch (operator) {
        case '+':
          answer = add(answer, operand);
          break;
        case '-':
          answer = subtract(answer, operand);
          break;
      }
    }
    console.log(answer);
    return formatResult(answer);
  }

  // 덧셈 연산 함수
  function add(a, b) {
    return a + b;
  }

  // 뺄셈 연산 함수
  function subtract(a, b) {
    return a - b;
  }

  // 곱셈 연산 함수
  function multiply(a, b) {
    return a * b;
  }

  // 나눗셈 연산 함수
  function divide(a, b) {
    if (b === 0) {
      throw new Error('0으로 나눌 수 없습니다.');
    }
    return a / b;
  }

  // answer의 값이 정수인지 소수인지 판단하는 함수
  function formatResult(answer) {
    if (Number.isInteger(answer)) {
      return answer.toString();
    } else {
      return answer.toFixed(2);
    }
  }

  // 실행 결과를 화면에 나타내는 함수
  function InnerResult(answer) {
    document.getElementById('result').innerText = answer;
  }

  // 'exit' 입력 시 종료 경고 알림 표시 후 그 외의 경우 계산을 실행하는 함수
  function end() {
    if (expression === 'exit') {
      return alert('종료');
    } else {
      // 곱셈 or 나눗셈 먼저 계산한 후 덧셈 or 뺄셈을 계산
      const finalResult = calcAddSub(calcMulDiv(regex()));
      // 최종 결과를 화면에 출력
      InnerResult(finalResult);
    }
  }

  end();
}
