

// PROJECT EXERCISE 1
/*
1. Inside "script.js", declare an "addBeer" function that has two parameters,
   "name" and "category".
   Stop there with an empty function as we'll continue writing it in the next exercise.
2. Now, separately, create a function to handle the '.post-beer' button getting clicked.
3. Inside, the handler function you'll want to invoke "addBeer".
   As it's arguments you'll need to give it the beer's "name" and "category" from the inputs.
*/
function addBeer (name, category, rate){
    debugger;
    var beerObj = {
        bName: name,         //alert(beerObj.bName); -> good
        bCategory: category, //alert(beerObj.bCategory); -> good
        bRate: rate // EXERCISE 4 -> bRate //alert(beerObj.bRate); -> good
    };
    

    beers.push("BeerName:  " + beerObj.bName + " BeerCategory:  " + 
    beerObj.bCategory + "  BeerRate: " + beerObj.bRate); // EXERCISE 4 -> bRate
    
    //alert(beers); get all the beer list!
    
}

function btnGetClicked(){
    var BeerName = $('.beer-input').val();
    var CategoryName = $('.category-input').val();
    var BeerRate = $('select').val(); // EXERCISE 4
    //alert(BeerRate); -> good

    //invoke addBeer
    addBeer (BeerName, CategoryName, BeerRate); // EXERCISE 4 -> BeerRate
    //invoke renderBeers
    renderBeers();
}

$('.post-beer').on('click' ,btnGetClicked); //OR $('.post-beer').click(btnGetClicked)

// PROJECT EXERCISE 2
/*
1. In your JavaScript, create a global array called "beers".
2. Inside the "addBeer" function, create a new "beer" object using the data
   that is passed to the function (ie via the parameters) and push it to a beers array.
*/

var beers = [];

// PROJECT EXERCISE 3
/*
1. Declare another function called "renderBeers" that takes no arguments.
2. Inside this function, firstly empty the beers <ul> so that it no longer has any <li> elements.
   Then loop through the "beers" array, inside the loop append the beers to the beers <ul>
3. Invoke "renderBeers" inside your click handler just below where you're invoking
   the "addBeer" function.
*/

function renderBeers(){
    $('.beers-list').empty(); // ??
    for(var i = 0; i < beers.length; i++)
    {
        $('.beers-list').append('<li class = "beers-li">' + beers[i] + '</li>');
    }


}


/* PROJECT EXERCISE 5 (EXTENSION) - DID'NT DO
Add another button to your page that will sort the beers on the page by rating when clicked.
If it gets clicked again, reverse the order (if they were sorted in ascending order,
sort in descending and vice-versa).
*/