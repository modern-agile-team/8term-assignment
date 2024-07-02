function solution(new_id) {
  let answer = "";

  // 1단계
  let step1 = new_id.toLowerCase();

  // 2단계
  let step2 = step1.replace(/[^a-z\d-_.]/g, "");

  // 3단계
  let step3 = step2.replace(/\.+/g, ".");

  // 4단계
  let step4 = step3.replace(/^\.|\.$/g, "");

  // 5단계
  let step5 = step4.replace(/^$/, "aaa");

  // 6단계
  let step6 = step5;
  if (step6.length >= 16) {
    step6 = step6.slice(0, 15);
  }
  step6 = step6.replace(/\.$/g, "");

  // 7단계
  let step7 = step6;
  if (step7.length <= 2) {
    step7 = step7.padEnd(3, step7[step7.length - 1]);
  }

  answer = step7;
  return answer;
}
