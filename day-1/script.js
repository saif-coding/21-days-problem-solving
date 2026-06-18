// ## 🎯 **Day 1 – Simple Number Problems**

// ### 🧩 **Core Concept Focus**

// * Loops (`for`, `while`)
// * Simple arithmetic operations
// * Thinking in steps (pattern of input → logic → output)

// ---

// ### 🧠 **Questions List**

//✅ 1. **Print Numbers from 1 to N**
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
//    * Input: `5`
//    * Output: `1 2 3 4 5`
//    * ✨ *Teaches basic loop construction.*

//✅ 2. **Print Numbers from N to 1 without changing the loop condition of above question**
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(n - i);
// }
//    * Input: `5`
//    * Output: `5 4 3 2 1`
//    * ✨ *Thinking creatively and manipulating logic within the loop*

//✅ 3. **Print All Even Numbers from 1 to N**
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//    * Input: `10`
//    * Output: `2 4 6 8 10`
//    * ✨ *Introduces conditional checks inside loops.*

//✅ 4. **Sum of First N Natural Numbers**
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);
//    * Input: `5`
//    * Output: `15`
//    * ✨ *Encourages cumulative addition and variable usage.*

//✅ 5. **Product (Factorial) of N**
// let n = 5;
// let Factorial = 1;
// for (let i = 1; i <= n; i++) {
//   Factorial *= i;
// }
// console.log(Factorial);
//    * Input: `5`
//    * Output: `120`
//    * ✨ *Reinforces loop control with multiplication logic.*

//✅ 6. **Sum of All Even Numbers up to N**
// let n = 10;
// let sumOfAllNumber = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sumOfAllNumber += i;
//   }
// }
// console.log(sumOfAllNumber);
//    * Input: `10`
//    * Output: `30` (`2+4+6+8+10`)
//    * ✨ *Combines loops + condition + accumulation.*

//✅ 7. **Print Squares of Numbers from 1 to N**
// let n = 5;
// let squire = 0;
// for (let i = 1; i <= n; i++) {
//   squire = i * i;
//   console.log(squire);
// }
//    * Input: `5`
//    * Output: `1 4 9 16 25`
//    * ✨ *Introduces arithmetic pattern generation.*

//    Here’s a **well-designed Homework / Practice Challenge** set for **Day 1 – Simple Number Problems**, written in the same clean markdown format and aligned with the day’s learning goals 👇

// ---

// ### 🏠 **Homework / Practice Challenge**

//✅ 1. **Print all numbers divisible by 3 and 5 up to N**
// let n = 30;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
//    * Input: `30`
//    * Output: `15 30`
//    * ✨ *Reinforces conditional checks inside loops.*

//✅ 2. **Find the sum of all odd numbers up to N**
// let n = 10;
// let sumOFAddNumber = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 1) {
//     sumOFAddNumber += i;
//   }
//   console.log(sumOFAddNumber);
// }
//    * Input: `10`
//    * Output: `25` (`1 + 3 + 5 + 7 + 9`)
//    * ✨ *Combines looping with conditional accumulation.*

//✅ 3. **Print the cubes of numbers from 1 to N**
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i ** 3);
// }
//    * Input: `5`
//    * Output: `1 8 27 64 125`
//    * ✨ *Extends arithmetic pattern logic beyond squares.*

// ---

// 4.❌ **Print only the numbers that are both even and perfect squares**
// let n = 20;
// for (let i = 1; i * i <= n; i++) {
//   let squares = i * i;
//   if (squares % 2 === 0) {
//     console.log(squares);
//   }
// }
//    * Input: `1 to 20`
//    * Output: `4 16`
//    * ✨ *Encourages combining two conditions within one loop.*
