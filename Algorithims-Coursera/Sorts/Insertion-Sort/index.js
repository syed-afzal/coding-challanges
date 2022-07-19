// Insertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position.
//   In other words, an insertion sort helps in building the final sorted list, one item at a time,
// with the movement of higher-ranked elements.
const insertionSort = (arr) => {
  for (let i=0; i<arr.length; i++) {
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
      [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([5, 3, 6, 2, 10]));

























//   let j = i;
//   while (j > 0 && arr[j] < arr[j-1]) {
//     [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
//     j--;
//   }
// }
// return arr;