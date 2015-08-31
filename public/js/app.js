var app = angular.module('flashCards', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('statistics',{url:'/statistics',templateUrl:'../templates/statistics.html'})
		.state('newcard',{url:'/newcard',templateUrl:'../js/directives/newCard/NewCardForm.html'})
		.state('viewcards',{url:'/viewcards',templateUrl:'../js/directives/flashCard/flashCardDirective.html'});
});

app.filter('cheat',function(){
    return function (answers) {
        return answers.filter(function(a){return a.correct;});
    }
});