// aaaabbbbccddd => 4a3b2c3d
// abcd => 1a1b1c1d1

const countChar = (str) => {
    let counter = 0;
    let prevChar = '';
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === prevChar) {
            counter++;
        } else {
            if (prevChar !== '') {
                output += prevChar + counter;
            }
            prevChar = str[i];
            counter=1;
        }
    }
    output += prevChar + counter;
    return output;
};

console.log(countChar('aaaaabbbbcccdddeee'))
console.log(countChar('abcd'))