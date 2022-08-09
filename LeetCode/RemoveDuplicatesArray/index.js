const removeDuplicatesArray = (array) => {
  // console.log(array)
  // return array.filter(
  //   (element,  idx) => array.indexOf(element) === idx
  // )

  let j = 0;
  for (let i=0; i < array.length - 1; i++) {
    if (array[i+1] !== array[j])
      array[j++] = array[i+1];
  }
  array[j++] = array[array.length -1];
  return j;
}

console.log(removeDuplicatesArray([1,1,2,3,4,4,5]))

var obj = { first: "John", last: "Doe" };
//
// for(let [key,value] of Object.entries(obj)) {
//   console.log(key,  value);
// }