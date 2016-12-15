var fs = require('fs');
var ejs = require('ejs');

exports.OneRecipe = ejs.compile(fs.readFileSync('./Frontend/templates//OneRecipe.ejs', "utf8"));

exports.RecipeList_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates//RecipeList_OneItem.ejs', "utf8"));


exports.modalRecipe = ejs.compile(fs.readFileSync('./Frontend/templates/modalRecipe.ejs', "utf8"));


