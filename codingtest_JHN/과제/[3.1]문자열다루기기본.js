function solution(s) {
  const pattern = /^[0-9]+$/;
  if (pattern.test(s)) {
    if (s.length === 4 || s.length === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
