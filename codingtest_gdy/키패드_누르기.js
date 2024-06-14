function solution(numbers, hand) {
    let answer = [];
    const keyPad = {
        1:[0,0], 2:[0,1], 3:[0,2],
        4:[1,0], 5:[1,1], 6:[1,2],
        7:[2,0], 8:[2,1], 9:[2,2],
        '*':[3,0], 0:[3,1], '#':[3,2]
    };
    let Left = "*", Right = "#";
    let lx, ly, rx, ry, lxy, rxy;

    for(let i = 0; i < numbers.length; i++)
        {
            if((numbers[i] === 1 || numbers[i] === 4) || numbers[i] === 7)
                {
                    Left = numbers[i];
                    answer[i] = "L";
                }
            else if((numbers[i] === 3 || numbers[i] === 6) || numbers[i] === 9)
                {
                    Right = numbers[i];
                    answer[i] = "R";
                }
            else
                {  
                    lx = Math.abs(keyPad[Left][0] - keyPad[numbers[i]][0]);
                    ly = Math.abs(keyPad[Left][1] - keyPad[numbers[i]][1]);
                    
                    rx = Math.abs(keyPad[Right][0] - keyPad[numbers[i]][0]);
                    ry = Math.abs(keyPad[Right][1] - keyPad[numbers[i]][1]);
                    
                    lxy = lx + ly;//왼쪽의 현위치부터 가고자하는 곳 까지의 거리
                    rxy = rx + ry;//오른쪽의
                    
                    if(lxy == rxy)
                        {
                            if(hand === "left"){
                                answer[i] = "L";
                                Left = numbers[i];
                            }
                            else
                                {
                                    answer[i] ="R";
                                    Right = numbers[i];
                                }
                        }
                    else if(lxy > rxy)
                        {
                            answer[i] = "R";
                            Right = numbers[i];
                        }
                    else
                        {
                            answer[i] = "L";
                            Left = numbers[i]
                        }
                }
        }
    return answer.join('');
}