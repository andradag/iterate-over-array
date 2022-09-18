// Creates an array containing names of five student in the class
var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

// Get the number of students
var numberOfStudents = students.length;

// Logs the number of students
console.log(numberOfStudents);

// For loop starts at 0, runs while index is less than the number of students
// Increments by 1
for (var index = 0; index < numberOfStudents; index++) {
  // get value from students using index
  var student = students[index];
  // This statement will run each time the loop is executed
  console.log("Great to see you, " + student + "!");
}

// add a while loop tp iterate over students
var i = 0;
while (i < numberOfStudents) {
  // get value from students using i
  var student = students[i];
  // console log message
  console.log("Great to see you, " + student + "!");
  //increment i by 1
  //same as i = i + 1;
  i += 1;
}
