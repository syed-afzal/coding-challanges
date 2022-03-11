const dictionary = {
  'a': 1,
  'b': 2,
  'c': 2,
  'd': 2,
  'e': 2,
  'f': 3,
  'g': 3,
  'h': 3,
  'i': 4,
  'j': 4,
  'k': 4,
  'l': 5,
  'm': 5,
  'n': 5,
  'o': 6,
  'p': 6,
  'q': 6,
  'r': 7,
  's': 7,
  't': 7,
  'u': 8,
  'v': 8,
  'w': 8,
  'x': 9,
  'y': 9,
  'z': 9,
};

const generateSubStrings = (str) => {
  const result = [];
  for(let i=0;i<str.length;i++){
    for(let j=0;j+i+1<=str.length;j++){
      result.push(str.substring(j,j+i+1))
    }
  }
  return result;
};

const subStringsCount = (inputString) => {
  const subStrings = generateSubStrings(inputString);
  let count = 0;
  subStrings.forEach((str) => {
    const sum = str.split('').reduce((acc, curr) => acc + dictionary[curr], 0);
    if (sum % str.length === 0) {
      count += 1;
    }
  });
  return count;
};

console.log(subStringsCount('abdulabashirkhanwaseemasifwaleedafzalhunainasadullahjabirkhanasdflkjhfg'))