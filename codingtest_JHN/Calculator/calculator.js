function getVal() {
  const inputVal = document.getElementById("inputVal").value;
  if (inputVal === "exit") {
    end();
  } else {
    const equation = testVal(inputVal);
    finalCal(equation);
  }
}

function testVal(s) {
  return s
    .replace(/\+/g, "~+~")
    .replace(/\-/g, "~-~")
    .replace(/\*/g, "~*~")
    .replace(/\//g, "~/~")
    .replace(/\(/g, "~(~")
    .replace(/\)/g, "~)~")
    .replace(/\s/g, "")
    .split("~")
    .filter(Boolean);
}

function finalCal(equation) {
  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === "*" || equation[i] === "/") {
      if (equation[i] === "*") {
        equation.splice(
          i - 1,
          3,
          Number(equation[i - 1]) * Number(equation[i + 1])
        );
      } else {
        equation.splice(
          i - 1,
          3,
          Number(equation[i - 1]) / Number(equation[i + 1])
        );
      }
    }
  }
  calAddSub(equation);
}

function calAddSub(equation) {
  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === "+" || equation[i] === "-") {
      if (equation[i] === "+") {
        equation.splice(
          i - 1,
          3,
          Number(equation[i - 1]) + Number(equation[i + 1])
        );
      } else {
        equation.splice(
          i - 1,
          3,
          Number(equation[i - 1]) - Number(equation[i + 1])
        );
      }
    }
  }
  myFunction(equation[0].toFixed(2));
}

function myFunction(s) {
  document.getElementById("result").innerText = s;
}

function end() {
  alert("종료");
}
