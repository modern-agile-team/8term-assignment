//값을 얻어오는 함수
function GetValue(id) {
  return document.getElementById(id).value;
}

//값 설정 함수 값, 어디로 넣을지 id 값 받음
function SetValue(val, id) {
  document.getElementById(id).value = val;
}

//계산하기(메인)함수
function main() {
  const val = GetValue("input");
  exception(val);
  let result = MulDiv(val);
  result = Number(AddSub(result));

  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }

  SetValue(result, "output");
}
//곱하기, 나누기를 먼저 해줘야 하기 때문에 두개의 함수로 나누어 구현

//곱하기, 나누기를 해주는 함수

function MulDiv(val) {
  value = val.replace(/[ ]/g, "").match(/[\d.]+|[*/+-]/gm);
  let i = 0;
  while (value.includes("*") || value.includes("/")) {
    if (value[i] === "*") {
      value[i - 1] = Number(value[i - 1]) * Number(value[i + 1]);
      value.splice(i, 2);
      i = 0;
    } else if (value[i] === "/") {
      value[i - 1] = Number(value[i - 1]) / Number(value[i + 1]);
      value.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return value.join("");
}
//더하기, 빼기를 해주는 함수
function AddSub(val) {
  value = val.replace(/[ ]/g, "").match(/[\d.]+|[*/+-]/gm);
  let i = 0;
  while (value.includes("+") || value.includes("-")) {
    if (value[i] === "+") {
      value[i - 1] = Number(value[i - 1]) + Number(value[i + 1]);
      value.splice(i, 2);
      i = 0;
    } else if (value[i] === "-") {
      value[i - 1] = Number(value[i - 1]) - Number(value[i + 1]);
      value.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return value.join("");
}
//예외처리
function exception(val) {
  if (val === "exit") {
    alert("종료되었습니다.");
  } else if (/(?<=[/])0+/.test(val)) {
    alert("0으로 나눌 수 없습니다.");
  } else if (/[a-zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(val)) {
    alert("문자는 입력할 수 없습니다.");
  }
}
