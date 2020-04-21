'use strict';

function getDogImage(numberOfDogs) {
    console.log('https://dog.ceo/api/breeds/image/random/'+ numberOfDogs);
    fetch('https://dog.ceo/api/breeds/image/random/'+ numberOfDogs)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message.map(image=>image));

  $('.results').empty();
  //replace the existing image with the new one
  $('.results').append(responseJson.message.map(image => `<img src="${image}" class="results-img">`));
  //display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage(document.getElementById("number").value);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});