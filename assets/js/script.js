//Button variable and listener
var submitBtn = document.getElementById("submit-button");
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
