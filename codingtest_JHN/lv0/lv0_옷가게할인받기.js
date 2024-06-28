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
