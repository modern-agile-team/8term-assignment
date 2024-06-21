function solution(board, moves) {
    let baguni = [];
    let doll;
    let count = 0;
    //recude 각 원소(row)의 콜백함수 값을 result에 합산한 값 리턴
    //reduce에 내용에는 1.각 열에 대한 map()함수가 있다 
    //map함수 뒤에 []는 result를 2차원 배열로 만들기 위한 것으로 보임
    //map함수로 행(column)을 생성함 
    const newBoard = board.reduce((result, row) =>
    board.map( (_,i)=> [...(result[i] || []), row[i]]),[]);
    // 저 ||부분이 이해가 안갔는데 코딩앙마 영상에서도 || 연산자로 값이 있으면 result[i]를 풀어서 넣는다는 뜻이고 값이 없으면 []를 사용
    //다른 언어에서는 없는 || 연산자 사용이 너무 헷갈리네요
    for(let i = 0; i < newBoard.length; i++)//인형뽑기판의 행(row)만크 반복 
        {
            newBoard[i] = newBoard[i].filter((ele)=>ele !== 0);
            //뽑기판의 열(column)에서 0을 제거
        }
    for(let i = 0; i < moves.length; i++)
        {
            
            doll = newBoard[moves[i] - 1].shift()
            if(doll)
                {
                    if(baguni[baguni.length - 1] !== doll)//마지막 원소와 비교함
                        {
                            baguni.push(doll);
                        }
                    else//마지막 원소랑 들어올 값이 같아버린다면?
                        {
                            baguni.pop()//마지막 원소를 제거하고
                            //새로운것도 넣지않는다
                            count++;//카운터증가
                        }
                }
        }
    return count * 2;//인형은 2개씩 사라지니까 사라진 횟수 *2하면 인형의 수
    
}