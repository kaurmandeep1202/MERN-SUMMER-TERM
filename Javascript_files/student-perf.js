const students = [
  {id: 1, name: 'Aman', marks: 85, attendance: 92},
  {id: 2, name: 'Akansha', marks: 75, attendance: 91},
  {id: 3, name: 'keerat', marks: 88, attendance: 94},
]

const passedStudents = students.filter(student => student.marks >= 40);
console.log("list of passed students:", passedStudents);


for(let i = 0; i <passedStudents.length; i++){
  console.log(`${passedStudents[i].name} has got ${passedStudents[i].marks} with attendance ${passedStudents[i].attendance}`);
}




// 2. Create student report with grades
const studentReport = students.map(
  ({ name, marks, attendance }) => {
    let grade;

    if (marks >= 80) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 40) grade = "C";
    else grade = "F";

    return { name, marks, attendance, grade };
  }
);

// 3. Calculate average marks
const averageMarks =
  students.reduce(
    (total, { marks }) => total + marks,
    0
  ) / students.length;

// 4. Find topper
const topper = students.reduce((topper, student) =>
  student.marks > topper.marks ? student : topper
);

// 5. Display results using template literals
console.log("===== PASSED STUDENTS =====");
passedStudents.forEach(({ name, marks }) =>
  console.log(`${name} - ${marks}`)
);

console.log("\n===== STUDENT REPORT =====");
studentReport.forEach(
  ({ name, marks, attendance, grade }) =>
    console.log(
      `Name: ${name}, Marks: ${marks}, Attendance: ${attendance}%, Grade: ${grade}`
    )
);

console.log(`\nClass Average Marks: ${averageMarks.toFixed(2)}`);

console.log(
  `Topper: ${topper.name} (${topper.marks} Marks)`
);