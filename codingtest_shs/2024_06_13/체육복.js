function solution(n, lost, reserve) {
  let answer = 0;
  let lost_arr = [];
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 체육복을 도난당했지만 여벌이 있는 학생을 찾아 저장
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
    } else {
      lost_arr.push(lost[i]);
    }
  }

  for (let j = 0; j < lost_arr.length; j++) {
    // 앞 번호 학생에게 빌릴 수 있다면
    if (reserve.includes(lost_arr[j] - 1)) {
      reserve.splice(reserve.indexOf(lost_arr[j] - 1), 1);
      answer += 1;
    }

    // 뒷 번호 학생에게 빌릴 수 있다면 (앞 번호 학생에게 못 빌린 경우)
    else if (reserve.includes(lost_arr[j] + 1)) {
      reserve.splice(reserve.indexOf(lost_arr[j] + 1), 1);
      answer += 1;
    }
  }

  // 총 체육 수업을 들을 수 있는 학생
  answer = n - lost_arr.length + answer;
  return answer;
}
