const oneURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&units=imperial&appid=e997671470321879b0d29e832e8c1fb8';

fetch(oneURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    //document.getElementById("current") = jsObject.list[0].weather[0].main;
    //const currentTemp = document.querySelector('#currentTemp');
    //const humidity = document.querySelector('#humidity');
    //const alert = document.querySelector('.closebtn');

    //const currentCond = document.querySelector('#currentCond');



    //currentTemp.innerHTML = jsObject.current.temp;

    document.getElementById('currentTemp').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('alert').textContent = jsObject.alerts;

    document.getElementById('currentCond').textContent = jsObject.weather.description;


  });

  