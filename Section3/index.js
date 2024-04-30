/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console,
 together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

*/

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (averageDolphins, averageKoalas) => {
  if (averageDolphins > averageKoalas) {
    console.log(
      `dolphins wins the score ${averageDolphins} vs ${averageKoalas}`
    );
  } else if (averageKoalas > averageDolphins) {
    console.log(`koalas wins the score ${averageKoalas} vs ${averageDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

/* CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
 (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44. */

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

const tip = calcTip(100);
const bills = [125, 555, 44];
const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);
console.log([tip1, tip2, tip3]);

const alternateTip = () => {
  for (let index = 0; index < bills.length; index++) {
    const element = bills[index];
    const output = calcTip(element);
    console.log(`output`, output);
  }
};
alternateTip();

//   CHALLENGE
// print using prompt function that ankit has 3 friends and his best friend is rajat

const ankit = {
  firstName: "ankit",
  lastName: "Kumar",
  age: 30,
  friends: ["Maneesh", "Sushmit", "Rajat"],
};

// const intrestedIn = prompt("Who is your best friend? choose friends");
// console.log(ankit[intrestedIn])

/* CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
 Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase),
 and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

if (markBMI > johnBMI) {
  console.log(
    `mark bmi value ${markBMI} is higher than john bmi value ${johnBMI}`
  );
} else {
  console.log(
    `mark bmi value ${johnBMI} is higher than john bmi value ${markBMI}`
  );
}

/* CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!


TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.


BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop.
 In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array. */

const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const total = [];

const calculateTips = (bill) => {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};
for (let i = 0; i < billsArray.length; i++) {
  //   console.log(billsArray[i]);
  tipsArray.push(calculateTips(billsArray[i]));
  total.push(billsArray[i] + calculateTips(billsArray[i]));
}
console.log(tipsArray, billsArray, total);

const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calculateAverage(total));
