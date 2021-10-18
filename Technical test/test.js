'use strict'

const API_KEY = 'ac18eb99bb9f4a1a8adddcd0a1be2c71';

function getRiceProducts(){
    fetch(`https://api.spoonacular.com/food/products/search?query=rice&apiKey=${API_KEY}`)
    .then(response => {
        return response.json();
    }).then(data => {
        let list = data.products;
        //console.log(data);

        for(let e of list){
            //console.log(e.image);
            document.getElementById('results').insertAdjacentHTML('beforeend', `<img src=${e.image}>`);
            
        }

    })
}

window.onload = function(){
    getRiceProducts();
}