'use strict';

function getDogImage(breed) {
    console.log(`https://dog.ceo/api/breed/`+breed+`/images/random`);
    fetch(`https://dog.ceo/api/breed/`+breed+`/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    //display the results section
    $('.results').removeClass('hidden');
  }



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage(document.getElementById("breed").value);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  getDogBreed();
});

function getDogBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(responseJson => createList(responseJson))
};

function createList(responseJson){
    let i = 0;
    let j = 0;
    console.log('create list ran');
    const doglist = responseJson.message;
    const dogbreeds= Object.keys(responseJson.message);
    console.log(dogbreeds);

    //This iterates thru all dog breeds and writes them into options
    for (i = 0; i < dogbreeds.length; i++){
        const nextBreed = dogbreeds[i];
        
        if(doglist[nextBreed].length == 0){
            $('#breed').append('"<option value="'+nextBreed+'">'+nextBreed+'</option>');
        }else{
            for(j = 0; j < doglist[nextBreed].length; j++){
                $('#breed').append('"<option value="'+ doglist[nextBreed][j] + ' ' + nextBreed + '">'+ doglist[nextBreed][j] + ' ' + nextBreed +  '</option>');
            }
        };
    };
};