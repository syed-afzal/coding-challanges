const romanToInt = (s) => {
  const dictionary = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  };
  let output = 0;
  let idx = 0;
  while(idx < s.length){
    if(dictionary[s[idx]] < dictionary[s[idx+1]]) {
      output += dictionary[s[idx+1]] - dictionary[s[idx]];
      idx += 2;
    } else {
      output += dictionary[s[idx]];
      idx++;
    }
  }
};
romanToInt('IV');
romanToInt('LVIII');