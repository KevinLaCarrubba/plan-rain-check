//Button variable and listener
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", yelpAPI);

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
      var firstCardDisplay = document.getElementById('first-card');
      var secondCardDisplay = document.getElementById('second-card')
      var thirdCardDisplay = document.getElementById('third-card')
      var forthCardDisplay = document.getElementById('forth-card')
      var fifthCardDisplay = document.getElementById('fifth-card')
      console.log(firstCardDisplay)
      firstCard.textContent = data.businesses[0].name.value
      for (var i = 0; i < 5; i++) {
        console.log(data.businesses[i].name);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

//Weather API Function
function weatherAPI() {
//add event listener for button
submitBtn.addEventListener("click", function (event) {
  //prevent event default
  event.preventDefault();
  //set variable for input area ID
  var search = document.getElementById("city-name");
  //get the input value
  var cityName = search.value;
  //set it to local storage
  localStorage.setItem("City Name", cityName);
  //reload window as display window
  window.location.replace("./display.html");
});
