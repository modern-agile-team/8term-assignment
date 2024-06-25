function solution(record) {
  let answer = [];

  // 사용자 ID와 닉네임을 저장할 배열
  let arr = [];

  for (let i = 0; i < record.length; i++) {
    // 공백이 있는 부분을 기준으로 단어를 쪼갬
    let item = record[i].split(" ");
    let action = item[0]; // Enter, Leave, Change
    let userID = item[1]; // 사용자 ID
    let nickname = item[2]; // 닉네임

    // 사용자가 나간 상태가 아니라면 배열에 닉네임을 저장
    if (action !== "Leave") {
      arr[userID] = nickname;
    }
  }

  for (let j = 0; j < record.length; j++) {
    let item = record[j].split(" ");
    let action = item[0];
    let userID = item[1];

    // 사용자가 오픈채팅방을 들어왔을 때
    if (action === "Enter") {
      answer.push(arr[userID] + "님이 들어왔습니다.");
    }

    // 사용자가 오픈채팅방을 나갔을 때
    if (action === "Leave") {
      answer.push(arr[userID] + "님이 나갔습니다.");
    }
  }
  return answer;
}
