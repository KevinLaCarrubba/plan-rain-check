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
      for (var i = 0; i < 9; i++) {
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
    .then(function () {
      renderCard();
    })
    .catch(function (err) {
      console.error(err);
    });
}
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
      var description = document.getElementById("condition");
      var temp = document.getElementById("temp");
      var minTemp = document.getElementById("min-temp");
      var wind = document.getElementById("wind");
      var futureDescription = document.getElementById("future-condition");
      var sunset = document.getElementById("sunset");

      description.textContent = data.current.condition.text;
      temp.textContent = "Current Temp: " + data.current.temp_f + "℉";
      minTemp.textContent =
        "Min Temp: " + data.forecast.forecastday[0].day.mintemp_f + "℉";
      wind.textContent = "Wind: " + data.current.wind_mph;
      futureDescription.textContent =
        "Later tonight will be " +
        data.forecast.forecastday[0].day.condition.text +
        " with a " +
        data.forecast.forecastday[0].day.daily_chance_of_rain +
        "% chance of rain.";
      sunset.textContent =
        "Sunset at " + data.forecast.forecastday[0].astro.sunset;
    });
}

yelpAPI();
weatherAPI();

var viewOne = document.getElementById("view-one");
var viewTwo = document.getElementById("view-two");
var viewThree = document.getElementById("view-three");
function renderCard() {
  businessInfo.forEach((item, key) => {
    //create the 3 columns
    if (key == 0 || key == 1 || key == 2) {
      var createCol = document.createElement("div");
      createCol.classList.add("col-md-4", "my-3");
      //create the card
      var createCard = document.createElement("div");
      createCard.classList.add("card");
      //creata and link card img
      var cardImg = document.createElement("img");
      cardImg.classList.add("imgSize");
      cardImg.src = item.image;
      //create the card body
      var createCardBody = document.createElement("card-body");
      createCardBody.classList.add("card-body");
      //create the card title and give it the business name
      var createCardTitle = document.createElement("h4");
      createCardTitle.classList.add("card-title");
      createCardTitle.textContent = item.name;
      //create an unordered list for phone and adddress
      var infoList = document.createElement("ul");
      var phoneLi = document.createElement("li");
      var addressLi = document.createElement("li");
      var urlLi = document.createElement("li");
      var aUrl = document.createElement("a");
      var textLink = document.createTextNode("Link to yelp");
      aUrl.appendChild(textLink);
      aUrl.href = item.url;
      urlLi.appendChild(aUrl);
      phoneLi.textContent = item.phone;
      addressLi.textContent = item.address;
      //append phone and address to list
      infoList.appendChild(addressLi);
      infoList.appendChild(phoneLi);
      infoList.appendChild(urlLi);
      //append the title then the list to the body
      createCardBody.appendChild(createCardTitle);
      createCardBody.appendChild(infoList);
      //append the image then the body to the card
      createCard.appendChild(cardImg);
      createCard.appendChild(createCardBody);
      //append the card tot he col
      createCol.appendChild(createCard);
      //append the row to the view-one display
      viewOne.appendChild(createCol);
    }
    if (key == 3 || key == 4 || key == 5) {
      var createCol = document.createElement("div");
      createCol.classList.add("col-md-4", "my-3");
      //create the card
      var createCard = document.createElement("div");
      createCard.classList.add("card");
      //creata and link card img
      var cardImg = document.createElement("img");
      cardImg.classList.add("imgSize");
      cardImg.src = item.image;
      //create the card body
      var createCardBody = document.createElement("card-body");
      createCardBody.classList.add("card-body");
      //create the card title and give it the business name
      var createCardTitle = document.createElement("h4");
      createCardTitle.classList.add("card-title");
      createCardTitle.textContent = item.name;
      //create an unordered list for phone and adddress
      var infoList = document.createElement("ul");
      var phoneLi = document.createElement("li");
      var addressLi = document.createElement("li");
      var urlLi = document.createElement("li");
      var aUrl = document.createElement("a");
      var textLink = document.createTextNode("Link to yelp");
      aUrl.appendChild(textLink);
      aUrl.href = item.url;
      urlLi.appendChild(aUrl);
      phoneLi.textContent = item.phone;
      addressLi.textContent = item.address;
      //append phone and address to list
      infoList.appendChild(addressLi);
      infoList.appendChild(phoneLi);
      infoList.appendChild(urlLi);
      //append the title then the list to the body
      createCardBody.appendChild(createCardTitle);
      createCardBody.appendChild(infoList);
      //append the image then the body to the card
      createCard.appendChild(cardImg);
      createCard.appendChild(createCardBody);
      //append the card tot he col
      createCol.appendChild(createCard);
      //append the row to the view-one display
      viewTwo.appendChild(createCol);
    }
    if (key == 6 || key == 7 || key == 8) {
      var createCol = document.createElement("div");
      createCol.classList.add("col-md-4", "my-3");
      //create the card
      var createCard = document.createElement("div");
      createCard.classList.add("card");
      //creata and link card img
      var cardImg = document.createElement("img");
      cardImg.classList.add("imgSize");
      cardImg.src = item.image;
      //create the card body
      var createCardBody = document.createElement("card-body");
      createCardBody.classList.add("card-body");
      //create the card title and give it the business name
      var createCardTitle = document.createElement("h4");
      createCardTitle.classList.add("card-title");
      createCardTitle.textContent = item.name;
      //create an unordered list for phone and adddress
      var infoList = document.createElement("ul");
      var phoneLi = document.createElement("li");
      var addressLi = document.createElement("li");
      var urlLi = document.createElement("li");
      var aUrl = document.createElement("a");
      var textLink = document.createTextNode("Link to yelp");
      aUrl.appendChild(textLink);
      aUrl.href = item.url;
      urlLi.appendChild(aUrl);
      phoneLi.textContent = item.phone;
      addressLi.textContent = item.address;
      //append phone and address to list
      infoList.appendChild(addressLi);
      infoList.appendChild(phoneLi);
      infoList.appendChild(urlLi);
      //append the title then the list to the body
      createCardBody.appendChild(createCardTitle);
      createCardBody.appendChild(infoList);
      //append the image then the body to the card
      createCard.appendChild(cardImg);
      createCard.appendChild(createCardBody);
      //append the card tot he col
      createCol.appendChild(createCard);
      //append the row to the view-one display
      viewThree.appendChild(createCol);
    }
  });
}
