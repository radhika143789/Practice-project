let calculation = "";
function calculationFunction(digit) {
    calculation += digit; 
    document.querySelector('.js-input').innerHTML = calculation; 
}

function calculateResult() {
    const result = eval(calculation);
    document.querySelector('.js-input').innerHTML = result; // Display the result
    calculation = result; // Store the result for further calculations
}

function clearDisplay() {
   
    document.querySelector('.js-input').innerHTML = ""; // Set to empty string
    localStorage.removeItem('calculation'); // Clear the calculation from local storage
    calculation = ""; // Reset the calculation
}
