(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var ejs = require('ejs');


exports.RecipeList_OneItem = ejs.compile("<div class=\"grid_4\">\n        <div class=\"gall_block\">\n          <div class=\"maxheight\">\n            <a class=\"gall_item show_popup\" rel=\"recipe_info\"><img src=\"<%= recipe.imageURL %>\"></a>\n            <div class=\"gall_bot\">\n            <div class=\"text1\"><%= recipe.name %></div> \n            <a href=\"#\" class=\"btn\">more</a></div>\n          </div>\n        </div>\n      </div>");

exports.Recipe_OneItem = ejs.compile("");

},{"ejs":9}],2:[function(require,module,exports){
$(function(){
    //This code will execute when the page is ready
    var RecipeMenu = require('./recipe/RecipeMenu');
    var  RandomRecipe = require('./recipe/RandomRecipe');
    var Tastes = require('./recipe/Tastes');
    
    RecipeMenu.initialiseMenu();
  //  Tastes.initialiseCheckboxes();
});
},{"./recipe/RandomRecipe":3,"./recipe/RecipeMenu":4,"./recipe/Tastes":5}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
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
},{"../Templates":1,"../recipe_list":7}],5:[function(require,module,exports){
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

},{"./storage":6}],6:[function(require,module,exports){
var basil = require('basil.js'); basil = new basil();
exports.get = function(key) {
return basil.get(key); };
exports.set = function(key, value) {
return basil.set(key, value); };
},{"basil.js":8}],7:[function(require,module,exports){
var recipe_info = [
    {
        name: "Crock Pot Roast",
        type: ["diner", "lunch"],
        "ingredients": [
            {
                "quantity": "1",
                "name": "beef roast",
                "type": "Meat"
            },
            {
                "quantity": "1 package",
                "name": "brown gravy mix",
                "type": "Baking"
            },
            {
                "quantity": "1 package",
                "name": "dried Italian salad dressing mix",
                "type": "Condiments"
            },
            {
                "quantity": "1 package",
                "name": "dry ranch dressing mix",
                "type": "Condiments"
            },
            {
                "quantity": "1/2 cup",
                "name": "water",
                "type": "Drinks"
            }
        ],
        "steps": [
            "Place beef roast in crock pot.",
            "Mix the dried mixes together in a bowl and sprinkle over the roast.",
            "Pour the water around the roast.",
            "Cook on low for 7-9 hours."
        ],
        "timers": [
            0,
            0,
            0,
            420
        ],
        imageURL: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
    },
    {
        "name": "Roasted Asparagus",
        type: ["lunch"],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "asparagus",
                "type": "Produce"
            },
            {
                "quantity": "1 1/2 tbsp",
                "name": "olive oil",
                "type": "Condiments"
            },
            {
                "quantity": "1/2 tsp",
                "name": "kosher salt",
                "type": "Baking"
            }
        ],
        "steps": [
            "Preheat oven to 425°F.",
            "Cut off the woody bottom part of the asparagus spears and discard.",
            "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
            "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
            "Sprinkle with salt.",
            "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
            "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
            "They should be tender when pierced with the tip of a knife.",
            "The tips of the spears will get very brown but watch them to prevent burning.",
            "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
        ],
        "timers": [
            0,
            0,
            0,
            0,
            0,
            0,
            10,
            0,
            0,
            0
        ],
        "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
        "originalURL": "http://www.food.com/recipe/roasted-asparagus-50847"
    },
    {
        "name": "Curried Lentils and Rice",
        type: ["diner", "lunch"],
        "ingredients": [
            {
                "quantity": "1 quart",
                "name": "beef broth",
                "type": "Misc"
            },
            {
                "quantity": "1 cup",
                "name": "dried green lentils",
                "type": "Misc"
            },
            {
                "quantity": "1/2 cup",
                "name": "basmati rice",
                "type": "Misc"
            },
            {
                "quantity": "1 tsp",
                "name": "curry powder",
                "type": "Condiments"
            },
            {
                "quantity": "1 tsp",
                "name": "salt",
                "type": "Condiments"
            }
        ],
        "steps": [
            "Bring broth to a low boil.",
            "Add curry powder and salt.",
            "Cook lentils for 20 minutes.",
            "Add rice and simmer for 20 minutes.",
            "Enjoy!"
        ],
        "timers": [
            0,
            0,
            20,
            20,
            0
        ],
        "imageURL": "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg"
    },
    {
        "name": "Big Night Pizza",
         type: ["diner", "lunch"],
        "ingredients": [
            {
                "quantity": "5 teaspoons",
                "name": "yeast",
                "type": "Baking"
            },
            {
                "quantity": "5 cups",
                "name": "flour",
                "type": "Baking"
            },
            {
                "quantity": "4 tablespoons",
                "name": "vegetable oil",
                "type": "Baking"
            },
            {
                "quantity": "2 tablespoons",
                "name": "sugar",
                "type": "Baking"
            },
            {
                "quantity": "2 teaspoons",
                "name": "salt",
                "type": "Baking"
            },
            {
                "quantity": "2 cups",
                "name": "hot water",
                "type": "Misc"
            },
            {
                "quantity": "1/4 cup",
                "name": "pizza sauce",
                "type": "Misc"
            },
            {
                "quantity": "3/4 cup",
                "name": "mozzarella cheese",
                "type": "Dairy"
            }
        ],
        "steps": [
            "Add hot water to yeast in a large bowl and let sit for 15 minutes.",
            "Mix in oil, sugar, salt, and flour and let sit for 1 hour.",
            "Knead the dough and spread onto a pan.",
            "Spread pizza sauce and sprinkle cheese.",
            "Add any optional toppings as you wish.",
            "Bake at 400 deg Fahrenheit for 15 minutes.",
            "Enjoy!"
        ],
        "timers": [
            15,
            60,
            0,
            0,
            0,
            15,
            0
        ],
        "imageURL": "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg"
    },
    {
        "name": "Apple Stuffed Acorn Squash",
         type: ["breakfast", "lunch"],
        "ingredients": [
            {
                "quantity": "2",
                "name": "acorn squash",
                "type": "Produce"
            },
            {
                "quantity": "1",
                "name": "boiling water",
                "type": "Drinks"
            },
            {
                "quantity": "2",
                "name": "apples chopped into 1.4 inch pieces",
                "type": "Produce"
            },
            {
                "quantity": "1/2 cup",
                "name": "dried cranberries",
                "type": "Produce"
            },
            {
                "quantity": "1 teaspoon",
                "name": "cinnamon",
                "type": "Baking"
            },
            {
                "quantity": "2 tablespoons",
                "name": "melted butter",
                "type": "Dairy"
            }
        ],
        "steps": [
            "Cut squash in half, remove seeds.",
            "Place squash in baking dish, cut-side down.",
            "Pour 1/4-inch water into dish.",
            "Bake for 30 minutes at 350 degrees F.",
            "In large bowl, combine remaining ingredients.",
            "Remove squash from oven, fill with mix.",
            "Bake for 30-40 more minutes, until squash tender.",
            "Enjoy!"
        ],
        "timers": [
            0,
            0,
            0,
            30,
            0,
            0,
            30,
            0
        ],
        "imageURL": "http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg",
        "originalURL": ""
    },
    {
        "name": "Mic's Yorkshire Puds",
         type: ["breakfast"],
        "ingredients": [
            {
                "quantity": "200g",
                "name": "plain flour",
                "type": "Baking"
            },
            {
                "quantity": "3",
                "name": "eggs",
                "type": "Dairy"
            },
            {
                "quantity": "300ml",
                "name": "milk",
                "type": "Dairy"
            },
            {
                "quantity": "3 tbsp",
                "name": "vegetable oil",
                "type": "Condiments"
            }
        ],
        "steps": [
            "Put the flour and some seasoning into a large bowl.",
            "Stir in eggs, one at a time.",
            "Whisk in milk until you have a smooth batter.",
            "Chill in the fridge for at least 30 minutes.",
            "Heat oven to 220C/gas mark 7.",
            "Pour the oil into the holes of a 8-hole muffin tin.",
            "Heat tin in the oven for 5 minutes.",
            "Ladle the batter mix into the tin.",
            "Bake for 30 minutes until well browned and risen."
        ],
        "timers": [
            0,
            0,
            0,
            30,
            0,
            0,
            5,
            0,
            30
        ],
        "imageURL": "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg",
        "originalURL": "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg"
    },
    {
        "name": "Old-Fashioned Oatmeal Cookies",
         type: ["breakfast"],
        "ingredients": [
            {
                "quantity": "1 cup",
                "name": "raisins",
                "type": "Produce"
            },
            {
                "quantity": "1",
                "name": "cup water",
                "type": "Drinks"
            },
            {
                "quantity": "3/4 cup",
                "name": "shortening",
                "type": "Baking"
            },
            {
                "quantity": "1 1/2 cups",
                "name": "sugar",
                "type": "Baking"
            },
            {
                "quantity": "2 1/2 cups",
                "name": "flour",
                "type": "Baking"
            },
            {
                "quantity": "1 tsp.",
                "name": "soda",
                "type": "Baking"
            },
            {
                "quantity": "1 tsp.",
                "name": "salt",
                "type": "Baking"
            },
            {
                "quantity": "1 tsp.",
                "name": "cinnamon",
                "type": "Baking"
            },
            {
                "quantity": "1/2 tsp.",
                "name": "baking powder",
                "type": "Baking"
            },
            {
                "quantity": "1/2 tsp.",
                "name": "cloves",
                "type": "Baking"
            },
            {
                "quantity": "2 cups",
                "name": "oats",
                "type": "Baking"
            },
            {
                "quantity": "1/2 cup",
                "name": "chopped nuts",
                "type": "Baking"
            }
        ],
        "steps": [
            "Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.",
            "Drain raisins, reserving the liquid.",
            "Add enough water to reserved liquid to measure 1/2 cup.",
            "Heat oven to 400°.",
            "Mix thoroughly shortening, sugar, eggs and vanilla.",
            "Stir in reserved liquid.",
            "Blend in remaining ingredients.",
            "Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.",
            "Bake 8 to 10 minutes or until light brown.",
            "About 6 1/2 dozen cookies."
        ],
        "timers": [
            15,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            8,
            0
        ],
        "imageURL": "http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg",
        "originalURL": "#"
    },
    {
        "name": "Blueberry Oatmeal Squares",
         type: ["breakfast", "diner"],
        "ingredients": [
            {
                "quantity": "2-1/2 cups",
                "name": "rolled oats, (not instant)",
                "type": "Baking"
            },
            {
                "quantity": "1-1/4 cups",
                "name": "all-purpose flour",
                "type": "Baking"
            },
            {
                "quantity": "1 tbsp",
                "name": "grated orange rind",
                "type": "Produce"
            },
            {
                "quantity": "1/4 tsp",
                "name": "salt",
                "type": "Baking"
            },
            {
                "quantity": "1 cup",
                "name": "cold butter, cubed",
                "type": "Baking"
            },
            {
                "quantity": "3/4 cup",
                "name": "packed brown sugar",
                "type": "Baking"
            },
            {
                "quantity": "3 cups",
                "name": "fresh blueberries",
                "type": "Produce"
            },
            {
                "quantity": "1/2 cup",
                "name": "granulated sugar",
                "type": "Baking"
            },
            {
                "quantity": "1/3 cup",
                "name": "orange juice",
                "type": "Produce"
            },
            {
                "quantity": "4 tsp",
                "name": "cornstarch",
                "type": "Baking"
            }
        ],
        "steps": [
            "Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes.",
            "Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute.",
            "Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour.",
            "In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs.",
            "Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling.",
            "Bake in centre of 350°F oven until light golden, about 45 minutes.",
            "Let cool on rack before cutting into squares.",
            "(Make-ahead: Cover and refrigerate for up to 2 days or overwrap with heavy-duty foil and freeze for up to 2 weeks.)"
        ],
        "timers": [
            10,
            1,
            60,
            0,
            0,
            45,
            0,
            0
        ],
        "imageURL": "http://blog.fatfreevegan.com/images/blueberry-oat-bars2.jpg",
        "originalURL": "http://blog.fatfreevegan.com/images/blueberry-oat-bars2.jpg"
    },
    {
        "name": "Curried chicken salad",
         type: ["diner", "lunch"],
        "ingredients": [
            {
                "quantity": "3",
                "name": "skinless, boneless chicken breasts, halved lengthwise",
                "type": "Meat"
            },
            {
                "quantity": "1/2 cup",
                "name": "mayonnaise",
                "type": "Baking"
            },
            {
                "quantity": "1 tbsp",
                "name": "lemon zest",
                "type": "Produce"
            },
            {
                "quantity": "1 tbsp ",
                "name": "lemon juice",
                "type": "Produce"
            },
            {
                "quantity": "1 1/2 tsp",
                "name": "curry powder",
                "type": "Baking"
            },
            {
                "quantity": "1/4 tsp",
                "name": "salt",
                "type": "Baking"
            },
            {
                "quantity": "2",
                "name": "ripe mangoes, diced",
                "type": "Produce"
            },
            {
                "quantity": "1/4 cup",
                "name": "dried cranberries",
                "type": "Produce"
            },
            {
                "quantity": "2",
                "name": "green onions, thinly sliced",
                "type": "Produce"
            },
            {
                "quantity": "1",
                "name": "celery stalk, finely chopped",
                "type": "Produce"
            },
            {
                "quantity": "6 leaves",
                "name": "Boston lettuce",
                "type": "Produce"
            },
            {
                "quantity": "6",
                "name": "English muffins, toasted",
                "type": "Misc"
            }
        ],
        "steps": [
            "ARRANGE chicken in a single layer in a large pot.",
            "Add water to just cover.",
            "Bring to a boil over medium-high.",
            "Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.",
            "Cool.",
            "STIR mayo with lemon zest, juice, curry and salt in large bowl.",
            "Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.",
            "Divide among muffins with lettuce leaves",
            "Sandwich with tops"
        ],
        "timers": [
            0,
            0,
            0,
            6,
            0,
            0,
            0,
            0,
            0
        ],
        "imageURL": "http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg",
        "originalURL": "http://www.chatelaine.com/recipe/stovetop-cooking-method/curried-chicken-salad/"
    }
    ];

