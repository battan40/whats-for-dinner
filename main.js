//Query Selectors:

var addRecipeButton = document.querySelector('.button-add-recipe');
var sideRadioButton = document.querySelector('#side');
var mainDishRadioButton = document.querySelector('#main-dish');
var dessertRadioButton = document.querySelector('#dessert')
var entireMealRadioButton = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('.lets-cook');


//Arrays:

var mealList = ;

//Possible Global Variables?:

//Event Listeners:

//functions:

function makeRandomMealAppear() {
  event.preventDefault() {
    var randomMealAppears = mealList[getRandomIndex(mealList)];
  }
}

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);

}

function clearMealSelection(){

}

function goHome(){

}

function showEntireMeal(){

}
