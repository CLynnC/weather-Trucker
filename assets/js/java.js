var userInput = document.querySelector("#search-bar");

var currentDate = document.querySelector(".today");

//var APIKey = "77424e25aab1562d1c6c462752230d46";
var APIKey = "323f1dc6bac5ba0a2f91ab4d1f418500";

document.getElementById("search").addEventListener('click', searchIng);

var currentDate = dayjs();
$('.today').text(dayjs().format('M/DD/YYYY'));

//var img = document.querySelector(".condition",);



//var city = splitR[0];
//var stateCode = splitR[1];
//
var userInput;






function searchIng(event) {
    event.preventDefault()
    let userInput = 
    document.getElementById("search-bar").value;
    console.log(userInput);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey + "&units=imperial";
    let forcastURL=`http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${APIKey}`
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            let cityName = (data.name)
            var cityContainer = document.querySelector(".cityName");
            cityContainer.innerHTML = cityName, "";
            
            let currentIcon = (data.weather[0].icon)
            
            var img = document.createElement("img");
                img.src = ("http://openweathermap.org/img/wn/" + currentIcon + ".png");
            var block = document.getElementById("condition");
                block.appendChild(img);
                        
                    
                //if (block === img) {
                     //  block.innerHTML = new (img)}
               //}}  else {
            //        block.replaceChild(img , img);
               // }
            
               
            //let img = document.createElement("img");
            //img.src = `http://openweathermap.org/img/wn/${currentIcon}.png`;
                //img.width = 100
                //img.height = 110  
            //var imageContainer = document.querySelector(".condition");
            //imageContainer.innerHTML.append(img);
            console.log(img);

            let currentTemp = (data.main.temp)
            var tempContainer = document.querySelector(".temp");
                tempContainer.innerHTML = "Temp:   _ " + currentTemp;
            //document.body.
            //iconContainer.innerHTML = currentIcon;
            console.log(cityName)
            console.log(data)

    
           // console.log(data.main.temp)
        })
}

//document.getElementById('search').onclick = function searchIng(){}