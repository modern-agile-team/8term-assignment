function solution(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let answer = 0;
    for(let i = min; i <= max; i++ )
        {
            answer = answer + i;
            
        }
    
    return answer;
}