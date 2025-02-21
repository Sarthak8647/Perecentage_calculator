let Z = document.getElementById("Z");
let result = document.getElementById("result");
let calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  let xValue = parseFloat(document.getElementById("X").value);
  let yValue = parseFloat(document.getElementById("Y").value); // Fixed issue

  if (!isNaN(xValue) && !isNaN(yValue)) {
    let calculatedValue = ((xValue * yValue) / 100).toFixed(2);
    Z.value = calculatedValue; // Ensure Z is an input field
    result.innerHTML = `${xValue}% of ${yValue} is <span>${calculatedValue}</span>`;
  } else {
    result.innerHTML = "Inputs cannot be empty!";
  }
});
