function solution(new_id) {
    new_id = new_id.toLowerCase();//1단계
    const regex6 =/.{15}/;
    const regex2 = /[^a-z0-9-_.]+/g; 
    let str1 = new_id.replace(regex2,'');//2단계 소문자, 숫자, -, _, .만 남기고 제거
    str1 = str1.replace(/\.{2,}/g,'.');// 3단계
    str1 = str1.replace(/^\.|\.$/g,'');// 4단계
    if(str1.length === 0)//5단계 .은 문자열 전체 만약 없으면 if문 안으로
        {
            str1 = 'a';
        }

    if(str1.length >= 16)// 6단계
        {
            str1 = str1.match(regex6).join();
            str1 = str1.replace(/\.$/g,'');
        }

    if(str1.length <= 2)//7단계
        {
            let Laststr = str1.match(/.$/g).join();
            
            for(let i = str1.length; i < 3; i++)
                {
                    str1 = str1 + Laststr;
                }
        }
        
    return str1;
}