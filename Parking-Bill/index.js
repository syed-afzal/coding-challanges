const calculateParkingBill = (E, L) => {
  E = E.split(':');
  L = L.split(':');
  let hoursDiff = L[0] - E[0];
  let minutesDiff = L[1] - E[1];
  return 2 + 3 + (hoursDiff >= 1 ? ((hoursDiff - 1) * 4) : 0) + (hoursDiff >= 1 && minutesDiff > 1 ? 4 : 0);
}
console.log(calculateParkingBill("10:00", "13:21"))
console.log(calculateParkingBill("10:00", "10:01"))
// console.log(calculateParkingBill("10:00", "10:45"))
// console.log(calculateParkingBill("17:00", "18:48"))


// function solution(N) {
//   let K = 0;
//   while((N % Math.pow(2,K+1)) == 0) {
//     K++;
//   }
//   return K;
//   // write your code in JavaScript (Node.js 8.9.4)
// }
