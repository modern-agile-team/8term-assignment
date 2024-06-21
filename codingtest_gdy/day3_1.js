//문자열 다루기 기본
function solution(s) {
    let answer = true;
    
    if(s.length === 4 || s.length === 6)
        {
            for(let i = 0; i < s.length; i++)
                {
                    if(s[i].charCodeAt() >= 65 )
                        {
                            answer = false;
                            break;
                        }
                }
        }
    else
        {
            answer = false;
        }

    return answer;
}