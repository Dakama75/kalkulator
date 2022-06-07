      let final = Number(array[1])
      let lat, lon;
      const button = document.getElementById('btnEql');
      button.addEventListener('click', async event => {
        const data = { lat, lon };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
      });
      
      if ('geolocation' in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
          lat = final;
          lon = '2';
        });
      } else {
        console.log('geolocation not available');
      }