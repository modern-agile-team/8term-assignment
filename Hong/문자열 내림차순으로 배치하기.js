//2일차 과제2
function solution(s) {
    let answer = '';
    answer = s.split('').sort().reverse().join('');
    return answer;
}