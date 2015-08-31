var app = angular.module('flashCards', ['ui.router']);

app.filter('cheat',function(){
    return function (answers) {
        return answers.filter(function(a){return a.correct;});
    }
});