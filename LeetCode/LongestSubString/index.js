const lengthOfLongestSubstring = (s) => {
  let output = '';
  let current = '';
  for (let i=0; i<s.length; i++) {
    if (current.includes(s[i])) {
      output = current.length > output.length ? current : output;
      current = s[i];
    } else {
      current += s[i];
    }
  }
  return output.length > current.length ? output.length : current.length;
}

console.log(lengthOfLongestSubstring('abcabcbb'));