/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Home'
    });
};

exports.all_recipes = function(req, res) {
    res.render('all_recipes', {
        pageTitle: 'All recipes'
    });
};

exports.my_tastes = function(req, res) {
    res.render('my_tastes', {
        pageTitle: 'My tastes'
    });
};
