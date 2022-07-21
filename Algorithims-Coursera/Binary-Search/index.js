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

const BinarySearchRecursive = (arr, search, low, high) => {
  if (low > high) return false;
  let middle = Math.floor((low+high)/2);
  if (search > arr[middle])
    return BinarySearchRecursive(arr, search, middle+1, high);
  else if(search <arr[middle])
    return BinarySearchRecursive(arr,  search, low,  middle-1);
  else
    return middle;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(BinarySearchRecursive(arr, 7, 0, arr.length - 1));
