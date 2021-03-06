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

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = $("#close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var TastesArray= [];

var storage = require("./storage");

var StorageTastesArray = storage.get("tastes");

if(StorageTastesArray){
  
    TastesArray = StorageTastesArray;
    
    initialiseCheckboxes();
} else {
    TastesArray= [{taste: "meat", check: 0},{taste: "milk", check: 0},{taste: "cheese", check: 0},
                 {taste: "butter", check: 0 },{taste: "eggs", check: 0},{taste: "flour", check: 0},
                 {taste: "sugar", check: 0 },{taste: "salt", check: 0},{taste: "soda", check: 0},
                 {taste: "cornstarch", check: 0 },{taste: "cinnamon", check: 0},{taste: "oats", check: 0},
                 {taste: "nuts", check: 0 }];
    initialiseCheckboxes();
}
    
    
function getTastesArray(){
    return TastesArray;
}

var tastesBreakfastArray =[];
var tastesLunchArray =[];
var tastesDinerArray =[];

function getRecipeArray(){
    return RecipeArray;
}

function showRecipeList(list) {
    $recipe_list.html("");

    function showOneRecipe(recipe) {
        addToArray(RecipeArray, recipe, id);
         
        if(recipe.type[0]=="breakfast" || recipe.type[1]=="breakfast" || recipe.type[3]=="breakfast"){
            addToArray(BreakfastArray, recipe, breakfastRecipeId);
            
            //вывод назвния ингредиентов рецептов из массива завтраков
//            for(var k=0; k<RecipeArray[breakfastRecipeId].recipe.ingredients.length; k++){
//                console.log(RecipeArray[breakfastRecipeId].recipe.ingredients[k].name);
//            }
            
            breakfastRecipeId+=1;
        }
        
         if(recipe.type[0]=="diner" || recipe.type[1]=="diner" || recipe.type[3]=="diner"){
            addToArray(DinerArray, recipe, dinerRecipeId);
            dinerRecipeId+=1;
        }  
               
       var html_code = Templates.RecipeList_OneItem({recipe: recipe});
        var $node = $(html_code);
        
        $node.find(".more").click(function(){
            var ingrid="";
            for(var k=0; k<recipe.ingredients.length; k++){
                       ingrid+=recipe.ingredients[k].name + " - " +  recipe.ingredients[k].quantity + "; <br> ";
            }
            var steps="";
            for(var k=0; k<recipe.steps.length; k++){
                       steps+=recipe.steps[k] + " ";
            }

            $(".recipeName").text(recipe.name);
            $(".recipeInfoImage").attr("src", recipe.imageURL);
            $(".recipeInfoIngredients").html(ingrid);
            $(".recipeInfoCook").text(steps);
            $("#myModal").find(".close").click(function(){
                $("#myModal").css("display","none");
            });
            $("#myModal").css("display","block");
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
   // console.log(randomRecipe(BreakfastArray).name);
    var randRecipe = randomRecipe(BreakfastArray);
    var ingrid="";
    for(var k=0; k<randRecipe.ingredients.length; k++){
               ingrid+=randRecipe.ingredients[k].name + " - " +  randRecipe.ingredients[k].quantity + "; <br> ";
    }
    var steps="";
    for(var k=0; k<randRecipe.steps.length; k++){
               steps+=randRecipe.steps[k] + " ";
    }
    
    $(".recipeName").text(randRecipe.name);
    $(".recipeInfoImage").attr("src", randRecipe.imageURL);
    $(".recipeInfoIngredients").html(ingrid);
    $(".recipeInfoCook").text(steps);
    $("#myModal").find(".close").click(function(){
                $("#myModal").css("display","none");
            });
    
    modal.style.display = "block"; 
});

$("#random-lunch").click(function(){
    LunchArray=BreakfastArray;
    var randRecipe = randomRecipe(BreakfastArray);
    var ingrid="";
    for(var k=0; k<randRecipe.ingredients.length; k++){
               ingrid+=randRecipe.ingredients[k].name + " - " +  randRecipe.ingredients[k].quantity + "; <br> ";
    }
    var steps="";
    for(var k=0; k<randRecipe.steps.length; k++){
               steps+=randRecipe.steps[k] + " ";
    }
    
    $(".recipeName").text(randRecipe.name);
    $(".recipeInfoImage").attr("src", randRecipe.imageURL);
    $(".recipeInfoIngredients").html(ingrid);
    $(".recipeInfoCook").text(steps);
    $("#myModal").find(".close").click(function(){
                $("#myModal").css("display","none");
            });
    modal.style.display = "block";  
});

$("#random-diner").click(function(){
    var randRecipe = randomRecipe(BreakfastArray);
    var ingrid="";
    for(var k=0; k<randRecipe.ingredients.length; k++){
               ingrid+=randRecipe.ingredients[k].name + " - " +  randRecipe.ingredients[k].quantity + "; <br> ";
    }
    var steps="";
    for(var k=0; k<randRecipe.steps.length; k++){
               steps+=randRecipe.steps[k] + " ";
    }
    
    $(".recipeName").text(randRecipe.name);
    $(".recipeInfoImage").attr("src", randRecipe.imageURL);
    $(".recipeInfoIngredients").html(ingrid);
    $(".recipeInfoCook").text(steps);
    $("#myModal").find(".close").click(function(){
                $("#myModal").css("display","none");
            });
    modal.style.display = "block";
});


function randomRecipe(list) {
    var number = parseInt(Math.random() * (list.length));   
    return list[number].recipe;
    
}






function initialiseCheckboxes(){
    TastesArray.forEach(function(item) {
       
        if ("meat" == item.taste){
            if(item.check==1){
                $("#meat").attr('checked', 'checked');
            } 
        }

        if ("milk" == item.taste){
            if(item.check==1){
                $("#milk").attr('checked', 'checked');
            } 
        }
        
        if ("cheese" == item.taste){
            if(item.check==1){
                $("#cheese").attr('checked', 'checked');
            } 
        }
        
        if ("butter" == item.taste){
            if(item.check==1){
                $("#butter").attr('checked', 'checked');
            } 
        }
        
        if ("eggs" == item.taste){
            if(item.check==1){
                $("#eggs").attr('checked', 'checked');
            } 
        }
        
         if ("flour" == item.taste){
            if(item.check==1){
                $("#flour").attr('checked', 'checked');
            } 
        }
        
         if ("sugar" == item.taste){
            if(item.check==1){
                $("#sugar").attr('checked', 'checked');
            } 
        }
        
         if ("salt" == item.taste){
            if(item.check==1){
                $("#salt").attr('checked', 'checked');
            } 
        }
        
         if ("soda" == item.taste){
            if(item.check==1){
                $("#soda").attr('checked', 'checked');
            } 
        }
        
         if ("cornstarch" == item.taste){
            if(item.check==1){
                $("#cornstarch").attr('checked', 'checked');
            } 
        }
        
         if ("cinnamon" == item.taste){
            if(item.check==1){
                $("#cinnamon").attr('checked', 'checked');
            } 
        }
        
         if ("oats" == item.taste){
            if(item.check==1){
                $("#oats").attr('checked', 'checked');
            } 
        }
        
         if ("nuts" == item.taste){
            if(item.check==1){
                $("#nuts").attr('checked', 'checked');
            } 
        }
        
	});
  
}


$("#meat").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("meat" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
     //   console.log("meat before check " + TastesArray[id].check);
		TastesArray[id].check = 1;
      //  console.log("meat after check " + TastesArray[id].check);
	} else {
    //    console.log("meat before uncheck " + TastesArray[id].check);
		TastesArray[id].check = 0;
    //    console.log("meat after uncheck " + TastesArray[id].check);
	}  
    storage.set("tastes", TastesArray); 
  //  console.log("tastes "+TastesArray[id].taste +" "+TastesArray[id].check);
  //  console.log("storage "+ StorageTastesArray[id].taste +" "+StorageTastesArray[id].check);
});

$("#milk").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("milk" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
     //   console.log("milk before check " + TastesArray[id].check);
		TastesArray[id].check = 1;
      //  console.log("milk after check " + TastesArray[id].check);
	} else {
	//	console.log("milk before uncheck " + TastesArray[id].check);
		TastesArray[id].check = 0;
     //   console.log("milk after uncheck " + TastesArray[id].check);
	}  
    storage.set("tastes", TastesArray); 
  //  console.log("tastes "+ TastesArray[id].taste +" "+TastesArray[id].check);
   //  console.log("storage "+ StorageTastesArray[id].taste +" "+StorageTastesArray[id].check);
});

