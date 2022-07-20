const BinarySearch = (arr, search) => {
  if (arr.length === 0) return 'Invalid Array';
  let low = 0;
  let high = arr.length - 1;
  let middle;

  while(low < high) {
    middle =  Math.floor((low + high) / 2);
    if (search > arr[middle]){
      low = middle + 1;
    } else if (search < arr[middle]){
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return false;
}

console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10], 98));