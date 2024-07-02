function solution(numbers, hand) {
  let answer = "";

  // 스마트폰 전화 키패드
  const phone = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

  // 초기 손 위치값 설정 (L: *, R: #)
  let left_hand = phone[3][0];
  let right_hand = phone[3][2];

  // numbers 배열 순회
  for (let i = 0; i < numbers.length; i++) {
    // 1, 4, 7
    if (numbers[i] % 3 === 1) {
      answer += "L";
      left_hand = numbers[i];
    }

    // 3, 6, 9
    else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
      answer += "R";
      right_hand = numbers[i];
    } else {
      // 키패드의 0을 11로 변환하여 계산
      if (numbers[i] === 0) numbers[i] = phone[3][1];

      // 버튼과 버튼 사이의 거리를 절댓값으로 변환
      let distance_L = Math.abs(numbers[i] - left_hand);
      let distance_R = Math.abs(numbers[i] - right_hand);

      // 열과 행의 거리를 몫 + 나머지로 구함
      distance_L = Math.floor(distance_L / 3) + Math.floor(distance_L % 3);
      distance_R = Math.floor(distance_R / 3) + Math.floor(distance_R % 3);

      // 거리가 같다면 왼손잡이 오른손잡이에 따라 다르게 계산
      if (distance_L === distance_R) {
        // 왼손잡이
        if (hand === "left") {
          answer += "L";
          left_hand = numbers[i];
        }

        // 오른손잡이
        else if (hand === "right") {
          answer += "R";
          right_hand = numbers[i];
        }
      }

      // 거리가 다르다면 가까운 쪽으로
      if (distance_L < distance_R) {
        answer += "L";
        left_hand = numbers[i];
      }
      if (distance_L > distance_R) {
        answer += "R";
        right_hand = numbers[i];
      }
    }
  }
  return answer;
}
