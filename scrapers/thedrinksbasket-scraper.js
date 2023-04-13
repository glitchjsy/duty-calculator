function scrape() {
    const capacityElement = $(".attrview > ul > li:nth-child(3)");
    const abvElement = $(".attrview > ul:nth-child(2) > li:first-child");

    if (capacityElement.length === 0 || abvElement.length === 0) {
        return;
    }

    const capacity = capacityElement.html()
        .replaceAll("<span>Size: </span>", "")
        .replaceAll("cl", "")
        .trim();

    const abv = abvElement.html()
        .replaceAll(" <span>ABV: </span>", "")
        .replaceAll("%", "")
        .trim();

    chrome.runtime.sendMessage({
        message: "result",
        data: {
            abv: parseInt(abv),
            capacity: parseInt(capacity) * 10
        }
    });
}

scrape();