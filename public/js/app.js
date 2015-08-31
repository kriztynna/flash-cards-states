var app = angular.module('flashCards', []);

app.filter('cheat',function(){
    return function (answers) {
        return answers.filter(function(a){return a.correct;});
    }
});