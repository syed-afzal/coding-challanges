const solution = (message, K) => {
  const words = message.split(' ');
  let result = '';
  let currentMessage = '';
  for(let i=0; i<words.length; i++) {
    currentMessage += words[i] + ' ';
    if(currentMessage.length > K) {
      break;
    } else {
      result += words[i] + ' ';
    }
  }
  return result.trim();
};

console.log(solution('Codility We test coders', 14));
console.log(solution('Codility We test coders', 14));