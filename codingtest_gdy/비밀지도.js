function solution(n, arr1, arr2) {
    let jido = "";
    arr1 = arr1.map((val) => val.toString(2).replace(/1/g,'#').replace(/0/g,' ').padStart(n,' '));
    arr2 = arr2.map((val) => val.toString(2).replace(/1/g,'#').replace(/0/g,' ').padStart(n,' '));
    for(let i = 0; i < n; i++)
        {
            let ar1 = arr1[i];
            let ar2 = arr2[i];
            for(let j = 0; j < n; j++)
                {
                    if((ar1[j] !== ar2[j]) || (ar1[j] === '#' && ar2[j] === '#'))
                        {
                            jido += "#"
                        }
                    else
                        {
                            jido += " ";
                        }
                }
            jido +="/";
            
        }
    jido = jido.slice(0, -1);
    return jido.split('/');
}