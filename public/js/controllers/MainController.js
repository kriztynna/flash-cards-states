app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory, $rootScope) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.currentCategory;
	$scope.ready;

	$scope.getCategoryCards = function (category) {
		$scope.currentCategory = category;
		$scope.ready=false;
		FlashCardsFactory.getFlashCards(category)
			.then(function (cards) {
				$scope.flashCards = cards;
				$scope.ready=true;
			})
			.then(null, function (error) {
				console.error("Error getting category cards.");
			});
	};

	$scope.getCategoryCards();

	$rootScope.$on("insertCard", function(event, card){
		$scope.flashCards.unshift(card);
	})
});