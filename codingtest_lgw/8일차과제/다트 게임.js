function solution(dartResult) {
  let answer = 0;
  let list = [];
  let record = [];

  list = dartResult.match(/([0-9]+(S|D|T))(\#|\*)?/g); // 다트별 점수를 배열로 나누기
  console.log(list);

  for (let i = 0; i < 3; i++) {
    // 조건에 맞게 점수로 만들기
    if (/S/.test(list[i])) {
      record[i] = list[i].match(/[0-9]+/)[0] * 1; // 1을 곱해준건 숫자형으로 바꿔주려고
    } else if (/D/.test(list[i])) {
      record[i] = list[i].match(/[0-9]+/) * list[i].match(/[0-9]+/);
    } else if (/T/.test(list[i])) {
      record[i] =
        list[i].match(/[0-9]+/) *
        list[i].match(/[0-9]+/) *
        list[i].match(/[0-9]+/);
    }
    console.log(record);

    if (/\*/.test(list[i])) {
      record[i] *= 2;
      if (i !== 0) {
        record[i - 1] *= 2;
      }
    }
    if (/\#/.test(list[i])) {
      record[i] *= -1;
    }
  }

  for (let i = 0; i < 3; i++) {
    // 점수 더 하 기
    answer += record[i];
  }

  return answer;
}
