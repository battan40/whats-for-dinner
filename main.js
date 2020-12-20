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
var randomDish = document.querySelector('.random-meal-appears-here');


//Global Variable:
var choice = '';
var userChoice;

//Event Listeners:
letsCookButton.addEventListener('click', youShouldMake);

//functions:
function youShouldMake() {
  event.preventDefault();
  youShouldMakeView.classList.remove('hidden')
  crockpotView.classList.add('hidden')
  randomDish.classList.remove('hidden')
  if (sideRadioButton.checked === true) {
    randomDish.innerText = choiceSide()
  } else if (mainDishRadioButton.checked === true) {
      randomDish.innerText = choiceMainDish()
  } else {
      randomDish.innerText = choiceDessert()
  }
}
function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}
function choiceSide() {
  return sides[getRandomIndex(sides)] + '!';
}
function choiceMainDish() {
  return mainDishes[getRandomIndex(mainDishes)] + '!';
}
function choiceDessert() {
  return desserts[getRandomIndex(desserts)]+ '!';
}

function clearMealSelection(){
}

function goHome(){
}

//Arrays:
mainDishes = ['Shakshuka','Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'Ramen', 'Empanadas', 'Tofu Fried Rice', 'Crab Cakes'];
sides = ['Miso Glazed Veggies', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Fries', 'Jasmine Rice', 'Caeser Salad', 'Hush Puppies'];
desserts = ['Tres leches','Baklava', 'Flan', 'Key Lime Pie', 'Pain Au Chocolat', 'Kheer', 'Three Chocolate Chip Cookies', 'Macarons', 'Masala Chai Spice Cake', 'Tart Tatin'];
