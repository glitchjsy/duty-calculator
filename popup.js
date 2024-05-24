// Set listeners for tab buttons
document.getElementById("spirits-tab").addEventListener("click", (event) => showTabContent(event, "spirits"));
document.getElementById("tobacco-tab").addEventListener("click", (event) => showTabContent(event, "tobacco"));
document.getElementById("cigarettes-tab").addEventListener("click", (event) => showTabContent(event, "cigarettes"));

/**
 * Show the content of a tab.
 * 
 * @param {*} event
 * @param {*} tabContentId 
 */
function showTabContent(event, tabContentId) {
    let i = 0;
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tabs = document.getElementsByClassName("tab");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(tabContentId).style.display = "block";
    event.currentTarget.className += " active";
}

// Set listeners for calculate buttons
document.getElementById("calculate-cigarette-button").addEventListener("click", calculateCigaretteDuty);
document.getElementById("calculate-tobacco-button").addEventListener("click", calculateTobaccoDuty);
document.getElementById("calculate-spirits-button").addEventListener("click", calculateSpiritsDuty);

/**
 * Calculate cigarette duty.
 */
function calculateCigaretteDuty() {
    const packs = document.getElementById('cigarettePacks').value;
    const dutyPerPack = 83.58 / 10;
    const totalDuty = packs * dutyPerPack;

    document.getElementById('cigaretteDutyResult').style.display = "block";
    document.getElementById('cigaretteDutyResult').innerHTML = `Excise Duty: <strong>£${totalDuty.toFixed(2)}</strong>`;
}

/**
 * Calculate tobacco duty.
 */
function calculateTobaccoDuty() {
    const pouches = document.getElementById('tobaccoPouches').value;
    const dutyPerPouch = 174.14 / 5;
    const totalDuty = pouches * dutyPerPouch;

    document.getElementById('tobaccoDutyResult').style.display = "block";
    document.getElementById('tobaccoDutyResult').innerHTML = `Excise Duty: <strong>£${totalDuty.toFixed(2)}</strong>`;
}

/**
 * Calculate spirits duty.
 */
function calculateSpiritsDuty() {
    const quantity = document.getElementById('spiritsQuantity').value;
    const abv = document.getElementById('spiritsABV').value;

    const dutyPerLitre = 17.40 / 1; // Duty for 40% ABV per litre
    const actualDuty = (dutyPerLitre * (quantity / 1000)) * (abv / 40);

    document.getElementById('spiritsDutyResult').style.display = "block";
    document.getElementById('spiritsDutyResult').innerHTML = `Excise Duty: <strong>£${actualDuty.toFixed(2)}</strong>`;
}