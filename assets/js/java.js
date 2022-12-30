var userInput = document.querySelector("#search-bar");

var currentDate = document.querySelector(".today");

//var APIKey = "77424e25aab1562d1c6c462752230d46";
var APIKey = "323f1dc6bac5ba0a2f91ab4d1f418500";

document.getElementById("search").addEventListener('click', searchIng);

var currentDate = dayjs();
$('.today').text(dayjs().format('M/DD/YYYY'));

var userInput;







function searchIng(event) {
    let userInput = 
    document.getElementById("search-bar").value;
    console.log(userInput);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey + "&units=imperial";
    
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            let cityName = (data.name)
            var cityContainer = document.querySelector(".cityName");
            cityContainer.innerHTML = cityName, "";
            
            let currentIcon = (data.weather[0].icon)   
            window.image = document.createElement('img');
                    image.src =("http://openweathermap.org/img/wn/" + currentIcon +".png");
                    image.widt_txth = 80
                    image.height = 90   
            let imageContainer = $('#current').children().eq(2);
            imageContainer.replaceWith(image);
            console.log(window.image);

            let currentTemp = (data.main.temp)
            var tempContainer = document.querySelector(".temp");
                tempContainer.innerHTML = "Temp:   _ " + currentTemp;
            
            let currentWind = (data.wind.speed)
            var windSpeedContainer = document.querySelector(".wind");
                windSpeedContainer.innerHTML = "Wind Speed:  __ " + currentWind + " MPH";

            let currentHumidity = (data.main.humidity)
            var currentHumidityContainer = document.querySelector(".humidity");
                currentHumidityContainer.innerHTML = "Humidity:  _ " + currentHumidity + " %";
        })
        var forcastURL= "http://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + APIKey + "&units=imperial";
    fetch(forcastURL)
        .then(response => response.json())
        .then(data => {
            let date1 = (data.list[5].dt_txt)
            $('#date1').text(dayjs(date1).format('M/DD/YYYY'));

            let forcast1Icon = (data.list[5].weather[0].icon)   
            window.image1 = document.createElement('img');
                    image1.src =("http://openweathermap.org/img/wn/" + forcast1Icon +".png");
                    image1.widt_txth = 80
                    image1.height = 90   
            let image1Container = $('#forecast').children().eq(0).children().eq(1);
            image1Container.replaceWith(image1);
            
            let temp1 = (data.list[5].main.temp)
            var containerOne = document.querySelector("#temp1");
                containerOne.innerHTML = "Temp: _ " + temp1 + "\u00B0" ;

            let wind1 = (data.list[5].wind.speed)
            var windContainerOne = document.querySelector("#wind1");
                windContainerOne.innerHTML = "Wind: _ " + wind1 + " MPH";

            let humidity1 = (data.list[5].main.humidity)
            var humidityContainerOne = document.querySelector("#humidity1");
                humidityContainerOne.innerHTML = "Humidity: _ " + humidity1 + " %";

                let date2 = (data.list[13].dt_txt)
                $('#date2').text(dayjs(date2).format('M/DD/YYYY'));

                let forcast2Icon = (data.list[13].weather[0].icon)   
            window.image2 = document.createElement('img');
                    image2.src =("http://openweathermap.org/img/wn/" + forcast2Icon +".png");
                    image2.widt_txth = 80
                    image2.height = 90   
            let image2Container = document.querySelector("#icon2");
            image2Container.replaceWith(image2);
                
                let temp2 = (data.list[13].main.temp)
                var containerTwo = document.querySelector("#temp2");
                    containerTwo.innerHTML = "Temp: _ " + temp2 + "\u00B0" ;
    
                let wind2 = (data.list[13].wind.speed)
                var windContainerTwo = document.querySelector("#wind2");
                    windContainerTwo.innerHTML = "Wind: _ " + wind2 + " MPH";
    
                let humidity2 = (data.list[13].main.humidity)
                var humidityContainerTwo = document.querySelector("#humidity2");
                    humidityContainerTwo.innerHTML = "Humidity: _ " + humidity2 + " %";

                    let date3 = (data.list[21].dt_txt)
            $('#date3').text(dayjs(date3).format('M/DD/YYYY'));
            
            let forcast3Icon = (data.list[21].weather[0].icon)   
            window.image3 = document.createElement('img');
                    image3.src =("http://openweathermap.org/img/wn/" + forcast3Icon +".png");
                    image3.widt_txth = 80
                    image3.height = 90   
            let image3Container = document.querySelector("#icon3");
            image3Container.replaceWith(image3);

            let temp3 = (data.list[21].main.temp)
            var containerThree = document.querySelector("#temp3");
                containerThree.innerHTML = "Temp: _ " + temp3 + "\u00B0" ;

            let wind3 = (data.list[21].wind.speed)
            var windContainerThree = document.querySelector("#wind3");
                windContainerThree.innerHTML = "Wind: _ " + wind3 + " MPH";

            let humidity3 = (data.list[21].main.humidity)
            var humidityContainerThree = document.querySelector("#humidity3");
                humidityContainerThree.innerHTML = "Humidity: _ " + humidity3 + " %";

                let date4 = (data.list[29].dt_txt)
            $('#date4').text(dayjs(date4).format('M/DD/YYYY'));
            
            let forcast4Icon = (data.list[29].weather[0].icon)   
            window.image4 = document.createElement('img');
                    image4.src =("http://openweathermap.org/img/wn/" + forcast4Icon + ".png");
                    image4.widt_txth = 80
                    image4.height = 90   
            let image4Container = document.querySelector('#icon4');
            image4Container.replaceWith(image4);

            console.log(window.image4);

            let temp4 = (data.list[29].main.temp)
            var containerFour = document.querySelector("#temp4");
                containerFour.innerHTML = "Temp: _ " + temp4 + "\u00B0" ;

            let wind4 = (data.list[29].wind.speed)
            var windContainerFour = document.querySelector("#wind4");
                windContainerFour.innerHTML = "Wind: _ " + wind4 + " MPH";

            let humidity4 = (data.list[29].main.humidity)
            var humidityContainerFour = document.querySelector("#humidity4");
                humidityContainerFour.innerHTML = "Humidity: _ " + humidity4 + " %";

                let date5 = (data.list[37].dt_txt)
            $('#date5').text(dayjs(date5).format('M/DD/YYYY'));
            
            let forcast5Icon = (data.list[37].weather[0].icon)   
            window.image5 = document.createElement('img');
                    image5.src =("http://openweathermap.org/img/wn/" + forcast5Icon +".png");
                    image5.widt_txth = 80
                    image5.height = 90   
            let image5Container = document.querySelector("#icon5");
            image5Container.replaceWith(image5);

            let temp5 = (data.list[37].main.temp)
            var containerFive = document.querySelector("#temp5");
                containerFive.innerHTML = "Temp: _ " + temp5 + "\u00B0" ;

            let wind5 = (data.list[37].wind.speed)
            var windContainerFive = document.querySelector("#wind5");
                windContainerFive.innerHTML = "Wind: _ " + wind5 + " MPH";

            let humidity5 = (data.list[37].main.humidity)
            var humidityContainerFive = document.querySelector("#humidity5");
                humidityContainerFive.innerHTML = "Humidity: _ " + humidity5 + " %";
            
        localStorage.setItem("cityName", userInput);
                //document.body.
            //iconContainer.innerHTML = currentIcon;
            
            console.log(data)

    
           // console.log(data.main.temp)
        })
    }
