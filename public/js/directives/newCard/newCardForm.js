app.directive('newCardForm',function(FlashCardsFactory){
	return {
		restrict: 'E',
		controller: "NewCardController",
		templateUrl: 'js/directives/newCard/NewCardForm.html',
		
	};
});