// Problem - 1

function calculateTax(income, expense) {
  if (
    typeof income !== "number" ||
    typeof expense !== "number" ||
    income < 0 ||
    expense < 0 ||
    income < expense
  ) {
    return "Invalid Input";
  }

  const difference = income - expense;

  const tax = difference * 0.2;

  return tax;
}


console.log(calculateTax(10000, 7000)); // Output: 600
console.log(calculateTax(15000, 12000)); // Output: 600
console.log(calculateTax(5000, 5000));   // Output: 0
console.log(calculateTax(7000, 8000));   // Output: Invalid Input
console.log(calculateTax(-1000, 500));   // Output: Invalid Input



// Problem - 2

function sendNotification(email) {
  const atIndex = email.indexOf("@");
  if (atIndex === -1 || typeof email !== "string") {
    return "Invalid Email";
  }

  const username = email.slice(0, atIndex);
  const domainName = email.slice(atIndex + 1);

  return `${username} sent you an email from ${domainName}`;
}


console.log(sendNotification("zihad.ph@gmail.com")); // Output: zihad.ph sent you an email from gmail.com
console.log(sendNotification("zihad@gmail.com"));    // Output: zihad sent you an email from gmail.com
console.log(sendNotification("zihadgmail.com"));     // Output: Invalid Email



// Problem - 3

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  const containsDigits = /\d/.test(name);

  return containsDigits;
}


console.log(checkDigitsInName("Rajib123")); // Output: true
console.log(checkDigitsInName("Rajib"));    // Output: false
console.log(checkDigitsInName(12345));      // Output: Invalid Input


// Problem - 4

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    testScore > 50 ||
    typeof schoolGrade !== "number" ||
    schoolGrade > 30 ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80;
}



const input1 = {
  name: "Sifat",
  testScore: 45,
  schoolGrade: 30,
  isFFamily: true,
};
const result1 = calculateFinalScore(input1);
console.log(result1); // Output: true

const input2 = {
  name: "Ariyan",
  testScore: 30,
  schoolGrade: 20,
  isFFamily: false,
};
const result2 = calculateFinalScore(input2);
console.log(result2); // Output: false

const input3 = "Invalid Input Example";
const result3 = calculateFinalScore(input3);
console.log(result3); // Output: Invalid Input




// Problem - 5

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  const totalTime = waitingTimes.reduce((acc, time) => acc + time, 0);
  const averageTime = Math.round(totalTime / waitingTimes.length);

  const remainingPeople = serialNumber - 1 - waitingTimes.length;

  if (remainingPeople < 0) {
    return "Invalid Input";
  }

  const waitingTime = remainingPeople * averageTime;

  return waitingTime;
}


const array = [3, 5, 7, 11, 6];
const serialNumber = 10;

const result = waitingTime(array, serialNumber);
console.log(result); // Output: 24
