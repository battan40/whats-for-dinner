//Query Selectors:

var addRecipeButton = document.querySelector('.button-add-recipe');
var sideRadioButton = document.querySelector('#side');
var mainDishRadioButton = document.querySelector('#main-dish');
var dessertRadioButton = document.querySelector('#dessert')
var entireMealRadioButton = document.querySelector('#entire-meal');

var letsCookButton = document.querySelector('.lets-cook');
var whatAreYouLookingFor = document.querySelector('.what-are-you-looking-for');
var crockpotView = document.querySelector('.crockpot-view');
var youShouldMakeView = document.querySelector('.you-should-make');

// var radioButtonReadsAs = document.querySelector('input[name="dinner"]:checked').value


//Arrays:
mainDishes = ['Shakshuka','Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'Ramen', 'Empanadas', 'Tofu Fried Rice', 'Crab Cakes'];
sides = ['Miso Glazed Veggies', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Fries', 'Jasmine Rice', 'Caeser Salad', 'Hush Puppies'];
desserts = ['Tres leches','Baklava', 'Flan', 'Key Lime Pie', 'Pain Au Chocolat', 'Kheer', 'Three Chocolate Chip Cookies', 'Macarons', 'Masala Chai Spice Cake', 'Tart Tatin'];
//possible empty array for possibly interpolated meals to be injected into

// class FullMenu {
//   constructor(side, main, dessert, entireMeal) {
//   this.sidesMealChoice = side,
//   this.mainDishMealChoice = main,
//   this.dessertMealChoice = dessert,
//   this.entireMealChoice = entireMeal;
// }
//
// }

//Global Variable:
choice = '';

//Event Listeners:
letsCookButton.addEventListener('click', showRandomSelection);


//functions:

function showRandomSelection() {
  event.preventDefault();
  youShouldMakeView.classList.remove('hidden')
  crockpotView.classList.add('hidden')
  var randomMainDish = mainDishes[getRandomIndex(mainDishes)];
  var randomside = sides[getRandomIndex(sides)];
  var randomdessert = desserts[getRandomIndex(desserts)];


}
function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}

function choiceSide() {

}
function choiceMainDish() {

}
function choiceDessert() {

}

function bringMealTogether() {
  event.preventDefault();
    var randomMainDish = mainDishes[getRandomIndex(mainDishes)];
    var randomside = sides[getRandomIndex(sides)];
    var randomdessert = desserts[getRandomIndex(desserts)];

  //currentMealChoice = new Entire Meal(randomMainDish, randomSide, randomDessert)
}

function clearMealSelection(){

}

function goHome(){

}

function showEntireMeal(){

}

function addAsterisk(){
  return
}
