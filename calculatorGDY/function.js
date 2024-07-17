//값을 얻어오는 함수
function getValue(id) {
  return document.getElementById(id).value;
}

//값 설정 함수 값, 어디로 넣을지 id 값 받음
function setValue(val, id) {
  document.getElementById(id).value = val;
}

//계산하기(메인)함수
function main() {
  const val = getValue("input");
  exception(val);
  result = +calculator(val);
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  setValue(result, "output");
}
//공백 제거 함수
function notBlank(val) {
  const value = val.replace(/[ ]/g, "").match(/[\d.]+|[*/+-]/gm);
  return value;
}

//곱하기, 나누기를 해주는 함수
function calculator(val) {
  const result = mulDiv(val);
  return addSub(result);
}

function div(a, b) {
  return Number(a) / Number(b);
}
function mul(a, b) {
  return Number(a) * Number(b);
}
function add(a, b) {
  return Number(a) + Number(b);
}
function sub(a, b) {
  return Number(a) - Number(b);
}

function mulDiv(val) {
  const value = notBlank(val);
  let i = 0;
  while (value.includes("*") || value.includes("/")) {
    if (value[i] === "*") {
      value[i - 1] = mul(value[i - 1], value[i + 1]);
      value.splice(i, 2);
      i = 0;
    } else if (value[i] === "/") {
      value[i - 1] = div(value[i - 1], value[i + 1]);
      value.splice(i, 2);
      i = 0;
    }
    i++;
  }

  return value.join("");
}
//더하기, 빼기를 해주는 함수
function addSub(val) {
  const value = notBlank(val);
  let i = 0;
  while (value.includes("+") || value.includes("-")) {
    if (value[i] === "+") {
      value[i - 1] = add(value[i - 1], value[i + 1]);
      value.splice(i, 2);
      i = 0;
    } else if (value[i] === "-") {
      value[i - 1] = sub(value[i - 1], value[i + 1]);
      value.splice(i, 2);
      i = 0;
    }
    i++;
  }

  return value.join("");
}
//예외처리
function exception(val) {
  exit(val);
  notDivided(val);
  notString(val);
}

function exit(val) {
  if (val === "exit") {
    alert("종료되었습니다.");
    window.close();
  }
}
function notDivided(val) {
  if (/(?<=[/])0+/.test(val)) {
    alert("0으로 나눌 수 없습니다.");
    setValue("", "input");
  }
}
function notString(val) {
  if (/[a-zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(val)) {
    alert("문자는 입력할 수 없습니다.");
    setValue("", "input");
  }
}
