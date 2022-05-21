const calculateParkingBill = (E, L) => {
  E = E.split(':');
  L = L.split(':');
  let hoursDiff = L[0] - E[0];
  let minutesDiff = L[1] - E[1];
}
console.log(calculateParkingBill("10:00", "13:21"))
console.log(calculateParkingBill("10:00", "10:01"))