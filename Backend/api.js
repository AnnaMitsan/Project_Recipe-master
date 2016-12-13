var Recipe_List = require('./data/recipe_list');

exports.getRecipeList = function(req, res) {
    res.send(Recipe_List);
};
