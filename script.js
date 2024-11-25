// console.log("JavaScript is connected and working!");

function calculate() {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  console.log({ gender, age, height, weight });

  // Clear previous result
  result.innerText = "";

  // Input validation
  if (!gender) {
    result.innerText = `Please select a gender.`;
    return;
  }

  if (isNaN(age) || age < 5 || age > 120) {
    result.innerText = `Please enter a valid age between 5 and 120 years.`;
    return;
  }

  if (isNaN(height) || height <= 0 || height > 2.5) {
    result.innerText = `Please enter a valid height in meters.`;
    return;
  }

  if (isNaN(weight) || weight <= 0 || weight > 300) {
    result.innerText = `Please enter a valid weight in kilograms (e.g., 70).`;
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine BMI category
  let category = "";
  switch (category) {
    case bmi < 18.5:
      category = "Underweight";
    case bmi >= 18.5 && bmi < 24.9:
      category = "Normal weight";
    case bmi >= 25 && bmi < 29.9:
      category = "Overweight";
    default:
      category = "Obesity";
  }

  // let category = "";
  // if (bmi < 18.5) {
  //   category = "Underweight";
  // } else if (bmi >= 18.5 && bmi < 24.9) {
  //   category = "Normal weight";
  // } else if (bmi >= 25 && bmi < 29.9) {
  //   category = "Overweight";
  // } else {
  //   category = "Obesity";
  // }

  // Display result
  result.innerText = `Gender: ${gender}\nAge: ${age} years\nYour BMI is ${bmi.toFixed(
    2
  )} (${category}).`;

  // reset();
}

// function reset() {
//   fields.value = "";
// }
