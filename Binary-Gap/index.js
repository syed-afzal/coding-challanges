const convertDecimalToBinary = (decimal) => {
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
};

const BinaryGap = (N) => {
  const binary = convertDecimalToBinary(N);
  let maxGap = 0;
  let currentGap = 0;
  for (let i=0; i<binary.length; i++) {
    if (binary[i] === '0')
      currentGap++;
    else {
      maxGap = currentGap > maxGap ? currentGap : maxGap;
      currentGap = 0;
    }
  }
  return maxGap;
};

console.log(BinaryGap(1041));