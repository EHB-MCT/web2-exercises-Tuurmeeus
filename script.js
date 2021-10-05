'use strict';

let list = [];
let pokemon = [];

function getData(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
            response.json().then(data => {
                list = data.results;
                //loop over list to get each pokemon
                for(let element of list){
                    fetch(element.url).then(response => {
                        return response.json();
                    }).then(data => {
                        pokemon.push(data);
                    })
                }

            })
    });
}

window.onload = function(){
    setTimeout(buildList, 5000);

    function buildList(){
        //opmaak div
    }

}

/**function getNewData(){
    let resp = fetch();
    return await resp.json();
}*/

getData();