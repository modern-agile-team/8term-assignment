function solution(s) {
  let answer = [];

  // 정규표현식으로 only 숫자만 추출
  let numbers = s.match(/\d+/g);

  // 숫자들의 빈도수를 계산
  let frequency = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = parseInt(numbers[i], 10);

    if (frequency[num]) frequency[num] += 1;
    else frequency[num] = 1;
  }

  // 빈도수에 따라 정렬된 숫자들을 저장
  let frequencyArr = [];
  for (let j = 0; j < frequency.length; j++) {
    if (frequency[j]) {
      frequencyArr.push({ num: j, cnt: frequency[j] });
    }
  }

  // frequencyArr를 빈도수에 따라 내림차순 정렬
  frequencyArr.sort((a, b) => b.cnt - a.cnt);

  // answer에 frequencyArr의 num을 넣어줌
  for (let k = 0; k < frequencyArr.length; k++) {
    answer.push(frequencyArr[k].num);
  }

  return answer;
}
