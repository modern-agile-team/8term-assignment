function main() {
  let inPut = document.getElementById("inPut");

  if (inPut.value === "exit") alert("종료되었습니다.");
  else {
    //빈공간 다없애기
    let string = gettingRidOfBlanks(inPut);

    //입력을 받은거에서 곱,나누기를 배열로 꺼내봄
    let arr = breakDown(string);

    if (arr) {
      //배열의 첫번째 부터 곱,나누기 할껄 하나씩 계산하고 배열로 출력
      arr = makeCalculation(arr);

      //곱, 나눗셈 계산한 배열을가지고 원래 문자열에 끼워 넣음
      string = swapping(string, arr);
    }
    //이제 앞에서 부터 계산하기
    let number = additionCalculating(string);

    //계산한걸 출력하는 함수
    printOut(number);
  }
}

function gettingRidOfBlanks(input) {
  return input.value.replace(/\s+/g, "");
}

function breakDown(string) {
  return string.match(/\d*[*/]\d*(?:[*/]\d*)*/g);
}

function makeCalculation(arr) {
  return arr.map((ele) => {
    let arr = ele.match(/(\d+|\*|\/)(\.\d+)*/g);
    let number = Number(arr.shift());
    while (true) {
      if (arr[0] === "*") {
        number = multiplication(arr, number);
      } else if (arr[0] === "/") {
        number = division(arr, number);
      } else {
        break;
      }
    }
    return number;
  });
}

function swapping(string, arr) {
  for (let key of arr) {
    key = String(key);
    string = string.replace(/\d*[*/]\d*(?:[*/]\d*)*/, key);
  }
  return string;
}

function additionCalculating(string) {
  let arr = string.match(/(\d+|\+|\-)(\.\d+)*/g);
  let number = Number(arr.shift());
  while (true) {
    if (arr[0] === "+") {
      number = plus(arr, number);
    } else if (arr[0] === "-") {
      number = minus(arr, number);
    } else {
      break;
    }
  }
  return number;
}

function plus(arr, number) {
  arr.shift();
  number += Number(arr.shift());
  return number;
}

function minus(arr, number) {
  arr.shift();
  number -= Number(arr.shift());
  return number;
}

function multiplication(arr, number) {
  arr.shift();
  number *= Number(arr.shift());
  return number;
}

function division(arr, number) {
  arr.shift();
  number /= Number(arr.shift());
  return number;
}

function printOut(number) {
  document.getElementById("outPut").innerText = "결과: " + number + " 입니다.";
}
