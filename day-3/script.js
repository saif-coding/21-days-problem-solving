// ## 🎯 **Day 3 – Loops & Patterns**

// ### 🧩 **Core Concept Focus**

// * Nested Loops
// * Pattern Printing with Logic and Symmetry
// * Understanding iteration depth for shapes and designs

// ---

// ### 🧠 **Questions List**

//✅ 1. **Print Right-Angled Star Triangle**
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *
//      **
//      ***
//      ****
//      *****
//      ```
//    * ✨ *Teaches nested loops and increasing sequence printing.*

// ---

//✅ 2. **Print Inverted Right-Angled Triangle**

//    * Input: `Rows = 5`
//    * Output:
// for (let i = 5; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```
//    * ✨ *Reinforces decreasing nested loop structure.*

// ---

//✅ 3. **Print Pyramid Pattern**
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let k = 1; k <= 5 - i; k++) {
//     str += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Teaches alignment using spaces and nested loops.*

// ---

//✅ 4. **Print Inverted Pyramid Pattern**
// for (let i = 5; i >= 1; i--) {
//   let str = "";
//   for (let k = 1; k <= 5 - i; k++) {
//     str += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//      ```
//    * ✨ *Teaches reverse space-star pattern alignment.*

// ---

//❌ 5. **Print Hollow Square Pattern**
// const rows = 5;
// const cols = 5;
// let pattern = "";

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     // Print asterisk if it's the first/last row, or first/last column
//     if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
//       pattern += "*";
//     } else {
//       pattern += " "; // Hollow space inside
//     }
//   }
//   pattern += "\n"; // Move to the next line
// }
// console.log(pattern);
//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      *   *
//      *   *
//      *   *
//      *****
//      ```
//    * ✨ *Practices conditional printing within nested loops.*

// ---

// ❌6. **Print Hollow Pyramid Pattern**
// function printHollowPyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let rowStr = "";

//     // 1. Add leading spaces
//     for (let j = 1; j <= rows - i; j++) {
//       rowStr += " ";
//     }

//     // 2. Add stars and internal spaces
//     for (let j = 1; j <= 2 * i - 1; j++) {
//       // Condition for boundaries or the bottom solid row
//       if (j === 1 || j === 2 * i - 1 || i === rows) {
//         rowStr += "*";
//       } else {
//         rowStr += " ";
//       }
//     }

//     // 3. Print the completed row
//     console.log(rowStr);
//   }
// }
// printHollowPyramid(5);

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         * *
//        *   *
//       *     *
//      *********
//      ```
//    * ✨ *Combines conditionals and symmetrical logic in loops.*

// ---

// 7. **Print Alternating Binary Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      1
//      0 1
//      1 0 1
//      0 1 0 1
//      1 0 1 0 1
//      ```
//    * ✨ *Combines parity logic with nested loops.*

// ---

// ### 🏠 **Homework / Practice Challenge**

// 1. **Print Hollow Inverted Pyramid**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *     *
//        *   *
//         * *
//          *
//      ```
//    * ✨ *Focuses on conditionally printing edges and spaces.*

// ---

// 2. **Print Butterfly Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *       *
//      **     **
//      ***   ***
//      **** ****
//      *********
//      **** ****
//      ***   ***
//      **     **
//      *       *
//      ```
//    * ✨ *Combines multiple sections with symmetry logic.*

// ---

// 3. **Print Diamond Pattern**

//    * Input: `Rows = 3`
//    * Output:

//      ```
//          *
//         ***
//        *****
//         ***
//          *
//      ```
//    * ✨ *Combines upper and lower pyramid logic for symmetry.*

// ---

// 4. **Print Hourglass Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Practices combining inverse loops and symmetrical shapes.*

// ---

// 5. **Print Hollow Diamond Pattern**

//    * Input: `Rows = 3`
//    * Output:

//      ```
//          *
//         * *
//        *   *
//         * *
//          *
//      ```
//    * ✨ *Teaches combining upward and downward hollow pyramids.*

// ---

// 6. **Print Rhombus Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *****
//         *****
//        *****
//       *****
//      *****
//      ```
//    * ✨ *Practices offset alignment for uniform patterns.*

//    ---

// 7. **Print Multiplication Table (Single and Upto N)**

//    * Input 1: `Number = 5`
//    * Output:

//      ```
//      5 x 1 = 5
//      5 x 2 = 10
//      ...
//      5 x 10 = 50
//      ```
//    * Input 2: `Upto = 3`
//    * Output:

//      ```
//      Table of 1
//      1 x 1 = 1
//      ...
//      Table of 3
//      3 x 10 = 30
//      ```
//    * ✨ *Practices simple and nested loops for repetitive operations.*
