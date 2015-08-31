app.controller("NewCardController", function($scope, FlashCardsFactory, $rootScope, $http, $stateParams) {
    $scope.categories = FlashCardsFactory.categories;
    $scope.newCard = {
        question: null,
        category: null,
        answers: [{
            text: null,
            correct: false
        }, {
            text: null,
            correct: false
        }, {
            text: null,
            correct: false
        }]
    };
    $scope.newFlashCard = function(card) {
        FlashCardsFactory.newFlashCard(card)
            .then(function(card) {
                $rootScope.$broadcast("insertCard", card);
            })
            .then(function() {
                for (var key in $scope.newCard) {
                    if (key === 'answers') {
                        $scope.newCard.answers.forEach(function(answer) {
                            answer.text = null;
                            answer.correct = false;
                        });
                    } else {
                        $scope.newCard[key] = null;
                    }
                }
            });
    };

    $scope.update = function() {
        $http.put('/cards/' + $stateParams.id, $scope.newCard)
            .then(function(updatedCard) {
                console.log(updatedCard);
                FlashCardsFactory.getFlashCards();
            });
    };
});
