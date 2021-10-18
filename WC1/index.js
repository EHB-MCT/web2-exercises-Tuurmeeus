'use strict';

window.onload = function(){
    console.log('loaded');
}


document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log('Submitted');

    let name = document.getElementById('fname').value;
    let email = document.getElementById('femail').value;
    let order = document.getElementById('order').value;

    document.getElementById('message').innerHTML = getMessage(name, order, email);
})

function getMessage(name, order, email){
    return `<p>The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${email}.</p>`
}