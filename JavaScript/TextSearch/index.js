const textSearch = (string, query) => {
  if (string.trim() === '' || query.trim() === '') return string;
  let newString = string;
  for(let i=0; i<string.length;) {
    const substr = string.substring(i,  query.length);
    if (substr.toLowerCase() === query.toLowerCase()){

    }
  }

  // if (query.length < 1) return str;
  // const regex = new RegExp(query, 'gi')
  // return str.length > 0 ? str.replace(regex, `<b>${query}</b>`) : str;
}

// console.log(textSearch('The Quick Brown Fox Jumps Ov/er The Lazy Dog, hence Fox', 'Fox'));

console.log(textSearch('aabbcc', 'a'));
console.log(textSearch('aaaa', 'aa'));
// console.log(textSearch('The quick brown Fox jumps over the lazy dog', 'fox'));
// textSearch('aaaa', 'aa');
