const closeToZero = (arr) => {
    if (arr.length < 1)
        return 0;

    let closestNumber = arr[0];
    arr.forEach(num => closestNumber = Math.abs(num) < Math.abs(closestNumber) ? num : closestNumber);
    return closestNumber
};

console.log(closeToZero([-1, 2, 3, 4, 5]));
console.log(closeToZero([-4, -3, -2, -1, 1]));
console.log(closeToZero([7,-10, 13, 8, 4, -7.2,-12,-3.7,3.5,-9.6, 6.5,-1.7, -6.2,7]));