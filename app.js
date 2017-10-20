angular.module('event', [])
.controller('mainCtrl', mainCtrl)
.directive('textpost',textPostDirective)

function mainCtrl ($scope){
    $scope.events = [];

    $scope.addevent = function() {
        if($scope.title == '') { return; }
        console.log($scope.title, $scope.description, $scope.location, $scope.date);
        $scope.events.push({
          title: $scope.title,
          description: $scope.description,
          location: $scope.location,
          date: $scope.date,
        });
        $scope.title = '';
        $scope.description = '';
        $scope.location = '';
        $scope.date = '';
	};
  }

function textPostDirective(){
  return{
   scope: {
     title: "="
   },
   restrict: 'E',
   replace: 'true',
   template: (
     '<div class="form-group" id="eventList">'+
	    	'<h3>{{event.title}} </h3> '+
	    	'<div class="row">'+
	    		'<div class="col-sm-3">'+
	    			'<h4><strong>When:</strong> {{event.date}} </h4>'+
	    		'</div>'+
	    		'<div class="col-sm-3">'+
	    			'<h4><strong>Where: </strong> {{event.location}} </h4>'+
	    		'</div>'+
	    		'<div class="col-sm-3">'+
	    			'<h4><strong>Likes:</strong> {{event.upvotes}} </h4>'+
	    		'</div>'+
	    		'<div class="col-sm-3">'+
	    			'<h4> <span class="glyphicon glyphicon-thumbs-up" ng-click="incrementUpvotes(event)"></span> </h4>'+
	    		'</div>'+
	    	'</div>'
    ),
  }
};


