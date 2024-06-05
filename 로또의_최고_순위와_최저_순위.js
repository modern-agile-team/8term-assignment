function solution(lottos, win_nums) {
    let count = 0;
    const rank = [6,6,5,4,3,2,1];
    let answer = [];
    const count0 = lottos.filter((value)=>{if(value === 0)return true}).length;
    for(let i = 0; i < lottos.length; i++)
        {
            win_nums.map((value)=>{if(lottos[i] === value){count++;}});
        }
    answer[0] = rank[count + count0];
    answer[1] = rank[count];
    
    return answer;
}