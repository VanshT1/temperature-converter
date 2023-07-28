document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.getElementById("arrow");
    arrow.addEventListener("click", swapUnits);
  
    var convertBtn = document.getElementById("convertBtn");
    convertBtn.addEventListener("click", convertTemperature);
  });
  
  function swapUnits() {
    var fromUnit = document.getElementById("fromUnit");
    var toUnit = document.getElementById("toUnit");
  
    var temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
  }
  
  function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  
    var result;
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = temperatureInput * 9 / 5 + 32;
      } else if (toUnit === "kelvin") {
        result = parseFloat(temperatureInput) + 273.15;
      } else {
        result = temperatureInput;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (temperatureInput - 32) * 5 / 9;
      } else if (toUnit === "kelvin") {
        result = (temperatureInput - 32) * 5 / 9 + 273.15;
      } else {
        result = temperatureInput;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        result = temperatureInput - 273.15;
      } else if (toUnit === "fahrenheit") {
        result = (temperatureInput - 273.15) * 9 / 5 + 32;
      } else {
        result = temperatureInput;
      }
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = result.toFixed(2);
    resultElement.classList.remove("hide");
  }
  