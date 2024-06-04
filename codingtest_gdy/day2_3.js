//가운데 글자 가져오기
function solution(s) {
    const middle = Math.trunc(s.length / 2);
    return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}