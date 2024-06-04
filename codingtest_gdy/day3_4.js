function solution(numbers) {
    //두 개 뽑아서 더하기
    let answer = [];
    let result = [];
    for(let i = 0; i < numbers.length; i++)
        {
            for(let j = i; j < numbers.length; j++)
                {
                    if(numbers[j+1] === 0 || numbers[j+1]){
                        answer.push(numbers[i] + numbers[j+1]);
                    }
                }
        }
    answer.forEach(
        (ele)=>{
            
            if(!result.includes(ele))
                {
                    result.push(ele);
                }
    });
    console.log(answer);
    result.sort((a,b)=>(a-b));
    return result;
}