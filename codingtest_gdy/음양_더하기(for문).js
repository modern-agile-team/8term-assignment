function solution(absolutes, signs) {
    let sum = 0;
    let answer = absolutes.map((value, index) =>signs[index] ? value : value *-1);
    for(let i = 0; i < answer.length; i++)
        {
            sum += answer[i];
        }
    return sum;
}