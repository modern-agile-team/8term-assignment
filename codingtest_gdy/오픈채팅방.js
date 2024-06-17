function solution(record) {
  let command = [];
  let userID = {};
  let message = [];

  for (let ele of record) {
    command.push(ele.split(" "));
  }

  for (let i = 0; i < command.length; i++) {
    if (command[i][0] === "Enter" || command[i][0] === "Change") {
      userID[command[i][1]] = command[i][2];
    }
  }

  for (let i = 0; i < command.length; i++) {
    if (command[i][0] === "Enter") {
      message.push(`${userID[command[i][1]]}님이 들어왔습니다.`);
    } else if (command[i][0] === "Leave") {
      message.push(`${userID[command[i][1]]}님이 나갔습니다.`);
    }
  }
  return message;
}
