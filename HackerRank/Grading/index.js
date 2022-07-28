function gradingStudents(grades) {
  // Write your code here
  return grades.map(grade => {
    let diff = 5 - (grade % 5);
    if(grade >= 38 && diff < 3) {
      return grade + diff;
    } else {
      return grade;
    }
  });
}

console.log(gradingStudents())