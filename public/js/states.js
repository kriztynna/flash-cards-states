app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('statistics', {
            url: '/statistics',
            templateUrl: '../templates/statistics.html'
        });

    $stateProvider
        .state('newcard', {
            url: '/newcard',
            templateUrl: '../js/directives/newCard/NewCardForm.html'
        });

    $stateProvider
        .state('viewcards', {
            url: '',
            templateUrl: '../templates/main.html'
        });

    $stateProvider
    	.state('manageCard', {
            url: '/manageCard/:id',
            templateUrl: '../templates/manage.html',
        });

    $stateProvider
    	.state('manageCard.edit', {
            url: '/edit',
            templateUrl: '../js/directives/editCard/editCard.html'
        });

    $stateProvider
    	.state('manageCard.delete', {
            url: '/delete',
            template: '<p>Got to delete</p>',
            controller: function($stateParams, $http, $state) {
            	var id = $stateParams.id;
            	$http.delete('/manageCard/' + id +'/delete')
            	.then(function(){
            		console.log('trying to use state.go');
            		$state.go('viewcards');
            	});
            }
        });

});
