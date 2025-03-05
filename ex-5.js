const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let score = students.map((student) => student.score);
  return console.log(score.reduce((acc, cur) => acc + cur, 0) / students.length);
}

getAverageStudentScore(students); // Output: 87.5
