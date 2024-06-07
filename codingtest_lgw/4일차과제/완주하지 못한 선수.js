function solution(participant, completion) {
  let answer = "";
  completion[completion.length] = "zzzzzzzzzz";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
