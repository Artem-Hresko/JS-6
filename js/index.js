// // // // // 1

// // let i = 0;

// // while (i <= 10) {
// //   console.log(i);
// //   i = i + 1;
// // }

// // // // 2

// // for (let i = 2; i <= 20; i = i + 1) {
// //   if (i % 2 != 0) continue;
// //   else if (i % 2 === 0) {
// //     console.log(i);
// //   }
// // }

// // // 3

// let number = 7;

// for (let i = 0; i <= 10; i += 1) {
//   const table = number * i;
//   console.log(`${i} : ${table}`);
// }

// // 4

// let a = 0;
// let n = 15;

// while (a < n) {
//   a += 1;
//   if (a >= n) break;
//   console.log(a);
// }

// // 5

// let number1 = 0;

// while (number1 <= 20) {
//   number1 += 1;
//   if (number1 % 3 === 0) continue;
//   console.log(number1);
// }

// const user = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true,
// };

// console.log("Початковий об'єкт:");
// console.log(user);

const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

console.log(user);

// Послідовні операції
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}



// Task2


function countProps(obj) {
  return Object.keys(obj).length;
}


// Task3

const employees = {
  ann: 29,
  david: 35,
  lorence: 99,
};


function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}