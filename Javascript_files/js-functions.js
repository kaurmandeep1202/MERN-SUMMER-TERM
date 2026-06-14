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

//You are given an array of customer orders from an online store. Each order contains customer details, purchased items, quantity, price, discount, and payment status.



const orders = [
  {
    orderId: "ORD101",
    customerName: "Aman",
    city: "Delhi",
    paymentStatus: "Paid",
    items: [
      { product: "Laptop", category: "Electronics", price: 55000, quantity: 1, discount: 10 },
      { product: "Mouse", category: "Electronics", price: 800, quantity: 2, discount: 5 }
    ]
  },
  {
    orderId: "ORD102",
    customerName: "Priya",
    city: "Mumbai",
    paymentStatus: "Pending",
    items: [
      { product: "Shoes", category: "Fashion", price: 2500, quantity: 2, discount: 20 },
      { product: "T-Shirt", category: "Fashion", price: 900, quantity: 3, discount: 10 }
    ]
  },
  {
    orderId: "ORD103",
    customerName: "Rohit",
    city: "Delhi",
    paymentStatus: "Paid",
    items: [
      { product: "Mobile", category: "Electronics", price: 30000, quantity: 1, discount: 15 },
      { product: "Headphones", category: "Electronics", price: 2000, quantity: 2, discount: 10 }
    ]
  },
  {
    orderId: "ORD104",
    customerName: "Anjali",
    city: "Bangalore",
    paymentStatus: "Failed",
    items: [
      { product: "Book", category: "Education", price: 600, quantity: 4, discount: 0 },
      { product: "Pen Drive", category: "Electronics", price: 1200, quantity: 1, discount: 5 }
    ]
  }
];


//using map reduce and normal javascript logic generate a complete order analytics report. convert into below format 
//{order id: 
//customer name:
//city:
//payment status:
// totalitems:
// gross amount: 
// total discount: 
// net amount:
// order status:
// reward points:
//  }

//do it 
const orderAnalytics = orders.map(order => {
  const totalItems = order.items.reduce((acc, item) => acc + item.quantity, 0);
  const grossAmount = order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0); 
  const totalDiscount = order.items.reduce((acc, item) => acc + ((item.price * item.quantity) * (item.discount / 100)), 0);
  const netAmount = grossAmount - totalDiscount;  
  const orderStatus = order.paymentStatus === "Paid" ? "Completed" : (order.paymentStatus === "Pending" ? "In Progress" : "Failed");
  const rewardPoints = order.paymentStatus === "Paid" ? Math.floor(netAmount / 100) : 0;

  return {
    orderId: order.orderId,
    customerName: order.customerName,
    city: order.city,
    paymentStatus: order.paymentStatus,
    totalItems,
    grossAmount,
    totalDiscount,
    netAmount,
    orderStatus,
    rewardPoints
  };
});

console.log(orderAnalytics);  


