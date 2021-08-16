const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://national-weather-service.p.rapidapi.com/points/%7Bpoint%7D/forecast/hourly",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7b8728bf8cmsh5fe8553dacf422dp134527jsn15f30cf68ef9",
		"x-rapidapi-host": "national-weather-service.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});