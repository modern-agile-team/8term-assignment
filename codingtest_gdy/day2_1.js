//수박수박수박수
function solution(n) {
    let answer = '';
    let subak = 1;
    for(let i = 0; i < n; i++)
        {
            if(subak)
                {
                    answer = answer + "수";
                    subak = false;
                }
            else
                {
                    answer = answer + "박";
                    subak = true;
                }
            
        }
    return answer;
}