const inputelement=document.querySelector('input');
    const btn=document.querySelector('.btn');
    // const h1=document.querySelector('.h1');

    // const encodedParams = new URLSearchParams();
    // encodedParams.append("q", "Hello, world!");
    // encodedParams.append("target", "es");
    // encodedParams.append("source", "en");
    
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Accept-Encoding': 'application/gzip',
    //     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    //     'X-RapidAPI-Key': '2c696e7f0emsh3f92d75eb87749fp1b3985jsn51b112125934'
        
    //   },
    //   body: encodedParams
    // };
    
    // fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));


      let fromLang = document.querySelector("#from");
      let toLang = document.querySelector("#to");
      let fromInput = document.querySelector(".from__input");
      let toInput = document.querySelector(".to__input");
      let changer = document.querySelector(".changer");
      // let btn = document.querySelector(".run__btn");
      let langs = [];
      let langsArr = [];
      btn.addEventListener("click", function () {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", inputelement.value);
        encodedParams.append("target", "es");
        encodedParams.append("source", "en");
      
        const option = {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            "X-RapidAPI-Key": "2c696e7f0emsh3f92d75eb87749fp1b3985jsn51b112125934",
          },
          body: encodedParams,
        };
      
        fetch(
          "https://google-translate1.p.rapidapi.com/language/translate/v2",
          option
        )
          .then((response) => response.json())
          .then((response) => {
            
          })
          .catch((err) => console.error(err));
        /**data:
      translations: Array(1)
      0: {translatedText: 'hello'}
      length: 1 */
      });
      const options = {
        method: "GET",
        headers: {
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
          "X-RapidAPI-Key": "2c696e7f0emsh3f92d75eb87749fp1b3985jsn51b112125934",
        },
      };
      
      fetch(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          // langs.forEach((element) => {
          //   let optin = <option value="${element.language}">${element.language}</option>;
          //   fromLang.insertAdjacentHTML("beforeend", optin);
          //   toLang.insertAdjacentHTML("beforeend", optin);
          // });
        })
        .catch((err) => console.error(err));






      