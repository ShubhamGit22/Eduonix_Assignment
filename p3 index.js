// 1] Write a program that asks the user for a number. If the number is even, print "The number is even." Otherwise, print "The number is odd."
let num = parseInt(prompt("Enter a number: "));
if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


// 2] Write a program that asks the user for two numbers. If the first number is greater than the second number, print "The first number is greater than the second number." Otherwise, print "The second number is greater than the first number."

let firstNum = parseInt(prompt("Enter the first number: "));
let secondNum = parseInt(prompt("Enter the second number: "));
if (firstNum > secondNum) {
  console.log("The first number is greater than the second number.");
} else {
  console.log("The second number is greater than the first number.");
}


// 3] Write a program that asks the user for a number. If the number is less than 10, print "The number is less than 10." Otherwise, print "The number is greater than or equal to 10."

let num = parseInt(prompt("Enter a number: "));
if (num < 10) {
  console.log("The number is less than 10.");
} else {
  console.log("The number is greater than or equal to 10.");
}


// 4] Write a program that prints the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  

// 5] Write a program that prints the even numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }


// 6]  Write a program that prints the odd numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  