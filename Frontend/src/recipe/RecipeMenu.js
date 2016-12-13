var Templates = require('../Templates');
var Recipe_List = require('../recipe_list');
var $recipe_list = $("#recipe_list");

function showRecipeList(list) {
    $recipe_list.html("");

    function showOneRecipe(recipe) {
        var html_code = Templates.RecipeList_OneItem({recipe: recipe});

        var $node = $(html_code);
        console.log(recipe.name);

        $node.find(".more").click(function(){
            
        });
        
        $recipe_list.append($node);
    }

    list.forEach(showOneRecipe);
}

function initialiseMenu() {
    showRecipeList(Recipe_List); 
}

exports.initialiseMenu = initialiseMenu;