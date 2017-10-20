angular.module('event', [])
.controller('mainCtrl', mainCtrl)
.directive('textpost',textPostDirective)

function mainCtrl ($scope){
    $scope.eventList = [];

    $scope.addevent = function(event) {
        if($scope.title == '') { return; }
        console.log(event.title, event.description, event.location, event.date);
        $scope.eventList.push({
          title: event.title,
          description: event.description,
          location: event.location,
          date: event.date,
        });
        event.title = '';
        event.description = '';
        event.location = '';
        event.date = '';
	event.upvotes = 0;
	};
  }

function textPostDirective(){
  return{
   scope: {
     event: "="
   },
   restrict: 'E',
   replace: 'true',
   template: (
     '<div class="form-group" id="eventList">'+
	    	'<h3>{{event.title}} </h3> '+
	    	'<div class="row">'+
			'<div class =" col-sm-3">'+
				'<h4><strong>Description:</strong>{{event.description}} </h4>'+
			'</div>'+
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

function incrementUpvotes(event){

}


