const student ={
  name: "mandeep",
  age: 23,
  city: "amritsar",
  isgraduated : true,
  regNum: 12502961,
  hobbies: ["reading", "traveling", "drawing"]
};

console.log(student);
console.log(student.city);
console.log(student.hobbies[1]);

// map, filter, reduce, function of objects, destructuring, spread operator, rest operator, classes, inheritance, encapsulation, polymorphism, abstraction, modules, promises, async/await, error handling, callbacks, event loop, closures, hoisting, scope, this keyword, prototype chain, ES6 features (let, const, arrow functions, template literals), DOM manipulation, AJAX, JSON parsing/stringifying.


//array of objects 
const students =
[
  {
  name: "mandeep",
  age: 23,
  totmarks : 80,
  city: "amritsar",
  isgraduated : true,
  regNum: 12502961,
  hobbies: ["reading", "traveling", "drawing"]
},

{
  name: "sohani",
  age: 20,
  totmarks : 70,
  city: "amritsar",
  isgraduated : true,
  regNum: 12502934,
  hobbies: ["reading", "traveling", "drawing"]
},

{
  name: "mona",
  age: 21,
  totmarks : 50,
  city: "amritsar",
  isgraduated : false,
  hobbies: ["reading", "traveling", "drawing"]
}
];

console.log(students);


//map - transform orginal array into other array
const arr=[2,3,4,5,6];

const doubledArr= arr.map((num)=>{
    return num*2;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr);

//v
var newArr = [];
for(let i = 0; i <students.length; i++){
  const p = students[i].totmarks/100*100;
  newArr.push({
    name : students[i].name,
    age: students[i].age,
    totmarks: students[i].totmarks,
    city: students[i].city,
    isgraduated: students[i].isgraduated,
    regNum: students[i].regNum,
    hobbirs: students[i].hobbies,
    percentage: percentage.toFixed(2).toString()+"%" //to limiting the percentage to 2 decimal number
  });
}

console.log("using loop", newArr);

//2.
const updateStu = students.map(s => {
  const percentage = s.totmarks/100*100;
  //s.percentage = percentage; // it was updating the original array  as same reference is there in both the arrays
  return {  
  ...s, //spread operator to copy all the properties of the original object into the new object
    percentage: percentage.toFixed(2).toString()+"%" //to limiting the percentage to 2 decimal number
  }
});


console.log(updateStu);

//reduce function - to reduce an array into single value by applying a function to each element of the array. it takes a callback function and an optional initial value as arguments. the callback function takes two parameters: an accumulator and the current value being processed in the array. the reduce method executes the callback function for each element in the array, passing the return value from the previous execution as the accumulator. if an initial value is provided, it will be used as the first argument to the first call of the callback function. if no initial value is provided, the first element of the array will be used as the initial accumulator value and the iteration will start from the second element. 

const sumOfAges = students.reduce((acc, curr) => {
  return acc + curr.age;
} , 0); // 0 is the initial value for the accumulator

console.log("Sum of ages:", sumOfAges);

// calculate the average marks of students using reduce function
const totalMarks = students.reduce((acc, curr) => {
  return acc + curr.totmarks;
}, 0);  
const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks.toFixed(2)); // to limiting the average marks to 2 decimal number

 



//filter  function - to create a new array with all elements that pass the test implemented by the provided function. it takes a callback function as an argument. the callback function takes three parameters: the current element being processed in the array, the index of the current element, and the array being traversed. the filter method executes the callback function for each element in the array, and if the callback function returns true, the element is included in the new array. if it returns false, the element is excluded from the new array.
const studentsabove85 = students.filter(s => s.totmarks > 85);
console.log("Students with marks above 85:", studentsabove85);    


//add result status to each student object based on their percentage -- (e.g., "Pass" if percentage is above 60%, otherwise "Fail").

const studentsWithResult = students.map(s => {
  const percentage = s.totmarks/100*100;
  return {  
    ...s, //spread operator to copy all the properties of the original object into the new object
    percentage: percentage.toFixed(2).toString()+"%", //to limiting the percentage to 2 decimal number
    result: percentage > 60 ? "Pass" : "Fail" // ternary operator to determine the result status based on the percentage
  }
}
);
console.log("Students with Result Status:", studentsWithResult);


