// Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in
// each iteration and places that element at the beginning of the unsorted list.

const selectionSort = (arr) => {
  let min;
  for (let i=0; i<arr.length; i++) {
    min = i;
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr
}

console.log(selectionSort([5, 3, 6, 2, 10]));