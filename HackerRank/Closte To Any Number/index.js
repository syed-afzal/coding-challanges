function closeToZero (arr) {
    if (arr.length < 1)
        return 0;

    let closestNumber = arr[0];
    arr.forEach(num => closestNumber = Math.abs(num) < Math.abs(closestNumber) ? num : closestNumber);
    return closestNumber
};

console.log(closeToZero([-1, 2, 3, 4, 5]));