module.exports = recipe_info;
},{}],8:[function(require,module,exports){
(function () {
	// Basil
	var Basil = function (options) {
		return Basil.utils.extend({}, Basil.plugins, new Basil.Storage().init(options));
	};

	// Version
	Basil.version = '0.4.4';

	// Utils
	Basil.utils = {
		extend: function () {
			var destination = typeof arguments[0] === 'object' ? arguments[0] : {};
			for (var i = 1; i < arguments.length; i++) {
				if (arguments[i] && typeof arguments[i] === 'object')
					for (var property in arguments[i])
						destination[property] = arguments[i][property];
			}
			return destination;
		},
		each: function (obj, fnIterator, context) {
			if (this.isArray(obj)) {
				for (var i = 0; i < obj.length; i++)
					if (fnIterator.call(context, obj[i], i) === false) return;
			} else if (obj) {
				for (var key in obj)
					if (fnIterator.call(context, obj[key], key) === false) return;
			}
		},
		tryEach: function (obj, fnIterator, fnError, context) {
			this.each(obj, function (value, key) {
				try {
					return fnIterator.call(context, value, key);
				} catch (error) {
					if (this.isFunction(fnError)) {
						try {
							fnError.call(context, value, key, error);
						} catch (error) {}
					}
				}
			}, this);
		},
		registerPlugin: function (methods) {
			Basil.plugins = this.extend(methods, Basil.plugins);
		},
		getTypeOf: function (obj) {
			if (typeof obj === 'undefined' || obj === null)
				return '' + obj;
			return Object.prototype.toString.call(obj).replace(/^\[object\s(.*)\]$/, function ($0, $1) { return $1.toLowerCase(); });
		}
	};
  	// Add some isType methods: isArguments, isBoolean, isFunction, isString, isArray, isNumber, isDate, isRegExp, isUndefined, isNull.
	var types = ['Arguments', 'Boolean', 'Function', 'String', 'Array', 'Number', 'Date', 'RegExp', 'Undefined', 'Null'];
	for (var i = 0; i < types.length; i++) {
		Basil.utils['is' + types[i]] = (function (type) {
			return function (obj) {
				return Basil.utils.getTypeOf(obj) === type.toLowerCase();
			};
		})(types[i]);
	}

	// Plugins
	Basil.plugins = {};

	// Options
	Basil.options = Basil.utils.extend({
		namespace: 'b45i1',
		storages: ['local', 'cookie', 'session', 'memory'],
		expireDays: 365
	}, window.Basil ? window.Basil.options : {});

	// Storage
	Basil.Storage = function () {
		var _salt = 'b45i1' + (Math.random() + 1)
				.toString(36)
				.substring(7),
			_storages = {},
			_isValidKey = function (key) {
				var type = Basil.utils.getTypeOf(key);
				return (type === 'string' && key) || type === 'number' || type === 'boolean';
			},
			_toStoragesArray = function (storages) {
				if (Basil.utils.isArray(storages))
					return storages;
				return Basil.utils.isString(storages) ? [storages] : [];
			},
			_toStoredKey = function (namespace, path) {
				var key = '';
				if (_isValidKey(path)) {
					key += path;
				} else if (Basil.utils.isArray(path)) {
					path = Basil.utils.isFunction(path.filter) ? path.filter(_isValidKey) : path;
					key = path.join('.');
				}
				return key && _isValidKey(namespace) ? namespace + '.' + key : key;
 			},
			_toKeyName = function (namespace, key) {
				if (!_isValidKey(namespace))
					return key;
				return key.replace(new RegExp('^' + namespace + '.'), '');
			},
			_toStoredValue = function (value) {
				return JSON.stringify(value);
			},
			_fromStoredValue = function (value) {
				return value ? JSON.parse(value) : null;
			};

		// HTML5 web storage interface
		var webStorageInterface = {
			engine: null,
			check: function () {
				try {
					window[this.engine].setItem(_salt, true);
					window[this.engine].removeItem(_salt);
				} catch (e) {
					return false;
				}
				return true;
			},
			set: function (key, value, options) {
				if (!key)
					throw Error('invalid key');
				window[this.engine].setItem(key, value);
			},
			get: function (key) {
				return window[this.engine].getItem(key);
			},
			remove: function (key) {
				window[this.engine].removeItem(key);
			},
			reset: function (namespace) {
				for (var i = 0, key; i < window[this.engine].length; i++) {
					key = window[this.engine].key(i);
					if (!namespace || key.indexOf(namespace) === 0) {
						this.remove(key);
						i--;
					}
				}
			},
			keys: function (namespace) {
				var keys = [];
				for (var i = 0, key; i < window[this.engine].length; i++) {
					key = window[this.engine].key(i);
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key));
				}
				return keys;
			}
		};

		// local storage
		_storages.local = Basil.utils.extend({}, webStorageInterface, {
			engine: 'localStorage'
		});
		// session storage
		_storages.session = Basil.utils.extend({}, webStorageInterface, {
			engine: 'sessionStorage'
		});

		// memory storage
		_storages.memory = {
			_hash: {},
			check: function () {
				return true;
			},
			set: function (key, value, options) {
				if (!key)
					throw Error('invalid key');
				this._hash[key] = value;
			},
			get: function (key) {
				return this._hash[key] || null;
			},
			remove: function (key) {
				delete this._hash[key];
			},
			reset: function (namespace) {
				for (var key in this._hash) {
					if (!namespace || key.indexOf(namespace) === 0)
						this.remove(key);
				}
			},
			keys: function (namespace) {
				var keys = [];
				for (var key in this._hash)
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key));
				return keys;
			}
		};

		// cookie storage
		_storages.cookie = {
			check: function () {
				if (!navigator.cookieEnabled)
					return false;
				if (window.self !== window.top) {
					// we need to check third-party cookies;
					var cookie = 'thirdparty.check=' + Math.round(Math.random() * 1000);
					document.cookie = cookie + '; path=/';
					return document.cookie.indexOf(cookie) !== -1;
				}
				return true;
			},
			set: function (key, value, options) {
				if (!this.check())
					throw Error('cookies are disabled');
				options = options || {};
				if (!key)
					throw Error('invalid key');
				var cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
				// handle expiration days
				if (options.expireDays) {
					var date = new Date();
					date.setTime(date.getTime() + (options.expireDays * 24 * 60 * 60 * 1000));
					cookie += '; expires=' + date.toGMTString();
				}
				// handle domain
				if (options.domain && options.domain !== document.domain) {
					var _domain = options.domain.replace(/^\./, '');
					if (document.domain.indexOf(_domain) === -1 || _domain.split('.').length <= 1)
						throw Error('invalid domain');
					cookie += '; domain=' + options.domain;
				}
				// handle secure
				if (options.secure === true) {
					cookie += '; secure';
				}
				document.cookie = cookie + '; path=/';
			},
			get: function (key) {
				if (!this.check())
					throw Error('cookies are disabled');
				var encodedKey = encodeURIComponent(key);
				var cookies = document.cookie ? document.cookie.split(';') : [];
				// retrieve last updated cookie first
				for (var i = cookies.length - 1, cookie; i >= 0; i--) {
					cookie = cookies[i].replace(/^\s*/, '');
					if (cookie.indexOf(encodedKey + '=') === 0)
						return decodeURIComponent(cookie.substring(encodedKey.length + 1, cookie.length));
				}
				return null;
			},
			remove: function (key) {
				// remove cookie from main domain
				this.set(key, '', { expireDays: -1 });
				// remove cookie from upper domains
				var domainParts = document.domain.split('.');
				for (var i = domainParts.length; i >= 0; i--) {
					this.set(key, '', { expireDays: -1, domain: '.' + domainParts.slice(- i).join('.') });
				}
			},
			reset: function (namespace) {
				var cookies = document.cookie ? document.cookie.split(';') : [];
				for (var i = 0, cookie, key; i < cookies.length; i++) {
					cookie = cookies[i].replace(/^\s*/, '');
					key = cookie.substr(0, cookie.indexOf('='));
					if (!namespace || key.indexOf(namespace) === 0)
						this.remove(key);
				}
			},
			keys: function (namespace) {
				if (!this.check())
					throw Error('cookies are disabled');
				var keys = [],
					cookies = document.cookie ? document.cookie.split(';') : [];
				for (var i = 0, cookie, key; i < cookies.length; i++) {
					cookie = cookies[i].replace(/^\s*/, '');
					key = decodeURIComponent(cookie.substr(0, cookie.indexOf('=')));
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key));
				}
				return keys;
			}
		};

		return {
			init: function (options) {
				this.setOptions(options);
				return this;
			},
			setOptions: function (options) {
				this.options = Basil.utils.extend({}, this.options || Basil.options, options);
			},
			support: function (storage) {
				return _storages.hasOwnProperty(storage);
			},
			check: function (storage) {
				if (this.support(storage))
					return _storages[storage].check();
				return false;
			},
			set: function (key, value, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key)))
					return false;
				value = options.raw === true ? value : _toStoredValue(value);
				var where = null;
				// try to set key/value in first available storage
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					_storages[storage].set(key, value, options);
					where = storage;
					return false; // break;
				}, null, this);
				if (!where) {
					// key has not been set anywhere
					return false;
				}
				// remove key from all other storages
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					if (storage !== where)
						_storages[storage].remove(key);
				}, null, this);
				return true;
			},
			get: function (key, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key)))
					return null;
				var value = null;
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					if (value !== null)
						return false; // break if a value has already been found.
					value = _storages[storage].get(key, options) || null;
					value = options.raw === true ? value : _fromStoredValue(value);
				}, function (storage, index, error) {
					value = null;
				}, this);
				return value;
			},
			remove: function (key, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key)))
					return;
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					_storages[storage].remove(key);
				}, null, this);
			},
			reset: function (options) {
				options = Basil.utils.extend({}, this.options, options);
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					_storages[storage].reset(options.namespace);
				}, null, this);
			},
			keys: function (options) {
				options = options || {};
				var keys = [];
				for (var key in this.keysMap(options))
					keys.push(key);
				return keys;
			},
			keysMap: function (options) {
				options = Basil.utils.extend({}, this.options, options);
				var map = {};
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					Basil.utils.each(_storages[storage].keys(options.namespace), function (key) {
						map[key] = Basil.utils.isArray(map[key]) ? map[key] : [];
						map[key].push(storage);
					}, this);
				}, null, this);
				return map;
			}
		};
	};

	// Access to native storages, without namespace or basil value decoration
	Basil.memory = new Basil.Storage().init({ storages: 'memory', namespace: null, raw: true });
	Basil.cookie = new Basil.Storage().init({ storages: 'cookie', namespace: null, raw: true });
	Basil.localStorage = new Basil.Storage().init({ storages: 'local', namespace: null, raw: true });
	Basil.sessionStorage = new Basil.Storage().init({ storages: 'session', namespace: null, raw: true });

	// browser export
	window.Basil = Basil;

	// AMD export
	if (typeof define === 'function' && define.amd) {
		define(function() {
			return Basil;
		});
	// commonjs export
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Basil;
	}

})();

},{}],9:[function(require,module,exports){
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

'use strict';

/**
 * @file Embedded JavaScript templating engine.
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

/**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */

/**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

var scopeOptionWarned = false;
var _VERSION_STRING = require('../package.json').version;
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS = ['delimiter', 'scope', 'context', 'debug', 'compileDebug',
  'client', '_with', 'rmWhitespace', 'strict', 'filename'];
var _BOM = /^\uFEFF/;

/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */

exports.cache = utils.cache;

/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */

exports.localsName = _DEFAULT_LOCALS_NAME;

/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} isDir    parent file path whether is directory
 * @return {String}
 */
exports.resolveInclude = function(name, filename, isDir) {
  var dirname = path.dirname;
  var extname = path.extname;
  var resolve = path.resolve;
  var includePath = resolve(isDir ? filename : dirname(filename), name);
  var ext = extname(name);
  if (!ext) {
    includePath += '.ejs';
  }
  return includePath;
};

/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */
function getIncludePath(path, options){
  var includePath;
  if (path.charAt(0) == '/') {
    includePath = exports.resolveInclude(path.replace(/^\/*/,''), options.root || '/', true);
  }
  else {
    if (!options.filename) {
      throw new Error('`include` use relative path requires the \'filename\' option.');
    }
    includePath = exports.resolveInclude(path, options.filename);
  }
  return includePath;
}

/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */

function handleCache(options, template) {
  var func;
  var filename = options.filename;
  var hasTemplate = arguments.length > 1;

  if (options.cache) {
    if (!filename) {
      throw new Error('cache option requires a filename');
    }
    func = exports.cache.get(filename);
    if (func) {
      return func;
    }
    if (!hasTemplate) {
      template = fs.readFileSync(filename).toString().replace(_BOM, '');
    }
  }
  else if (!hasTemplate) {
    // istanbul ignore if: should not happen at all
    if (!filename) {
      throw new Error('Internal EJS error: no file name or template '
                    + 'provided');
    }
    template = fs.readFileSync(filename).toString().replace(_BOM, '');
  }
  func = exports.compile(template, options);
  if (options.cache) {
    exports.cache.set(filename, func);
  }
  return func;
}

/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */

function includeFile(path, options) {
  var opts = utils.shallowCopy({}, options);
  opts.filename = getIncludePath(path, opts);
  return handleCache(opts);
}

/**
 * Get the JavaScript source of an included file.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {Object}
 * @static
 */

function includeSource(path, options) {
  var opts = utils.shallowCopy({}, options);
  var includePath;
  var template;
  includePath = getIncludePath(path,opts);
  template = fs.readFileSync(includePath).toString().replace(_BOM, '');
  opts.filename = includePath;
  var templ = new Template(template, opts);
  templ.generateSource();
  return {
    source: templ.source,
    filename: includePath,
    template: template
  };
}

/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements RethrowCallback
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} filename file name of the EJS file
 * @param {String} lineno   line number of the error
 * @static
 */

function rethrow(err, str, flnm, lineno){
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = utils.escapeXML(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
}

function stripSemi(str) {
  return str.replace(/;(\s*$)/, '$1');
}

/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} opts     compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * @public
 */

exports.compile = function compile(template, opts) {
  var templ;

  // v1 compat
  // 'scope' is 'context'
  // FIXME: Remove this in a future version
  if (opts && opts.scope) {
    if (!scopeOptionWarned){
      console.warn('`scope` option is deprecated and will be removed in EJS 3');
      scopeOptionWarned = true;
    }
    if (!opts.context) {
      opts.context = opts.scope;
    }
    delete opts.scope;
  }
  templ = new Template(template, opts);
  return templ.compile();
};

/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {String}
 * @public
 */

exports.render = function (template, d, o) {
  var data = d || {};
  var opts = o || {};

  // No options object -- if there are optiony names
  // in the data, copy them to options
  if (arguments.length == 2) {
    utils.shallowCopyFromList(opts, data, _OPTS);
  }

  return handleCache(opts, template)(data);
};

/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */

exports.renderFile = function () {
  var args = Array.prototype.slice.call(arguments);
  var filename = args.shift();
  var cb = args.pop();
  var data = args.shift() || {};
  var opts = args.pop() || {};
  var optsKeys =_OPTS.slice();
  var result;

  // Don't pollute passed in opts obj with new vals
  opts = utils.shallowCopy({}, opts);

  // We don't allow 'cache' option to be passed in the data obj
  // for the normal `render` call, but this is where Expres puts it
  // so we make an exception for `renderFile`
  optsKeys.push('cache');

  // No options object -- if there are optiony names
  // in the data, copy them to options
  if (arguments.length == 3) {
    // Express 4
    if (data.settings && data.settings['view options']) {
      utils.shallowCopyFromList(opts, data.settings['view options'], optsKeys);
    }
    // Express 3 and lower
    else {
      utils.shallowCopyFromList(opts, data, optsKeys);
    }
  }
  opts.filename = filename;

  try {
    result = handleCache(opts)(data);
  }
  catch(err) {
    return cb(err);
  }
  return cb(null, result);
};

/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */

exports.clearCache = function () {
  exports.cache.reset();
};

function Template(text, opts) {
  opts = opts || {};
  var options = {};
  this.templateText = text;
  this.mode = null;
  this.truncate = false;
  this.currentLine = 1;
  this.source = '';
  this.dependencies = [];
  options.client = opts.client || false;
  options.escapeFunction = opts.escape || utils.escapeXML;
  options.compileDebug = opts.compileDebug !== false;
  options.debug = !!opts.debug;
  options.filename = opts.filename;
  options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
  options.strict = opts.strict || false;
  options.context = opts.context;
  options.cache = opts.cache || false;
  options.rmWhitespace = opts.rmWhitespace;
  options.root = opts.root;
  options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;

  if (options.strict) {
    options._with = false;
  }
  else {
    options._with = typeof opts._with != 'undefined' ? opts._with : true;
  }

  this.opts = options;

  this.regex = this.createRegex();
}

Template.modes = {
  EVAL: 'eval',
  ESCAPED: 'escaped',
  RAW: 'raw',
  COMMENT: 'comment',
  LITERAL: 'literal'
};

Template.prototype = {
  createRegex: function () {
    var str = _REGEX_STRING;
    var delim = utils.escapeRegExpChars(this.opts.delimiter);
    str = str.replace(/%/g, delim);
    return new RegExp(str);
  },

  compile: function () {
    var src;
    var fn;
    var opts = this.opts;
    var prepended = '';
    var appended = '';
    var escape = opts.escapeFunction;

    if (!this.source) {
      this.generateSource();
      prepended += '  var __output = [], __append = __output.push.bind(__output);' + '\n';
      if (opts._with !== false) {
        prepended +=  '  with (' + opts.localsName + ' || {}) {' + '\n';
        appended += '  }' + '\n';
      }
      appended += '  return __output.join("");' + '\n';
      this.source = prepended + this.source + appended;
    }

    if (opts.compileDebug) {
      src = 'var __line = 1' + '\n'
          + '  , __lines = ' + JSON.stringify(this.templateText) + '\n'
          + '  , __filename = ' + (opts.filename ?
                JSON.stringify(opts.filename) : 'undefined') + ';' + '\n'
          + 'try {' + '\n'
          + this.source
          + '} catch (e) {' + '\n'
          + '  rethrow(e, __lines, __filename, __line);' + '\n'
          + '}' + '\n';
    }
    else {
      src = this.source;
    }

    if (opts.debug) {
      console.log(src);
    }

    if (opts.client) {
      src = 'escape = escape || ' + escape.toString() + ';' + '\n' + src;
      if (opts.compileDebug) {
        src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
      }
    }

    if (opts.strict) {
      src = '"use strict";\n' + src;
    }

    try {
      fn = new Function(opts.localsName + ', escape, include, rethrow', src);
    }
    catch(e) {
      // istanbul ignore else
      if (e instanceof SyntaxError) {
        if (opts.filename) {
          e.message += ' in ' + opts.filename;
        }
        e.message += ' while compiling ejs\n\n';
        e.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
        e.message += 'https://github.com/RyanZim/EJS-Lint';
      }
      throw e;
    }

    if (opts.client) {
      fn.dependencies = this.dependencies;
      return fn;
    }

    // Return a callable function which will execute the function
    // created by the source-code, with the passed data as locals
    // Adds a local `include` function which allows full recursive include
    var returnedFn = function (data) {
      var include = function (path, includeData) {
        var d = utils.shallowCopy({}, data);
        if (includeData) {
          d = utils.shallowCopy(d, includeData);
        }
        return includeFile(path, opts)(d);
      };
      return fn.apply(opts.context, [data || {}, escape, include, rethrow]);
    };
    returnedFn.dependencies = this.dependencies;
    return returnedFn;
  },

  generateSource: function () {
    var opts = this.opts;

    if (opts.rmWhitespace) {
      // Have to use two separate replace here as `^` and `$` operators don't
      // work well with `\r`.
      this.templateText =
        this.templateText.replace(/\r/g, '').replace(/^\s+|\s+$/gm, '');
    }

    // Slurp spaces and tabs before <%_ and after _%>
    this.templateText =
      this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');

    var self = this;
    var matches = this.parseTemplateText();
    var d = this.opts.delimiter;

    if (matches && matches.length) {
      matches.forEach(function (line, index) {
        var opening;
        var closing;
        var include;
        var includeOpts;
        var includeObj;
        var includeSrc;
        // If this is an opening tag, check for closing tags
        // FIXME: May end up with some false positives here
        // Better to store modes as k/v with '<' + delimiter as key
        // Then this can simply check against the map
        if ( line.indexOf('<' + d) === 0        // If it is a tag
          && line.indexOf('<' + d + d) !== 0) { // and is not escaped
          closing = matches[index + 2];
          if (!(closing == d + '>' || closing == '-' + d + '>' || closing == '_' + d + '>')) {
            throw new Error('Could not find matching close tag for "' + line + '".');
          }
        }
        // HACK: backward-compat `include` preprocessor directives
        if ((include = line.match(/^\s*include\s+(\S+)/))) {
          opening = matches[index - 1];
          // Must be in EVAL or RAW mode
          if (opening && (opening == '<' + d || opening == '<' + d + '-' || opening == '<' + d + '_')) {
            includeOpts = utils.shallowCopy({}, self.opts);
            includeObj = includeSource(include[1], includeOpts);
            if (self.opts.compileDebug) {
              includeSrc =
                  '    ; (function(){' + '\n'
                  + '      var __line = 1' + '\n'
                  + '      , __lines = ' + JSON.stringify(includeObj.template) + '\n'
                  + '      , __filename = ' + JSON.stringify(includeObj.filename) + ';' + '\n'
                  + '      try {' + '\n'
                  + includeObj.source
                  + '      } catch (e) {' + '\n'
                  + '        rethrow(e, __lines, __filename, __line);' + '\n'
                  + '      }' + '\n'
                  + '    ; }).call(this)' + '\n';
            }else{
              includeSrc = '    ; (function(){' + '\n' + includeObj.source +
                  '    ; }).call(this)' + '\n';
            }
            self.source += includeSrc;
            self.dependencies.push(exports.resolveInclude(include[1],
                includeOpts.filename));
            return;
          }
        }
        self.scanLine(line);
      });
    }

  },

  parseTemplateText: function () {
    var str = this.templateText;
    var pat = this.regex;
    var result = pat.exec(str);
    var arr = [];
    var firstPos;

    while (result) {
      firstPos = result.index;

      if (firstPos !== 0) {
        arr.push(str.substring(0, firstPos));
        str = str.slice(firstPos);
      }

      arr.push(result[0]);
      str = str.slice(result[0].length);
      result = pat.exec(str);
    }

    if (str) {
      arr.push(str);
    }

    return arr;
  },

  scanLine: function (line) {
    var self = this;
    var d = this.opts.delimiter;
    var newLineCount = 0;

    function _addOutput() {
      if (self.truncate) {
        // Only replace single leading linebreak in the line after
        // -%> tag -- this is the single, trailing linebreak
        // after the tag that the truncation mode replaces
        // Handle Win / Unix / old Mac linebreaks -- do the \r\n
        // combo first in the regex-or
        line = line.replace(/^(?:\r\n|\r|\n)/, '');
        self.truncate = false;
      }
      else if (self.opts.rmWhitespace) {
        // rmWhitespace has already removed trailing spaces, just need
        // to remove linebreaks
        line = line.replace(/^\n/, '');
      }
      if (!line) {
        return;
      }

      // Preserve literal slashes
      line = line.replace(/\\/g, '\\\\');

      // Convert linebreaks
      line = line.replace(/\n/g, '\\n');
      line = line.replace(/\r/g, '\\r');

      // Escape double-quotes
      // - this will be the delimiter during execution
      line = line.replace(/"/g, '\\"');
      self.source += '    ; __append("' + line + '")' + '\n';
    }

    newLineCount = (line.split('\n').length - 1);

    switch (line) {
    case '<' + d:
    case '<' + d + '_':
      this.mode = Template.modes.EVAL;
      break;
    case '<' + d + '=':
      this.mode = Template.modes.ESCAPED;
      break;
    case '<' + d + '-':
      this.mode = Template.modes.RAW;
      break;
    case '<' + d + '#':
      this.mode = Template.modes.COMMENT;
      break;
    case '<' + d + d:
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace('<' + d + d, '<' + d) + '")' + '\n';
      break;
    case d + d + '>':
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace(d + d + '>', d + '>') + '")' + '\n';
      break;
    case d + '>':
    case '-' + d + '>':
    case '_' + d + '>':
      if (this.mode == Template.modes.LITERAL) {
        _addOutput();
      }

      this.mode = null;
      this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
      break;
    default:
        // In script mode, depends on type of tag
      if (this.mode) {
          // If '//' is found without a line break, add a line break.
        switch (this.mode) {
        case Template.modes.EVAL:
        case Template.modes.ESCAPED:
        case Template.modes.RAW:
          if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
            line += '\n';
          }
        }
        switch (this.mode) {
            // Just executing code
        case Template.modes.EVAL:
          this.source += '    ; ' + line + '\n';
          break;
            // Exec, esc, and output
        case Template.modes.ESCAPED:
          this.source += '    ; __append(escape(' + stripSemi(line) + '))' + '\n';
          break;
            // Exec and output
        case Template.modes.RAW:
          this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
          break;
        case Template.modes.COMMENT:
              // Do nothing
          break;
            // Literal <%% mode, append as raw output
        case Template.modes.LITERAL:
          _addOutput();
          break;
        }
      }
        // In string mode, just add the output
      else {
        _addOutput();
      }
    }

    if (self.opts.compileDebug && newLineCount) {
      this.currentLine += newLineCount;
      this.source += '    ; __line = ' + this.currentLine + '\n';
    }
  }
};

/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */
exports.escapeXML = utils.escapeXML;

/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */

exports.__express = exports.renderFile;

// Add require support
/* istanbul ignore else */
if (require.extensions) {
  require.extensions['.ejs'] = function (module, flnm) {
    var filename = flnm || /* istanbul ignore next */ module.filename;
    var options = {
      filename: filename,
      client: true
    };
    var template = fs.readFileSync(filename).toString();
    var fn = exports.compile(template, options);
    module._compile('module.exports = ' + fn.toString() + ';', filename);
  };
}

/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.VERSION = _VERSION_STRING;

/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.name = _NAME;

/* istanbul ignore if */
if (typeof window != 'undefined') {
  window.ejs = exports;
}

},{"../package.json":11,"./utils":10,"fs":12,"path":13}],10:[function(require,module,exports){
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

/**
 * Private utility functions
 * @module utils
 * @private
 */

'use strict';

var regExpChars = /[|\\{}()[\]^$+*?.]/g;

/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */
exports.escapeRegExpChars = function (string) {
  // istanbul ignore if
  if (!string) {
    return '';
  }
  return String(string).replace(regExpChars, '\\$&');
};

var _ENCODE_HTML_RULES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&#34;',
  "'": '&#39;'
};
var _MATCH_HTML = /[&<>\'"]/g;

function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}

/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */

var escapeFuncStr =
  'var _ENCODE_HTML_RULES = {\n'
+ '      "&": "&amp;"\n'
+ '    , "<": "&lt;"\n'
+ '    , ">": "&gt;"\n'
+ '    , \'"\': "&#34;"\n'
+ '    , "\'": "&#39;"\n'
+ '    }\n'
+ '  , _MATCH_HTML = /[&<>\'"]/g;\n'
+ 'function encode_char(c) {\n'
+ '  return _ENCODE_HTML_RULES[c] || c;\n'
+ '};\n';

/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */

exports.escapeXML = function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
exports.escapeXML.toString = function () {
  return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
};

/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopy = function (to, from) {
  from = from || {};
  for (var p in from) {
    to[p] = from[p];
  }
  return to;
};

/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopyFromList = function (to, from, list) {
  list.forEach(function (p) {
    if (typeof from[p] != 'undefined') {
      to[p] = from[p];
    }
  });
  return to;
};

/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements Cache
 * @static
 * @private
 */
exports.cache = {
  _data: {},
  set: function (key, val) {
    this._data[key] = val;
  },
  get: function (key) {
    return this._data[key];
  },
  reset: function () {
    this._data = {};
  }
};

},{}],11:[function(require,module,exports){
module.exports={
  "name": "ejs",
  "description": "Embedded JavaScript templates",
  "keywords": [
    "template",
    "engine",
    "ejs"
  ],
  "version": "2.5.5",
  "author": {
    "name": "Matthew Eernisse",
    "email": "mde@fleegix.org",
    "url": "http://fleegix.org"
  },
  "contributors": [
    {
      "name": "Timothy Gu",
      "email": "timothygu99@gmail.com",
      "url": "https://timothygu.github.io"
    }
  ],
  "license": "Apache-2.0",
  "main": "./lib/ejs.js",
  "repository": {
    "type": "git",
    "url": "git://github.com/mde/ejs.git"
  },
  "bugs": {
    "url": "https://github.com/mde/ejs/issues"
  },
  "homepage": "https://github.com/mde/ejs",
  "dependencies": {},
  "devDependencies": {
    "browserify": "^13.0.1",
    "eslint": "^3.0.0",
    "git-directory-deploy": "^1.5.1",
    "istanbul": "~0.4.3",
    "jake": "^8.0.0",
    "jsdoc": "^3.4.0",
    "lru-cache": "^4.0.1",
    "mocha": "^3.0.2",
    "uglify-js": "^2.6.2"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "scripts": {
    "test": "mocha",
    "lint": "eslint \"**/*.js\" Jakefile",
    "coverage": "istanbul cover node_modules/mocha/bin/_mocha",
    "doc": "jake doc",
    "devdoc": "jake doc[dev]"
  },
  "_id": "ejs@2.5.5",
  "_shasum": "6ef4e954ea7dcf54f66aad2fe7aa421932d9ed77",
  "_resolved": "https://registry.npmjs.org/ejs/-/ejs-2.5.5.tgz",
  "_from": "ejs@>=2.4.1 <3.0.0",
  "_npmVersion": "3.10.8",
  "_nodeVersion": "6.9.1",
  "_npmUser": {
    "name": "mde",
    "email": "mde@fleegix.org"
  },
  "dist": {
    "shasum": "6ef4e954ea7dcf54f66aad2fe7aa421932d9ed77",
    "tarball": "https://registry.npmjs.org/ejs/-/ejs-2.5.5.tgz"
  },
  "maintainers": [
    {
      "name": "mde",
      "email": "mde@fleegix.org"
    }
  ],
  "_npmOperationalInternal": {
    "host": "packages-18-east.internal.npmjs.com",
    "tmp": "tmp/ejs-2.5.5.tgz_1481011535826_0.4493071837350726"
  },
  "directories": {}
}

},{}],12:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],13:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":14}],14:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[2]);
