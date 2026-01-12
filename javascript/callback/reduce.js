// reduce func 사용방법
const result = [1, 3, 5, 7, 9].reduce((accumulate, currValue) => {
  const step = accumulate + currValue; // 1 + 3 = 4; 4 + 5 = 9; 9 + 7 = 16; 16 + 9 = 25;
  // console.log(`return is ${step}`);
  return step;
});
console.log(result);

console.log("------------------------------------");
console.log("------------------------------------");

// for를 통한 합계
const prices = [2500, 3200, 5000, 2000, 7000, 100];
let totalPrice = 0;
for (let price of prices) {
  totalPrice += price;
  console.log(totalPrice); //reduce의 step에 대응
}
// console.log(totalPrice);
console.log("------------------------------------");

//  첫번째 인자-콜백함수만 작성(매개변수 2개)
// const totalPrice2 = prices.reduce((acc, curr)=>{
//     const total = acc + curr;
//     console.log(total);
//     return total;
// });

// 두번째 인자-초기값 까지 추가로 지정하면 for 와 동일
const totalPrice2 = prices.reduce((acc, curr) => {
  const total = acc + curr;
  console.log(total);
  return total;
}, 0);

console.log("------------------------------------");
console.log("------------------------------------");
console.log("------------------------------------");

// 예제3. reduce 사용하여 가장 낮은값 찾기
const minPrice = prices.reduce((currMin, curr) => {
  if (curr < currMin) {
    return curr;
  } else return currMin;
});
console.log(minPrice);
