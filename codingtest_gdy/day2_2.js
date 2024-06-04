//문자열 내림차순으로 배치하기
function solution(s) {
    let answer = s.split("");
    let result = "";
    answer.sort().reverse();
    for(let ele of answer)
        {
            result = result + ele;
        }
    return result;
}