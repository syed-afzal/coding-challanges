const timeConversion = (s) => {
  // Write your code here
  const [hours, minutes, second] = s.split(':')
  if(second.includes('AM')){
    if(hours < 12)
      return `${hours}:${minutes}:${second.slice(0,2)}`
    else
      return `00:${minutes}:${second.slice(0,2)}`
  } else {
    return `${hours < 12 ? +hours+12 : +hours}:${minutes}:${second.slice(0,2)}`
  }
}

console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('07:05:45PM'));