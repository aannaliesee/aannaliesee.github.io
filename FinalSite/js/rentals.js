const requestURL = 'https://aannaliesee.github.io/FinalSite/data/rentals.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    
    const rentals = jsonObject['rentals'];

    for (let i = 0; i < rentals.length; i++ ) {
      let card = document.createElement('section');
      let type = document.createElement('h2');
      let maxpersons = document.createElement('p');
      let halfday = document.createElement('p');
      let fullday = document.createElement('p');
      
      let image = document.createElement('img');

      type.textContent = rentals[i].type;
      maxpersons.textContent = `Max Persons: ${rentals[i].maxpersons}`;
      halfday.textContent = `Half Day Price: ${rentals[i].halfday}`;
      fullday.textContent = `Full Day Price: ${rentals[i].fullday}`;

      image.textContent =  rentals[i].image;


      card.appendChild(type);
      card.appendChild(maxpersons);
      card.appendChild(halfday);
      card.appendChild(fullday);
      card.appendChild(image);
      
  
      document.querySelector('div.cards').appendChild(card);

      image.setAttribute('src', rentals[i].image);
      image.setAttribute('alt', rentals[i].h2);

      //card.appendChild(image);
  
     // document.querySelector('div.cards').appendChild(card);
      //image.setAttribute('src', rentals[i].imageurl);
      //image.setAttribute('alt', rentals[i].name);

    }
  });