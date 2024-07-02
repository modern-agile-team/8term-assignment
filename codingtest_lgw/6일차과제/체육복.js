function solution(n, lost, reserve) {
  let answer = 0;
  n -= lost.length;
  let min = lost.length;
  min = lost.length > reserve.length ? reserve.length : lost.length;
  console.log(n, min);

  lost.sort(function (a, b) {
    //정렬한다
    return a - b;
  });
  reserve.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < min; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        // 여벌의 옷을 가지고 자기꺼 도난을 당한 경우
        lost[i] = 100;
        reserve[j] = 120;
        console.log(lost, reserve);
        n++;
        console.log(n);
        break;
      }
    }
  }

  if (min === lost.length) {
    //lost가 더 적거나 같은경우
    for (let i = 0; i < min; i++) {
      //lost 만큼 반복
      for (let j = 0; j < reserve.length; j++) {
        //reserve 만큼 반복
        if (lost[i] <= reserve[j] + 1 && lost[i] >= reserve[j] - 1) {
          reserve[j] = 0;
          console.log(reserve);
          n++;
          console.log(n);
          break;
        }
      }
    }
  } else {
    //reverse가 더 적은경우
    for (let i = 0; i < min; i++) {
      //reserve 만큼 반복
      for (let j = 0; j < lost.length; j++) {
        //lost 만큼 반복
        if (reserve[i] <= lost[j] + 1 && reserve[i] >= lost[j] - 1) {
          lost[j] = 0;
          console.log(reserve);
          n++;
          console.log(n);
          break;
        }
      }
    }
  }
  return n;
}
