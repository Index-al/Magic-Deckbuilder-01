// Fetch from the scryfall API
// Just grab a random card for now
// Display the card image in card-display class
// Display the card name in card-name class
fetch("https://api.scryfall.com/cards/random")
    .then((response) => response.json())
    .then((data) => {
        // Clear the card display html content first
        console.log(data);
        document.querySelector(".card-image").src = data.image_uris.normal;
        document.querySelector(".card-name").innerHTML = "Card Name: " + data.name;
        // Display the price data for the card in normal and foil(USD)
        // If the card price is not available, display "N/A"
        if (data.prices.usd) {
            document.querySelector(".card-price").innerHTML = "Price: $" + data.prices.usd;
        } else {
            document.querySelector(".card-price").innerHTML = "Price: N/A";
        }
        if (data.prices.usd_foil) {
            document.querySelector(".card-price-foil").innerHTML = "Foil Price: $" + data.prices.usd_foil;
        } else {
            document.querySelector(".card-price-foil").innerHTML = "Foil Price: N/A";
        }
        // Display the card type
        document.querySelector(".card-type").innerHTML = "Type: " + data.type_line;
        // Display the card set
        document.querySelector(".card-set").innerHTML = "Set: " + data.set_name;
        // Display the card rarity
        document.querySelector(".card-rarity").innerHTML = "Rarity: " + data.rarity;
        // Display the card text
        document.querySelector(".card-text").innerHTML = "Text: " + data.oracle_text;
    });

// Reload the page when clicking the reload-button class
document.querySelector("#reload-button").addEventListener("click", () => {
    location.reload();
});