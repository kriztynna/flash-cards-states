app.directive('borderOnHover',function(){
	return {
		restrict: 'A',
		link: function (s,e,a) {
			e.on('mouseenter',function(e){
				var target = angular.element(e.target);
				target.addClass('darkborder');
			});
			e.on('mouseleave',function(e){
				var target = angular.element(e.target);
				target.removeClass('darkborder');
			});
		}
	};
});