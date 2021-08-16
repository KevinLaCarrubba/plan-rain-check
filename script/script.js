var testUrl = "https://api.yelp.com/v3/businesses/{vegan-af-jersey-city}";
function test(){
    fetch(testUrl)
    .then (function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    }
})


 