const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e997671470321879b0d29e832e8c1fb8';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


   const forecast = jsObject.list.filter(i => i.dt_txt.includes('18:00:00'));
    console.log(forecast);
    

    let day = 0;
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
    /*let day = 0;

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    
    forecast.forEach(i => {
      const d= new Date(i.dt_txt);
      document.getElementById('dayofweek${day+1}').textContent = weekdays[d.getDay()];
      document.getElementById('forecast${day+1}').textContent = i.main.temp;
      day++;

    })*/