angular.module('event', [])
.controller('MainCtrl', [
  '$scope','$http',
function($scope,$http){
    $scope.events = [];

    $scope.create = function(event) {
      return $http.post('/events', event).success(function(data){
        console.log(data);
        $scope.events.push(data);
      });
    };

    $scope.addevent = function() {
        if($scope.title == '') { return; }
        console.log($scope.title, $scope.description, $scope.location, $scope.date);
        $scope.events.push({
          title: $scope.title,
          description: $scope.description,
          location: $scope.location,
          date: $scope.date,
          upvotes: 0,
        });
        $scope.title = '';
        $scope.description = '';
        $scope.location = '';
        $scope.date = '';

      	// $scope.create({title:$scope.title, date:$scope.date, description:$scope.description, location:$scope.location, upvotes:0});
      	// $scope.formContent='';    
    };

    $scope.upvote = function(event) {
      return $http.put('/events/' + event._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          event.upvotes = data.upvotes;
        });
    };

    $scope.incrementUpvotes = function(event) {
        console.log(event);
        event.upvote += 1;
        console.log("upvote"+event.upvote);
      // $scope.upvote(event);
    };    

   
 //    angular.module('myApp',[]).factory('getDataService', function($http) {
	// return {
	//     getData: function(done) {
	// 	//http.get([some address])
	// 	//this needs to be updated to a databse i think?
	// 	    .success(function(data) {
	// 	    done(data);
	// 	})
	// 	.error(function(error) {
	// 	    alert('error');
	// 	});
	//     }
	// }
 //    });

  }
]);
