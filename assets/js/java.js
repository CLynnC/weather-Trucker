var userInput = document.querySelector("#search-bar");


var APIKey = "77424e25aab1562d1c6c462752230d46";


document.getElementById("search").addEventListener('click', searchIng);






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
            console.log(data.main)
            console.log(data)
            console.log(cityName)
           // console.log(data.main.temp)
        });
}


alert(userInput)
console.log(userInput)