$("#cheese").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("cheese" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#butter").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("butter" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#eggs").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("eggs" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#flour").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("flour" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#sugar").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("sugar" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#salt").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("salt" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#soda").click(function() {
    	var id = -1;
	TastesArray.forEach(function(item) {
		if ("soda" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#cornstarch").click(function() {
    	var id = -1;
	TastesArray.forEach(function(item) {
		if ("cornstarch" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#cinnamon").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("cinnamon" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#oats").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("oats" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#nuts").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("nuts" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
    
});

function updateTastes(){
    var $node = $("#tastes").html();  
    $("#tastes").html("");
    $("#tastes").append($node);
    
  //  initialiseCheckboxes(TastesArray);  
}


$("#clear_tastes").click(clearTastes());

function clearTastes(){
    TastesArray= [{taste: "meat", check: 0},{taste: "milk", check: 0},{taste: "cheese", check: 0},
                 {taste: "butter", check: 0 },{taste: "eggs", check: 0},{taste: "flour", check: 0},
                 {taste: "sugar", check: 0 },{taste: "salt", check: 0},{taste: "soda", check: 0},
                 {taste: "cornstarch", check: 0 },{taste: "cinnamon", check: 0},{taste: "oats", check: 0},
                 {taste: "nuts", check: 0 }];
    storage.clear;
}


exports.initialiseMenu = initialiseMenu;
exports.getRecipeArray = getRecipeArray;