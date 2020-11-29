
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

   
