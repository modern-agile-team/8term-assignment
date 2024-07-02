function solution(record) {
  let answer = [];
  let arr = []; //split으로 할당 받을 배열 선언
  let user = {}; //객체 선언
  let num = 0; //answer에 차례로 넣기 위한 변수

  for (let i = 0; i < record.length; i++) {
    // record를 새로운 배열에 split함수로 정보를 분할
    arr[i] = record[i].split(" ");
  }

  for (let i = 0; i < arr.length; i++) {
    //Leave가 있는 배열에 닉네임 추가
    if (arr[i][0] === "Leave") {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][1] === arr[j][1]) {
          arr[i][2] = arr[j][2];
        }
        break;
      }
    }
  }

  for (let i = 0; i < record.length; i++) {
    // 객체에 id와 맞는 닉네임 넣어주기
    if (arr[i][0] === "Enter") {
      user[arr[i][1]] = arr[i][2];
    }
    if (arr[i][0] === "Change") {
      user[arr[i][1]] = arr[i][2];
    }
  }

  for (let i = 0; i < record.length; i++) {
    // answer에 순서대로 출력값 넣어주기
    if (arr[i][0] === "Enter") {
      answer[num] = user[arr[i][1]] + "님이 들어왔습니다.";
      num++;
    }
    if (arr[i][0] === "Leave") {
      answer[num] = user[arr[i][1]] + "님이 나갔습니다.";
      num++;
    }
  }
  return answer;
}
