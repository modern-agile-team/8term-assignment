function solution(s){
    let answer = true;
    let pp=0,yy=0;
    for(let i=0;i<s.length;i++)
        {
            if(s[i]=='p' || s[i]=='P')
               {
                   pp++;
               }
            else if(s[i]=='y' || s[i]=='Y')
                {
                    yy++;
                }
        }
    if(pp!==yy)answer=false; 
    return answer;
}