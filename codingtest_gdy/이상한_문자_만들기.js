function solution(s) {
    let answer = s.split(' ');
    let result ="";
    for(let i = 0; i < answer.length; i++)
        {
            for(let j = 0; j < answer[i].length; j++)
                {
                    if(j % 2 === 1)
                        {
                            result += answer[i][j].toLowerCase();
                        }
                    else
                        {
                            
                            result += answer[i][j].toUpperCase();
                            
                        }
                }
            result += " ";
        }
    return result.slice(0,-1);
}