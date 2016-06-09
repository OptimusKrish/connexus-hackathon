hackathonApp.controller('indexController', ['$scope', '$state', '$rootScope', function($scope,$state,$rootScope) {
$scope.showNotification = false;
var userDetails = null;
$rootScope.isTeacher = false;

 $scope.login = function() {
   if($scope.username && $scope.password){
   	 var sysDate = new Date().getTime();
 	 userDetails = {
	    "@context":"http://www.w3.org/ns/activitystreams",
	    "published": sysDate,
	    "type":"login",
	    "object":{
	        "type":"User login",
	        "content":"Successfully logged in"
	    }
     };
    var Uname = $scope.username;
    localStorage.setItem("Uname", Uname);
    $scope.userCheck(Uname, 'login');
   }
   else{
   	 alert('Please enter login details');
   }
 };

 $scope.userCheck = function(username, action) {
    switch(username.toLowerCase()){
              case 'teacher1':
                var actorInfo =  {
                    "type":"Teacher",
                    "id":1,
                    "name":"teacher1"
                };
                $rootScope.isTeacher = true;
              break;

              case 'teacher2':
                var actorInfo =  {
                    "type":"Teacher",
                    "id":1,
                    "name":"teacher2"
                };
               $rootScope.isTeacher = true;
              break;

              case 'student1':
                var actorInfo =  {
                    "type":"Student",
                    "id":2,
                    "name":"student1"
                };
                $rootScope.isTeacher = false;
              break;

              case 'student2':
                 var actorInfo =  {
                    "type":"Student",
                    "id":2,
                    "name":"student2"
                 };
                $rootScope.isTeacher = false;
              break;

              default:
                alert('Not avalid user!');
              return;
    };
    userDetails.actor = actorInfo;
    if(action == 'login'){
      console.log($rootScope.isTeacher,userDetails);
        //post call for service comes here
        $state.go('landingPage');
        return;
    }
    else{
        //$scope.createLog();
    }
    
 };

 $scope.loginSuccess = function(){
 	//post call for service comes here
	$state.go('landingPage');
    return;
 };

}]);
