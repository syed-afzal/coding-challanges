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
};