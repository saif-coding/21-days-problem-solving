// ## 🎯 **Day 2 – Conditions & Logic**

// ### 🧩 **Core Concept Focus**

// * Conditional statements (`if`, `else if`, `else`)
// * Comparison and logical operators
// * Decision making based on different inputs
// * Strengthening flow-of-control understanding

// ---

// ### 🧠 **Questions List**

//✅ 1. **Find the Maximum of Three Numbers**
// function Maximum(a, b, c) {
//   let big = "";
//   if (a > b && a > c) big = a;
//   if (b > a && b > c) big = b;
//   if (c > a && c > b) big = c;
//   return big;
// }
// let res = Maximum(10, 20, 5);
// console.log(res);
//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*

//✅ 2. **Check if a Number is Positive, Negative, or Zero**
// function Maximum(a) {
//   if (a >= 1) console.log("Positive");
//   if (a < 0) console.log("Negative");
//   if (a === 0) console.log("Zero");
// }
// Maximum(-0);
//    * Input: `-9`
//    * Output: `Negative`
//    * ✨ *Practices multi-branch conditions and comparison operators.*

// ---

//✅ 3. **Calculate Electricity Bill**
// function Calculate(Units) {
//   let total = 0;
//   if (Units <= 100) total = Units * 5;
//   if (Units <= 200) total = 100 * 5 + (Units - 100) * 7;
//   if (Units <= 300) total = 100 * 5 + 100 * 7 + (Units - 200) * 10;
//   if (Units >= 300) total = 100 * 5 + 100 * 7 + 100 * 10 + (Units - 300) * 12;
//   return total;
// }
// let res = Calculate(250);
// console.log(res); // answer is 1700
// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:
//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.

// ---

//✅ 4. **Check if a Character is a Vowel or Consonant**
// const vowel = "aeiou";
// function checkVowel(val) {
//   let ans = vowel.includes(val)
//   console.log(ans);
// }
// checkVowel("e");
//    * Input: `e`
//    * Output: `Vowel`
//    * ✨ *Combines logical OR (`||`) operator and string comparisons.*

// ---

//✅ 5. **Check if a Year is a Leap Year**
// function leapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   }
//   return false;
// }
// let ans = leapYear(1900);
// console.log(ans);
//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,
//       ➜ `year % 4 === 0`
//    2. **But not divisible by 100**,
//       ➜ `year % 100 !== 0`
//    3. **Unless** it is also **divisible by 400**,
//       ➜ `year % 400 === 0`

//    🧩 **In Simple Words**
//    - If a year is divisible by **4**, it’s a leap year.
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.
//    - **But** if it’s divisible by **400**, it **is** a leap year again.

// ---

// ### 🏠 **Homework / Practice Challenge**

//✅ 1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**
// function checkCharacter(char) {
//   if (/^\d$/.test(char)) {
//     console.log("Digit");
//   } else if (/^[A-Z]$/.test(char)) {
//     console.log("Uppercase");
//   } else if (/^[a-z]$/.test(char)) {
//     console.log("Lowercase");
//   } else {
//     console.log("Special Character");
//   }
// }
// checkCharacter("2");
//    * Input: `A`
//    * Output: `Uppercase Letter`
//    * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
//    * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

// ---

//❌ 2. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

// ---

// ✅3. **Calculate Income Tax Based on Slabs**
// function calculateTax(income) {
//   let tax = 0;
//   if (income <= 250000) {
//     // Slab 1: Up to ₹2,50,000
//     tax = 0;
//   } else if (income <= 500000) {
//     // Slab 2: ₹2,50,001 to ₹5,00,000
//     tax = (income - 250000) * 0.05;
//   } else if (income <= 1000000) {
//     // Slab 3: ₹5,00,001 to ₹10,00,000
//     // Fully taxes Slab 2 (2,50,000 * 5% = 12,500) + remaining amount at 20%
//     tax = 12500 + (income - 500000) * 0.2;
//   } else {
//     // Slab 4: Above ₹10,00,000
//     // Fully taxes Slab 2 (12,500) + fully taxes Slab 3 (5,00,000 * 20% = 1,00,000) + remaining at 30%
//     tax = 12500 + 100000 + (income - 1000000) * 0.3;
//   }
//   return tax;
// }
// console.log(`Tax = ₹${calculateTax(750000)}`); // Output: Tax = ₹62500
// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%
// * 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*
