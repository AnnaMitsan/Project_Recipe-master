var Templates = require('../Templates');
var Recipe_List = require('../recipe_list');

var $recipe_list = $("#recipe_list");
var id=0;
var breakfastRecipeId=0;
var lunchRecipeId=0;
var dinerRecipeId=0;
var RecipeArray =[];
var BreakfastArray =[];
var LunchArray =[];
var DinerArray =[];


function showRecipeList(list) {
    $recipe_list.html("");

    function showOneRecipe(recipe) {
        addToArray(RecipeArray, recipe, id);
        
//        console.log("all - id:"+ RecipeArray[id].id + " name: " + RecipeArray[id].recipe.name + " type: " +RecipeArray[id].recipe.type);       
        
        if(recipe.type[0]=="breakfast" || recipe.type[1]=="breakfast" || recipe.type[3]=="breakfast"){
            addToArray(BreakfastArray, recipe, breakfastRecipeId);
            breakfastRecipeId+=1;
        }
        
         if(recipe.type[0]=="lunch" || recipe.type[1]=="lunch" || recipe.type[3]=="lunch"){
            addToArray(LunchArray, recipe, lunchRecipeId);
            lunchRecipeId+=1;
        }
        
         if(recipe.type[0]=="diner" || recipe.type[1]=="diner" || recipe.type[3]=="diner"){
            addToArray(DinerArray, recipe, dinerRecipeId);
            dinerRecipeId+=1;
        }    
        var html_code = Templates.RecipeList_OneItem({recipe: recipe});
        var $node = $(html_code);
        $node.find(".more").click(function(){
            
        });      
        $recipe_list.append($node);
        id+=1;
    }
    list.forEach(showOneRecipe);   
}

function initialiseMenu() {
    showRecipeList(Recipe_List); 
}

function addToArray(array, recipe, id) {   
     array.push({
        id: id,
        recipe: recipe
    });   
}

$("#random-breakfast").click(function(){
   console.log(randomRecipe(BreakfastArray));
});

$("#random-lunch").click(function(){
   console.log(randomRecipe(LunchArray));
});

$("#random-diner").click(function(){
   console.log(randomRecipe(DinerArray));
});


function randomRecipe(array) {
    var number = parseInt(Math.random() * (array.length)); 
    console.log("random id = "+number)
    return array[number].recipe.type;
}

exports.initialiseMenu = initialiseMenu;