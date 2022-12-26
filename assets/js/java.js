var userInput = document.querySelector("#search-bar");

var currentDate = document.querySelector(".today");

var APIKey = "77424e25aab1562d1c6c462752230d46";


document.getElementById("search").addEventListener('click', searchIng);

var currentDate = dayjs();
$('.today').text(dayjs().format('M/DD/YYYY'));





//var city = splitR[0];
//var stateCode = splitR[1];
//
var userInput;






function searchIng(event) {
    event.preventDefault()
    let userInput = 
    document.getElementById("search-bar").value;
    console.log(userInput);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;
    let forcastURL=`http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${APIKey}`
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            let cityName = (data.name)
            var cityContainer = document.querySelector(".cityName");
            cityContainer.innerHTML = cityName, "";
            let currentIcon = (data.weather[0].icon)
            let image = document.createElement("img");
                image.src = "http://openweathermap.org/img/wn/" + currentIcon + ".png";
                image.width = 100;
                image.height = 110;

$('.condition').append(image);
            //document.body.
            //iconContainer.innerHTML = currentIcon;
            console.log(cityName)
            console.log(data)

    
           // console.log(data.main.temp)
        });
}


alert(userInput)
console.log(userInput)