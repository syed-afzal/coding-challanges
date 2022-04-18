const maximumThreeDigitNumber = (N, K) => {
    let result = "";
    N = N.toString();
    for (let i = 0; i < N.length; i++) {
        let digit = +N[i];
        while(digit !== 9 && K > 0) {
            digit++;
            K--;
        }
        result += digit;
    }
    return result;
};
console.log(maximumThreeDigitNumber(191, 4));
