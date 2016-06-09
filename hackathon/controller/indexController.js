hackathonApp.controller('indexController', ['$scope', function($scope) {
$scope.showNotification = false;
 $scope.login = function() {
   if($scope.username && $scope.password){
   	 location.href='./templates/landingPage.html';

   }
   else{
   	 alert('Please enter login details');
   }
};


}]);
