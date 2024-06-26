function button() {
  let input = document.querySelector('input[name="calculator"]');
  let expression = input.value;

  function InnerResult() {
    let result = document.getElementById('result');
    result.innerHTML = eval(expression).toFixed(2);
    return result;
  }

  function end() {
    if (expression === 'exit') {
      return alert('종료');
    } else {
      InnerResult();
    }
  }
  end();
}
