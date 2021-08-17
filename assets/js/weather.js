var buttonEl = document.querySelector('#btn')
var inputValue = document.querySelector('.form-control')
var cityName = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

// console.log(ButtonEl)

buttonEl.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputValue.value)
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=47d402ab8a0a4f0f7b9c25f732362d6b';
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            cityName.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
        .catch(err => alert("Wrong city name!"))
})

