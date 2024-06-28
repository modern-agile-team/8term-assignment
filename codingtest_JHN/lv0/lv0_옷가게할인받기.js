//1. if - elseif - else
function solution(price) {
  let answer = price;
  if (price >= 100000 && price < 300000) {
    price *= 0.95;
  } else if (price >= 300000 && price < 500000) {
    price *= 0.9;
  } else if (price >= 500000) {
    price *= 0.8;
  } else {
    price === price;
  }
  answer = Math.floor(price); //소수점이하 없애기

  console.log(price);

  return answer;
}
//2. 이중배열 / 화살표함수 이용 
const discounts = {
    [500000, 20],
    [300000, 10],
    [100000, 5],
}
const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0])
            return Math.floor(price - price * discount[1] / 100)
    return price;
}


