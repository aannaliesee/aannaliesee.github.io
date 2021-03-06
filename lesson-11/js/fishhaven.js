const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=e997671470321879b0d29e832e8c1fb8';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


   const forecast = jsObject.list.filter(i => i.dt_txt.includes('18:00:00'));
    console.log(forecast);
    

    let day = 0;
    const weekdays = [' ', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    forecast.forEach(x => {
        const d = new Date(x.dt_txt);
        let icon = document.getElementById(`icon${day+1}`);

        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        
        icon.setAttribute('src', 'http://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png');
        icon.setAttribute('alt', forecast[day].weather[0].description);

        day++
        
    })
  });

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); 
      
      const towns = jsonObject['towns'];
      
    
      for (let i = 0; i <towns.length;i++) {
        let card = document.createElement('section');
        let data = document.createElement('div');
        let h1 = document.createElement('h1');
        
  
        h1.textContent = towns[i].events;
        
  
        card.appendChild(h1);
        card.appendChild(data);
  
        document.querySelector('div.towns').appendChild(card);
  
        
    
      }
    });
   