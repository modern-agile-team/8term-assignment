function solution(participant, completion) {
    let obj= {};
   for(let i = 0; i < participant.length; i++)
       {//obj에 동일한 key값이 있으면 / 1 말고 기존  value값에 +1을 한 값을 넣고싶다
          obj[participant[i]]= obj[participant[i]] ? obj[participant[i]] + 1 : 1;
       }
 
    for(let i=0; i < completion.length; i++)
        {
            obj[completion[i]] = obj[completion[i]] - 1 ;
            
        }
    for(let key in obj)
        {
            if(obj[key] > 0)
                {
                    return key;
                }
        }
}