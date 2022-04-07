const inputelement=document.querySelector('input');
    const btn=document.querySelector('.btn');
    const h1=document.querySelector('.h1');

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "Hello, world!");
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '2c696e7f0emsh3f92d75eb87749fp1b3985jsn51b112125934'
        
      },
      body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));


     



      