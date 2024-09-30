var products = {
    brand: "",
    model: "",
    rating: {
        rate: "4.7",
        count: {
            mens: "3456",
            womens: "4567"
        }
    }

};

var value = products["rating"]["count"]["mens"];
console.log(value);