const timeInWords = (h, m) => {
  // Write your code here
  const dictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    get 21() { return `${this[20]} ${this[1]}`},
    get 22() { return `${this[20]} ${this[2]}`},
    get 23() { return `${this[20]} ${this[3]}`},
    get 24() { return `${this[20]} ${this[4]}`},
    get 25() { return `${this[20]} ${this[5]}`},
    get 26() { return `${this[20]} ${this[6]}`},
    get 27() { return `${this[20]} ${this[7]}`},
    get 28() { return `${this[20]} ${this[8]}`},
    get 29() { return `${this[20]} ${this[9]}`},
    30: 'half',
    get 31() { return `${this[29]}`},
    get 32() { return `${this[28]}`},
    get 33() { return `${this[27]}`},
    get 34() { return `${this[26]}`},
    get 35() { return `${this[25]}`},
    get 36() { return `${this[24]}`},
    get 37() { return `${this[23]}`},
    get 38() { return `${this[22]}`},
    get 39() { return `${this[21]}`},
    40: 'twenty',
    get 41() { return `${this[19]}`},
    get 42() { return `${this[18]}`},
    get 43() { return `${this[17]}`},
    get 44() { return `${this[16]}`},
    45: 'quarter',
    get 46() { return `${this[14]}`},
    get 47() { return `${this[13]}`},
    get 48() { return `${this[12]}`},
    get 49() { return `${this[11]}`},
    50: '10',
    get 51() { return `${this[9]}`},
    get 52() { return `${this[8]}`},
    get 53() { return `${this[7]}`},
    get 54() { return `${this[6]}`},
    get 55() { return `${this[5]}`},
    get 56() { return `${this[4]}`},
    get 57() { return `${this[3]}`},
    get 58() { return `${this[3]}`},
    get 59() { return `${this[1]}`},
  };
  h = m > 30 ? ++h : h;
  const minutes = m < 10 ? 'minute' : 'minutes';
  if(m < 1){
    return `${dictionary[h]} o' clock`;
  } else if(m >= 1 && m <= 30) {
    return (m === 30 || m === 15) ?
      `${dictionary[m]} past ${dictionary[h]}`
      : `${dictionary[m]} ${minutes} past ${dictionary[h]}`
  } else {
    return m === 45 ?
      `${dictionary[m]} to ${dictionary[h]}`
      : `${dictionary[m]} ${minutes} to ${dictionary[h]}`
  }
}