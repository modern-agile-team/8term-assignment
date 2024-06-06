function solution(absolutes, signs) {
    let answer = absolutes.map((value, index) => signs[index] ? value : value * -1 );
    return answer.reduce((arr, cur)=>(arr + cur));
}