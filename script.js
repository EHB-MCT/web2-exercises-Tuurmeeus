'use strict';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(response => response.json())
.then(data => data.forEach(function(e){
    console.log(e.name);
}));

