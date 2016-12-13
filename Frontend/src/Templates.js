var fs = require('fs');
var ejs = require('ejs');


exports.RecipeList_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates//RecipeList_OneItem.ejs', "utf8"));

exports.Recipe_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Recipe_OneItem.ejs', "utf8"));
