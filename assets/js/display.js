//Create a empty array for the business info we need
var businessInfo = [];

function yelpAPI() {
  var cityName = localStorage.getItem("City Name");
  var yelpURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
    cityName;
  var yelpAPIkey =
    "9etXOwMgbWmpRTmXKBVO5IkljuKPy3OeJNKr3CrznaGrwutFfd_tB8Vwgs9p8_jS4OTajW7iVVVWX40kdCULRCBg26xGgN0gwRK2AHzx1BTzt-zXOBu5t-8nwsIbYXYx";
  fetch(yelpURL, {
    headers: {
      accept: "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${yelpAPIkey}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < 5; i++) {
        var businessName = data.businesses[i].name;
        var displayPhone = data.businesses[i].display_phone;
        var image = data.businesses[i].image_url;
        var displayAddress =
          data.businesses[i].location.display_address.join(", ");
        var yelpURL = data.businesses[i].url;
        var businessObj = {
          name: businessName,
          phone: displayPhone,
          image: image,
          address: displayAddress,
          url: yelpURL,
        };
        businessInfo.push(businessObj);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}
console.log(businessInfo);
//Weather API Function
function weatherAPI() {
  //Global Search Variables
  var cityName = localStorage.getItem("City Name");
  var weatherURL =
    "https://api.weatherapi.com/v1/forecast.json?key=f3dd10a5b85d43bea96181956211608&q=" +
    cityName +
    "=5&aqi=no&alerts=no";
  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //   console.log("---City Name, State---");
      //   console.log(data.location.name + ", " + data.location.region);
      //   console.log("---Day's Avg Temp---");
      //   console.log(data.forecast.forecastday[0].day.avgtemp_f);
      //   console.log("---Day's Condition---");
      //   console.log(data.current.condition.text);
    });
}

yelpAPI();
weatherAPI();
