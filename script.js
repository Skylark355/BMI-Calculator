// console.log("JavaScript is connected and working!");

function calculate() {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  // console.log({ gender, age, height, weight });

  // Clear previous result
  result.innerText = "";

  // Input validation
  if (!gender) {
    result.innerText = `Please select a gender.`;
    // result.style.color = "white";
    return;
  }

  if (isNaN(age) || age < 5 || age > 120) {
    result.innerText = `Please enter a valid age between 5 and 120 years.`;
    return;
  }

  if (isNaN(height) || height <= 0 || height > 2.5) {
    result.innerText = `Please enter a valid height in meters which should not exceed 2.5m.`;
    return;
  }

  if (isNaN(weight) || weight <= 0 || weight > 300) {
    result.innerText = `Please enter a valid weight in kilograms which should not exceed 300kg (e.g., 70).`;
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine BMI category
  let category = "";
  switch (true) {
    case bmi < 18.5:
      category = "Underweight";
      break;
    case bmi >= 18.5 && bmi < 24.9:
      category = "Normal weight";
      break;
    case bmi >= 25 && bmi < 29.9:
      category = "Overweight";
      break;
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

  resetFields();
  result.style.display = "block";
  result.style.backgroundColor = "#f1f0e8";
}

function resetFields() {
  document.getElementById("gender").value = "";
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}
