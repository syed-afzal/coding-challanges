const removeDuplicatesArray = (array) => {
  // console.log(array)
  return array.filter(
    (element,  idx) => array.indexOf(element) === idx
  )
}

console.log(removeDuplicatesArray([1,1,2]))