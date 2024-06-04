function solution(s) {
  let p_count = 0;
  let y_count = 0;

  let s_lowerCase = s.toLowerCase();

  for (let i = 0; i < s_lowerCase.length; i++) {
    if (s_lowerCase[i] === "p") {
      p_count++;
    }
    if (s_lowerCase[i] === "y") {
      y_count++;
    }
  }
  return p_count === y_count ? true : false;
}
