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

// var businessInfo = [];
// var businessObj = {
//   name: businessName,
//   phone: displayPhone,
//   image: image,
//   address: displayAddress,
//   url: yelpURL,
// };
var viewOne = document.getElementById("view-one");
var viewTwo = document.getElementById("view-two");
var viewThree = document.getElementById("view-three");
function renderCard() {
  businessInfo.forEach((item, key) => {
    console.log(item.name);
    console.log(key);
    //create the 3 columns
    if (key == 0 || key == 1 || key == 2) {
      var createCol = document.createElement("div");
      createCol.classList.add("col-md-4", "my-3");
      //create the card
      var createCard = document.createElement("div");
      createCard.classList.add("card");
      //creata and link card img
      var cardImg = document.createElement("img");
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
      phoneLi.textContent = item.phone;
      addressLi.textContent = item.address;
      //append phone and address to list
      infoList.appendChild(addressLi);
      infoList.appendChild(phoneLi);
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
      phoneLi.textContent = item.phone;
      addressLi.textContent = item.address;
      //append phone and address to list
      infoList.appendChild(addressLi);
      infoList.appendChild(phoneLi);
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
      phoneLi.textContent = item.phone;
      addressLi.textContent = item.address;
      //append phone and address to list
      infoList.appendChild(addressLi);
      infoList.appendChild(phoneLi);
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