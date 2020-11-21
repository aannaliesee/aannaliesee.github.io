const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e997671470321879b0d29e832e8c1fb8';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    //document.getElementById("current") = jsObject.list[0].weather[0].main;
    const curtemp = document.querySelector('#current-temp');
    curtemp.innerHTML = jsObject.main.temp;

    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

    /*const weather = jsObject['weather'];
    const main =jsObject['main'];
    const wind =jsObject['wind'];*/

   /* document.getElementById('temp').textContent = jsObject.list[0].main.temp;
    document.getElementById('humid').textContent = jsObject.list[0].main.humidity;
    document.getElementById('speed').textContent = jsObject.list[0].wind.speed;
    document.getElementById('weat').textContent = jsObject.list[0].weather[0].main;
    doInputOutput(main, wind);*/
  });

  

/*function doInputOutput(main, wind){
    let tempF = main.temp;
    let speed = wind.speed;
    let calculatedChill = windChill(tempF, speed);
    windChill(tempF, speed);
    document.getElementById('chill').innerHTML = calculatedChill;
    
}

function windChill(t, s) {
    if (t < 50 && s > 3) {
    let chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    chill = chill.toFixed(0);
    return chill;
    }
    else {
    chill = "N/A"
    return chill;
    }
}

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
*/

  