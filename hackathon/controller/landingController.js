hackathonApp.controller('landingController', ['$scope', '$rootScope', '$state', function($scope,$rootScope, $state) {
 $scope.logout = function() {

 	var sysDate = new Date().getTime();
 	$scope.isTeacher = $rootScope.isTeacher;
 	userDetails = {
	    "@context":"http://www.w3.org/ns/activitystreams",
	    "published": sysDate,
	    "type":"logoff",
	    "object": {
	        "type":"User logoff",
	        "content":"Successfully loged off"
	    }
    };
    //utilsFtry.userCheck(localStorage.getItem("Uname"), 'logoff');
    switch(localStorage.getItem("Uname").toLowerCase()){
              case 'teacher1':
                var actorInfo =  {
                    "type":"Teacher",
                    "id":1,
                    "name":"teacher1"
                };
              break;

              case 'teacher2':
                var actorInfo =  {
                    "type":"Teacher",
                    "id":1,
                    "name":"teacher2"
                };
              break;

              case 'student1':
                var actorInfo =  {
                    "type":"Student",
                    "id":2,
                    "name":"student1"
                };
              break;

              case 'student2':
                 var actorInfo =  {
                    "type":"Student",
                    "id":2,
                    "name":"student2"
                 };
              break;

              default:
                alert('Not avalid user!');
              return;
    };
    userDetails.actor = actorInfo;
   //post service call on log out
   $state.go('homePage');
 };    
}]);