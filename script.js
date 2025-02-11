function convertTemp() {
    let temp = parseFloat(document.getElementById('inputTemp').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(temp)) {
        document.getElementById('result').innerText = "Por favor, insira um número válido";
        return;
    }

    if (fromUnit === toUnit) {
        result = temp;
    } else if (fromUnit === "C" && toUnit === "F") {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === "C" && toUnit === "K") {
        result = temp + 273.15;
    } else if (fromUnit === "F" && toUnit === "C") {
        result = (temp - 32) * 5/9;
    } else if (fromUnit === "F" && toUnit === "K") {
        result = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "K" && toUnit === "C") {
        result = temp - 273.15;
    } else if (fromUnit === "K" && toUnit === "F") {
        result = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)}° ${toUnit}`;
}