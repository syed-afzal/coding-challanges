const solution = (message, K) => {
  const words = message.split(' ');
  let result = '';
  let currentMessage = '';
  for(let i=0; i<words.length; i++) {
    currentMessage += words[i] + ' ';
    if(currentMessage.length > K+1) {
      break;
    } else {
      result += words[i] + ' ';
    }
  }
  console.log(result.length);
  return result.trim();
};

console.log(solution('Codility We test coders', 14));
console.log(solution('The quick brown fox jumps over the lazy dog', 39));