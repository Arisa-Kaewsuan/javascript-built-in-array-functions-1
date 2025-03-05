const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let average = students.reduce((total, student) => total + student.score, 0) / students.length;
  return console.log(average);
} 

getAverageStudentScore(students); // Output: 87.5
