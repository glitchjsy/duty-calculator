// The excise duty for each product
const EXCISE_DUTY_SPIRITS_LITRE = 17.40;

const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP'
});

const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", () => {
    const capacity = document.getElementById("capacity").value;
    const abv = document.getElementById("abv").value;

    if (!capacity || !abv) {
        return alert("Please enter inputs");
    }

    const dutyPerMl = EXCISE_DUTY_SPIRITS_LITRE / 1000;
    const dutyByCapacity = dutyPerMl * capacity;
    const dutyPerPercent = dutyByCapacity / 40;

    const finalDuty = dutyPerPercent * abv;

    setFinalResult(numberFormatter.format(finalDuty));
});

const setFinalResult = (result) => {
    const resultContainer = document.getElementById("result-container");
    const resultElement = document.getElementById("result-price");

    // Show result container
    resultContainer.style.display = "block";

    // Set the result
    resultElement.textContent = result;
}