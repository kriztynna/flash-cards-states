app.directive('editCard',function(FlashCardsFactory){
	return {
		restrict: 'E',
		controller: "NewCardController",
		templateUrl: 'js/directives/editCard/editCard.html',
		
	};
});
