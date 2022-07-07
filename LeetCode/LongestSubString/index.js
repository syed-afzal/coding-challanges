const lengthOfLongestSubstring = (s) => {
  let map = {};
  let start = 0;
  let end = 0;
  let result = 0;
  while(end < s.length) {
    if (map[s[end]] !== undefined) {
      result = Math.max(result, end - start);
      for (let i=start; i<map[s[end]]; i++) {
        delete map[s[i]];
      }
      start = map[s[end]] + 1;
      map[s[end]] = end;
    } else {
      map[s[end]] = end;
    }
    end++;
  }
  result = Math.max(result, end - start);
  return result;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('abba'));