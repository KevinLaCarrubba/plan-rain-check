//=====Yelp API Info=====

//=====Weather API info=====

//Button variable and listener
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", weatherAPI);



//Weather API Function
function weatherAPI() {
  event.preventDefault();
  //Global Search Variables
  var search = document.getElementById("city-name");
  var cityName = search.value;
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
      console.log("---City Name, State---");
      console.log(data.location.name + ", " + data.location.region);
      console.log("---Day's Avg Temp---");
      console.log(data.forecast.forecastday[0].day.avgtemp_f);
      console.log("---Day's Condition---");
      console.log(data.current.condition.text);
    });
  yelpAPI();
}

//Yelp API Function
function yelpAPI() {
  var search = document.getElementById("city-name");
  var cityName = search.value;
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
      console.log(data);
      console.log("---Top 5 bussiness name---");
      for (var i = 0; i < 5; i++) {
        console.log(data.businesses[i].name);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

//search bar and function in display page
