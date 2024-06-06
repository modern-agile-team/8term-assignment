function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    let count = 0 ;
    let newLost = lost.filter((value)=>{
        if(reserve.includes(value))//포함되어있으면
            {
                reserve.splice(reserve.indexOf(value), 1);//reserve에서 삭제시키고
                return false;//newLost에도  포함시키지 않음
            }
        else
            {
                return true;//reserve에 없는 lost는 newLost에 포함시킴
            }
    });
    //newLost에는 중복이 제거된 애들이 들어있다
    //몇명이 중복되어서 빠져나갔는지 새야함 

   for(let i = 0; i < newLost.length; i++)
       {
           for(let j = 0; j < reserve.length; j++)
               {
                   if((newLost[i] - reserve[j] === -1) || (newLost[i] - reserve[j] === 1))
                       {
                           newLost[i] = 'x';
                           reserve[j] = 'x';
                           count ++;
                           
                       }
               }
       }
    
    return n - (newLost.length - count);
}