//k번째수
function solution(array, commands) {
    let answer=[];
    let result=[];
    for(let i = 0; i < commands.length; i++)
        {
            for(let j = (commands[i][0] - 1); j <= (commands[i][1] - 1); j++)
                {
                    answer.push(array[j]);
                }
            answer.sort((a,b) => (a - b));
            result[i] = answer[commands[i][2] - 1]
            answer.length = 0;
            
        }
    return result;
}