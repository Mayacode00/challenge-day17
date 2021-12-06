const bmiCalculator = document.getElementById("bmi-calculator");

bmiCalculator.addEventListener("submit", calculateResults);

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");

function calculateResults(e) {
  e.preventDefault();
  console.log("calculating");

  const heightInputed = parseFloat(height.value) / 100;
  const convertedHeight = heightInputed * heightInputed;
  const x = parseFloat(weight.value);

  const resultCalculated = x / convertedHeight;

  if (resultCalculated) {
    result.value = resultCalculated.toFixed(2);
  } else {
    console.log("please check your numbers and try again");
  }
}
