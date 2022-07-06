const lengthOfLongestSubstring = (s) => {
  let map = {};
  let start = 0;
  let end = 0;
  let result = 0;
  while(end < s.length) {
    if (map[s[end]] !== undefined) {
      result = Math.max(result, end - start);
      start = map[s[end]] + 1;
      map[s[end]] = end;
    } else {
      map[s[end]] = end;
    }
    end++;
  }
  result = Math.max(result, end - start);
  console.log(result)
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf'));