const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    
    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++ ) {
      let card = document.createElement('section');
      let data = document.createElement('div');
      let h1 = document.createElement('h1');
      let motto = document.createElement('h2');
      let founded = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');

      let photo = document.createElement('img');


      h1.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      pop.textContent = 'Current Population: ' + towns[i].currentPopulation;
      rain.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

      photo.setAttribute('src', './images/' + towns[i].photo);
      photo.setAttribute('alt', towns[i].name);

      card.appendChild(h1);
      card.appendChild(motto);
      card.appendChild(founded);
      card.appendChild(pop);
      card.appendChild(rain);

      card.appendChild(data);
      card.appendChild(photo);

  
      document.querySelector('div.towns').appendChild(card);

      //image.setAttribute('src', prophets[i].imageurl);
      //image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

    }
  });