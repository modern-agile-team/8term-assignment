function solution(n)
{
    let answer = String(n).split("");
    let result = 0;
    for(let ele of answer)
        {
            result = result + Number(ele);
            
        }
    return result;
}