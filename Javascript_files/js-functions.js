const students = [
  {
    name: "John Doe",
    course : "Full Stack Development",
    marks: [22, 45, 67, 89]
  },

  {
    name: "Smith",
    course : "Data Science",
    marks: [78, 88, 92, 95]

  },

  {
    name: "Alice",
    course : "Cyber Security",
    marks: [55, 65, 75, 85]

  },

  {
    name: "Bob",
    course : "Cloud Computing",
    marks: [60, 70, 80, 90]
  }
];

//problem statement : convert the given objects in array in below formats  - max marks is above 150,, if percentage is above 50 then result is pass otherwise fail.
//[
// {
//   name: "John Doe",
//   course : "Full Stack Development",
//   marks: [22, 45, 67, 89]
//   totmarks: 223,
//   percentage: 55.75,
//   result: "Pass"
// }]

const proStudents = students.map(student => {
  const totalMarks = student.marks.reduce((acc, mark) => {return acc + mark }, 0);
  const percentage = ((totalMarks / 400) * 100).toFixed(2);
  const result = percentage > 50 ? "Pass" : "Fail";

  return {
    ...student,
    totmarks,
    percentage,
    result
  };
}
);
console.log(proStudents); 



//use filter function to get the students who have passed the course 

const passedStudents = proStudents.filter(student => student.result === "Pass");
console.log(passedStudents);

//use filter function to get the students who have failed the course
const failedStudents = proStudents.filter(student => student.result === "Fail");
console.log(failedStudents);  

