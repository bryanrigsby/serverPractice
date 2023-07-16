function testJS(){
    try {
        let one = document.getElementById("one")
        one.innerText = '';
        one.innerText ="Javascript works";
    } catch (error) {
        console.error('error in testJS()', error)
    }
}


function testServer(){
    let one = document.getElementById("one")
    one.innerText = '';
    fetch("http://localhost:3000/test")
  .then(function(response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function(data) {
    // Process the response data here
    let one = document.getElementById("one")
    one.innerText = data;
  })
  .catch(function(error) {
    // Handle any error that occurred
    console.error('error in testServer()', error)
  });
}

function testPokemonAPI(){
    let one = document.getElementById("one")
    one.innerText = '';
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
   .then(function(response) {
        console.log('response from server', response.ok)
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
    .then(function(data) {
        // Process the response data here
        console.log('data from PokeAPI', data)
        let imageURl = data.sprites.back_default;
        console.log("imageURl", imageURl)
        let imageElement = document.createElement('img');
        imageElement.src = imageURl;
        let one = document.getElementById("one")
        one.appendChild(imageElement);
        // //drill into the object to get the data you want
        // one.innerText = data.sprites.back_defaults;
      })
      .catch(function(error) {
        // Handle any error that occurred
        console.error('error in testPokemonAPI()', error)
      });
}

function testPokemonAPIFromServer(){
    console.log('getting into testPokemonAPIFromServer()')
    let one = document.getElementById("one")
    one.innerText = '';
    fetch("http://localhost:3000/pokemon")
    .then(function(response) {
        console.log('response from server', response)
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(function(data) {
        // Process the response data here
        console.log('data from server route /pokemon', data)
        let one = document.getElementById("one")
        //drill into the object to get the data you want
        one.innerText = data.name;
      })
      .catch(function(error) {
        // Handle any error that occurred
        console.error('error in testPokemonAPIFromServer()', error)
      });
}