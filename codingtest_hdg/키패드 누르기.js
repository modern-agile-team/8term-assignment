//10일차 과제
function solution(numbers, hand) {
  let answer = "";
  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let leftHand = "*";
  let rightHand = "#";
  let keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
    "*": [3, 0],
    "#": [3, 2],
  };

  function ClickCloseHand(key, hand) {
    let leftLength = keyPad[key]
      .map((num, index) => Math.abs(num - keyPad[leftHand][index]))
      .reduce((acc, cur) => acc + cur);
    let rigthLength = keyPad[key]
      .map((num, index) => Math.abs(num - keyPad[rightHand][index]))
      .reduce((acc, cur) => acc + cur);

    if (leftLength < rigthLength) {
      answer += "L";
      //왼손을 움직이기
      leftHand = key;
    } else if (leftLength > rigthLength) {
      answer += "R";
      //오른손을 움직이기
      rightHand = key;
    } else {
      //hand 로 움직이기
      if (hand === "left") {
        answer += "L";
        leftHand = key;
      } else {
        answer += "R";
        rightHand = key;
      }
    }
  }

  for (let key of numbers) {
    if (left.includes(key)) {
      answer += "L";
      //왼손 움직이기
      leftHand = key;
    } else if (right.includes(key)) {
      answer += "R";
      //오른손 움직이기
      rightHand = key;
    } else {
      //더 가까운 손으로 짜기
      ClickCloseHand(key, hand);
    }
  }

  return answer;
}
